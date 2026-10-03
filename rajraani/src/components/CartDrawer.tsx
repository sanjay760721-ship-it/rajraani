"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "./cart-context";
import { CartThumb } from "./CartThumb";
import { BASE_CURRENCY } from "@/lib/domain/types";
import { formatMoney } from "@/lib/money";
import { BRAND } from "@/lib/brand";
import { createCheckoutAction, completePaymentAction, checkDiscountAction, type DiscountCheck } from "@/lib/checkout/actions";

/** What the gateway hands back to the success handler. */
type RazorpayPaymentResponse = {
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  modal?: { ondismiss: () => void };
};

type RazorpayInstance = { open: () => void };

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

let gatewayLoading: Promise<boolean> | undefined;
function loadGateway(): Promise<boolean> {
  if (window.Razorpay) return Promise.resolve(true);
  if (gatewayLoading) return gatewayLoading;
  gatewayLoading = new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    const finish = (ok: boolean) => {
      clearTimeout(timer);
      script.onload = null;
      script.onerror = null;
      if (!ok) script.remove();
      resolve(ok);
    };
    const timer = setTimeout(() => finish(false), 15_000);
    script.onload = () => finish(Boolean(window.Razorpay));
    script.onerror = () => finish(false);
    document.head.appendChild(script);
  }).then((ok) => {
    gatewayLoading = undefined;
    return ok;
  });
  return gatewayLoading;
}

/**
 * Cart drawer with live Razorpay payment checkout integration.
 *
 * Supports cart management, customer delivery details, Razorpay gateway order
 * creation, payment confirmation, and redirection to order receipt.
 */
export function CartDrawer() {
  const { lines, isOpen, close, setQuantity, remove, subtotal, clear } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);
  const router = useRouter();

  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Discount code. The server re-checks it at checkout; this is for display.
  const [codeInput, setCodeInput] = useState("");
  const [discount, setDiscount] = useState<(DiscountCheck & { ok: true; cartKey: string }) | null>(null);
  const [codeError, setCodeError] = useState<string | null>(null);
  const [checkingCode, setCheckingCode] = useState(false);
  // A discount is only shown for the cart it was checked against.
  const cartKey = lines.map((line) => `${line.handle}x${line.quantity}`).join(",");
  const activeDiscount = discount && discount.cartKey === cartKey ? discount : null;
  const applyCode = async () => {
    setCheckingCode(true);
    setCodeError(null);
    const result = await checkDiscountAction(
      lines.map((line) => ({ handle: line.handle, quantity: line.quantity })),
      codeInput,
    );
    setCheckingCode(false);
    if (!result.ok) {
      setDiscount(null);
      setCodeError(result.error);
      return;
    }
    setDiscount({ ...result, cartKey });
  };

  // Customer Shipping Details Form State
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "Uttar Pradesh",
    postcode: "221001",
  });

  // Reset the drawer back to the cart step whenever it closes. Adjusting state
  // during render is React's documented alternative to an effect here — the
  // reset is derived from `isOpen` changing, not from an external system.
  const [wasOpen, setWasOpen] = useState(isOpen);
  if (wasOpen !== isOpen) {
    setWasOpen(isOpen);
    if (!isOpen) {
      setStep("cart");
      setErrorMsg(null);
    }
  }

  useEffect(() => {
    if (!isOpen) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus();
    };
  }, [isOpen, close]);

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setErrorMsg(null);
    if (!(await loadGateway())) {
      setErrorMsg("The payment window could not load. Please refresh and try again.");
      setLoading(false);
      return;
    }

    try {

    const cartRequestLines = lines.map((l) => ({
      handle: l.handle,
      quantity: l.quantity,
    }));

    const initResult = await createCheckoutAction(cartRequestLines, customer, activeDiscount?.code);

    if (!initResult.ok) {
      setErrorMsg(initResult.error);
      setLoading(false);
      return;
    }

    const { reference, razorpayOrderId, amountMinor, keyId } = initResult;

    // Check if Razorpay JS SDK is loaded in browser
    if (typeof window !== "undefined" && window.Razorpay) {
      const options = {
        key: keyId,
        amount: amountMinor,
        currency: "INR",
        name: `${BRAND.name} Banarasi`,
        description: `Order ${reference}`,
        order_id: razorpayOrderId,
        handler: async function (response: RazorpayPaymentResponse) {
          try {
          const paymentResult = await completePaymentAction(
            response.razorpay_order_id || "",
            response.razorpay_payment_id || "",
            response.razorpay_signature || "",
          );

          if (paymentResult.ok) {
            clear();
            close();
            router.push(`/order-confirmation?ref=${paymentResult.reference}`);
          } else {
            setErrorMsg(paymentResult.error);
            setLoading(false);
          }
          } catch {
            setErrorMsg("Payment confirmation was interrupted. Please contact us with your payment reference before retrying.");
            setLoading(false);
          }
        },
        prefill: {
          name: customer.fullName,
          email: customer.email,
          contact: customer.phone,
        },
        theme: {
          color: getComputedStyle(panelRef.current ?? document.documentElement).getPropertyValue("--color-ink").trim(),
        },
        modal: { ondismiss: () => setLoading(false) },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      setErrorMsg("The payment window could not load. Please refresh and try again.");
      setLoading(false);
    }
    } catch {
      setErrorMsg("Checkout was interrupted. Please try again.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-scrim"
        onClick={close}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-bg shadow-2xl"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-rule px-6 py-5">
          <h2 className="text-h4 font-display font-semibold">
            {step === "cart" ? "Your Cart" : "Checkout Shipping & Payment"}
          </h2>
          <button type="button" className="eyebrow text-ink-muted hover:text-ink" onClick={close}>
            Close ✕
          </button>
        </div>

        {step === "cart" ? (
          /* Cart Line Items View */
          lines.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="font-display text-h3 text-ink">Nothing here yet.</p>
              <button type="button" className="cta" onClick={close}>
                Continue looking
              </button>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-rule overflow-y-auto px-6">
                {lines.map((line) => (
                  <li key={line.handle} className="flex gap-4 py-5">
                    <CartThumb line={line} className="aspect-portrait w-20" />
                    <div className="flex-1">
                      <p className="font-display font-semibold text-ink text-base">
                        {line.poeticName}
                      </p>
                      <p className="text-caption text-ink-body text-xs">{line.title}</p>
                      <p className="crumbs mt-1 text-ink-muted">Ref. {line.sku}</p>
                      <p className="mt-2 tabular-nums text-ink font-semibold">
                        {formatMoney({
                          minorUnits: line.priceMinorUnits * line.quantity,
                          currency: BASE_CURRENCY,
                        })}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <QuantityStepper
                          value={line.quantity}
                          max={line.maxQuantity}
                          onChange={(quantity) => setQuantity(line.handle, quantity)}
                          label={line.poeticName}
                        />
                        <button
                          type="button"
                          className="eyebrow text-ink-muted underline text-xs"
                          onClick={() => remove(line.handle)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-rule px-6 py-5 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow text-ink-muted">Subtotal</span>
                  <span className="tabular-nums text-ink font-display text-xl font-bold">
                    {formatMoney(subtotal)}
                  </span>
                </div>
                <p className="text-caption text-ink-muted text-xs">
                  Complimentary express shipping across India. Taxes included.
                </p>

                <button
                  type="button"
                  onClick={() => setStep("checkout")}
                  className="w-full bg-ink px-6 py-4 text-bg hover:opacity-90 transition-opacity font-semibold cursor-pointer"
                >
                  <span className="eyebrow">Proceed to Checkout →</span>
                </button>
              </div>
            </>
          )
        ) : (
          /* Checkout Customer Shipping Form Step */
          <form
            onSubmit={handleCheckoutSubmit}
            className="flex-1 flex flex-col justify-between overflow-y-auto px-6 py-6 space-y-6"
          >
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-rule pb-2">
                <span className="eyebrow text-ink font-semibold">Shipping Details</span>
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="eyebrow text-ink-muted underline"
                >
                  ← Back to Cart
                </button>
              </div>

              {errorMsg ? (
                <div className="border border-error bg-error/5 p-3 text-caption text-error">
                  {errorMsg}
                </div>
              ) : null}

              {/* Each field is labelled, named and tagged for autofill, so the browser
                  can fill in a saved address on a phone instead of six fields typed by hand. */}
              <CheckoutField id="co-name" label="Full name" autoComplete="name" placeholder="e.g. Radhika Sharma"
                value={customer.fullName} onChange={(v) => setCustomer({ ...customer, fullName: v })} />

              <div className="grid gap-3 sm:grid-cols-2">
                <CheckoutField id="co-email" label="Email address" type="email" autoComplete="email" placeholder="radhika@example.com"
                  value={customer.email} onChange={(v) => setCustomer({ ...customer, email: v })} />
                <CheckoutField id="co-phone" label="Mobile phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210"
                  value={customer.phone} onChange={(v) => setCustomer({ ...customer, phone: v })} />
              </div>

              <CheckoutField id="co-address" label="Delivery address" autoComplete="street-address" placeholder="House/Flat No., Building, Street Name"
                value={customer.addressLine1} onChange={(v) => setCustomer({ ...customer, addressLine1: v })} />

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <CheckoutField id="co-city" label="City" autoComplete="address-level2" placeholder="Varanasi"
                  value={customer.city} onChange={(v) => setCustomer({ ...customer, city: v })} />
                <CheckoutField id="co-state" label="State" autoComplete="address-level1" placeholder="Uttar Pradesh"
                  value={customer.state} onChange={(v) => setCustomer({ ...customer, state: v })} />
                <CheckoutField id="co-pin" label="PIN code" autoComplete="postal-code" placeholder="221001" inputMode="numeric"
                  pattern="[0-9]{6}" maxLength={6} title="Six digits"
                  value={customer.postcode} onChange={(v) => setCustomer({ ...customer, postcode: v.replace(/\D/g, "") })} />
              </div>
            </div>

              {/* How payment works, in plain words. Only what is true for every piece
                  and every Razorpay account: no "Silk Mark" (silk only, and half the
                  shop is cotton or linen), and no card brands or EMI that depend on
                  what Razorpay has switched on for this account. */}
              <dl className="space-y-2 border-t border-rule pt-4 text-caption text-ink-muted">
                <div>
                  <dt className="eyebrow text-ink">Payment</dt>
                  <dd className="mt-1">UPI, cards and netbanking, through Razorpay&rsquo;s secure checkout.</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink">Delivery</dt>
                  <dd className="mt-1">Complimentary express shipping across India. Taxes included.</dd>
                </div>
              </dl>

              {/* Discount code */}
              <div className="border-t border-rule pt-4">
                <label htmlFor="discount-code" className="eyebrow text-ink-muted">
                  Have a discount code?
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="discount-code"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
                    className="min-w-0 flex-1 border border-rule-input bg-transparent px-3 py-2 text-sm uppercase tracking-wider text-ink outline-none focus:border-ink"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={applyCode}
                    disabled={checkingCode || !codeInput.trim()}
                    className="cta-secondary shrink-0 disabled:opacity-50"
                  >
                    {checkingCode ? "Checking…" : "Apply"}
                  </button>
                </div>
                {codeError ? (
                  <p role="alert" className="text-caption mt-2 text-error">
                    {codeError}
                  </p>
                ) : null}
                {activeDiscount ? (
                  <p role="status" className="text-caption mt-2 flex justify-between text-ink">
                    <span>
                      Discount ({activeDiscount.code}, {activeDiscount.label})
                      <button type="button" className="ml-2 underline text-ink-muted" onClick={() => { setDiscount(null); setCodeInput(""); }}>
                        remove
                      </button>
                    </span>
                    <span>−{formatMoney({ minorUnits: activeDiscount.discountMinor, currency: subtotal.currency })}</span>
                  </p>
                ) : null}
              </div>

              {/* Order Total & Submit Payment Button */}
              <div className="border-t border-rule pt-4 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="eyebrow text-ink-muted">To pay</span>
                  <span className="font-display text-xl font-bold text-ink">
                    {formatMoney(activeDiscount ? { minorUnits: activeDiscount.totalMinor, currency: subtotal.currency } : subtotal)}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer bg-ink px-6 py-4 font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Opening secure payment…" : "Pay securely"}
                </button>
              </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function QuantityStepper({
  value,
  max,
  onChange,
  label,
  variant = "compact",
}: {
  value: number;
  max: number;
  onChange: (quantity: number) => void;
  label: string;
  /**
   * `compact` for the cart line, where the stepper sits inside a narrow
   * column. `wide` for the PDP, where the reference gives it a full bar with
   * filled ends — measured ~250×44 (design-addendum §A5.2).
   */
  variant?: "compact" | "wide";
}) {
  const wide = variant === "wide";
  // Filled ends on a white centre, as the reference has it: the ± are solid
  // ink blocks and the disabled one greys back rather than fading the glyph
  // alone, so it is obvious which way the count can still go.
  const buttonClass = wide
    ? "bg-ink px-5 py-3 text-lg leading-none text-bg transition-colors disabled:bg-ink-muted/45"
    : "px-3 py-1.5 text-ink disabled:opacity-40";

  return (
    <div
      data-stepper
      className={`flex items-center border border-rule-input ${
        wide ? "w-[250px] justify-between bg-bg" : ""
      }`}
    >
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Decrease quantity of ${label}`}
      >
        −
      </button>
      <span
        className={`text-center tabular-nums ${wide ? "flex-1" : "min-w-8"}`}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase quantity of ${label}`}
      >
        +
      </button>
    </div>
  );
}

/** One labelled checkout field. Every field is required. */
function CheckoutField({
  id,
  label,
  value,
  onChange,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "placeholder" | "inputMode" | "pattern" | "maxLength" | "title">) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-1 block text-[10px] uppercase text-ink-muted">
        {label} *
      </label>
      <input
        id={id}
        name={id.slice(3)}
        type={type}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-rule bg-bg p-2 text-ink focus:border-ink focus:outline-none"
        {...rest}
      />
    </div>
  );
}
