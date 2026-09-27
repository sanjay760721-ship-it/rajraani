"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  saveProductAction,
  type FormState,
} from "@/lib/admin/product-actions";
import type { ProductInput } from "@/lib/data/admin-queries";

export type Option = { slug: string; name: string };
export type Vocabulary = {
  garment: Option[];
  weave: Option[];
  fabric: Option[];
  colour: Option[];
  zari: Option[];
  motif: Option[];
  fulfilment: Option[];
};

const EMPTY: ProductInput = {
  handle: "",
  title: "",
  poeticName: "",
  sku: "",
  priceRupees: 0,
  inventoryQuantity: 1,
  fulfilmentMode: "ready_to_ship",
  dispatchDaysMin: 10,
  dispatchDaysMax: 12,
  narrative: "",
  specColour: "",
  specTechnique: "",
  specFabric: "",
  specSpeciality: "",
  specCollectionNote: "",
  specNote: "",
  provenanceWorkshop: "",
  provenanceLoom: "",
  provenanceWeeks: 8,
  provenanceArtisans: 2,
  garmentType: "saree",
  weave: "",
  fabric: "",
  colourFamily: "",
  campaignSlug: "",
  motifs: [],
  zariTypes: [],
  published: false,
};

export function ProductForm({
  product,
  vocabulary,
  campaigns,
}: {
  product?: ProductInput & { id: number };
  vocabulary: Vocabulary;
  campaigns: { slug: string; name: string }[];
}) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    saveProductAction,
    { errors: {} },
  );

  const value = state.values ?? product ?? EMPTY;
  const errors = state.errors;

  return (
    <form action={formAction} className="max-w-3xl space-y-12">
      {product ? <input type="hidden" name="id" value={product.id} /> : null}

      {errors.form ? (
        <p role="alert" className="border px-4 py-3 a-label" style={{ borderColor: "var(--a-negative)", color: "var(--a-negative)", backgroundColor: "color-mix(in srgb, var(--a-negative) 6%, transparent)", borderRadius: "var(--a-radius)" }}>
          {errors.form}
        </p>
      ) : null}

      <Section
        title="Name"
        note="A piece has a short name (Aparajita) and a longer description of the cloth."
      >
        <Field
          label="Name"
          name="poeticName"
          defaultValue={value.poeticName}
          error={errors.poeticName}
          hint="The short name shoppers see first, e.g. Aparajita."
          required
        />
        <Field
          label="Description of the cloth"
          name="title"
          defaultValue={value.title}
          error={errors.title}
          hint="Colour, fabric, weave and garment, e.g. Blue Katan Silk Kadhua Saree."
          required
        />
        <Field
          label="Web address"
          name="handle"
          defaultValue={value.handle}
          error={errors.handle}
          hint="Filled in for you. Changing it breaks old links to this piece."
          required
        />
        <Field
          label="Product code"
          name="sku"
          defaultValue={value.sku}
          error={errors.sku}
          required
        />
      </Section>

      <Section title="Price and stock">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Price (₹)"
            name="priceRupees"
            type="number"
            defaultValue={value.priceRupees || ""}
            error={errors.priceRupees}
            hint="In rupees, no commas, e.g. 68000."
            required
          />
          <Field
            label="How many in stock"
            name="inventoryQuantity"
            type="number"
            defaultValue={value.inventoryQuantity}
            error={errors.inventoryQuantity}
            hint="Usually 1. At 0 it shows as sold out."
            required
          />
          <Select
            label="Ready to send?"
            name="fulfilmentMode"
            options={vocabulary.fulfilment}
            defaultValue={value.fulfilmentMode}
            error={errors.fulfilmentMode}
            hint="Whether it is ready to send, or woven after it is ordered."
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Dispatch from (days)"
              name="dispatchDaysMin"
              type="number"
              defaultValue={value.dispatchDaysMin}
              error={errors.dispatchDaysMin}
              required
            />
            <Field
              label="to"
              name="dispatchDaysMax"
              type="number"
              defaultValue={value.dispatchDaysMax}
              error={errors.dispatchDaysMax}
              required
            />
          </div>
        </div>
      </Section>

      <Section
        title="The story and details"
        note="A short story about this piece (about 90 words) and its details."
      >
        <TextArea
          label="Story"
          name="narrative"
          rows={8}
          defaultValue={value.narrative}
          error={errors.narrative}
          required
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Colour" name="specColour" defaultValue={value.specColour} error={errors.specColour} hint="In words, e.g. Indigo blue." required />
          <Field label="Technique" name="specTechnique" defaultValue={value.specTechnique} error={errors.specTechnique} required />
          <Field label="Fabric" name="specFabric" defaultValue={value.specFabric} error={errors.specFabric} required />
          <Field label="Speciality" name="specSpeciality" defaultValue={value.specSpeciality} hint="Optional." />
          <Field label="Collection note" name="specCollectionNote" defaultValue={value.specCollectionNote} hint="Optional." />
          <Field label="Note" name="specNote" defaultValue={value.specNote} hint="Optional." />
        </div>
      </Section>

      <Section
        title="Where it was made"
        note="Who wove it and how long it took. Shoppers trust this."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Workshop" name="provenanceWorkshop" defaultValue={value.provenanceWorkshop} error={errors.provenanceWorkshop} required />
          <Field label="Loom" name="provenanceLoom" defaultValue={value.provenanceLoom} error={errors.provenanceLoom} required />
          <Field label="Weeks on the loom" name="provenanceWeeks" type="number" defaultValue={value.provenanceWeeks} error={errors.provenanceWeeks} required />
          <Field label="Weavers involved" name="provenanceArtisans" type="number" defaultValue={value.provenanceArtisans} error={errors.provenanceArtisans} required />
        </div>
      </Section>

      <Section
        title="Filters"
        note="Shoppers use these to find the piece. They also decide which collections it appears in."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Select label="What it is" name="garmentType" options={vocabulary.garment} defaultValue={value.garmentType} error={errors.garmentType} />
          <Select
            label="Weave"
            name="weave"
            options={vocabulary.weave}
            defaultValue={value.weave}
            error={errors.weave}
            allowEmpty
            hint="Leave as None for suits."
          />
          <Select label="Fabric" name="fabric" options={vocabulary.fabric} defaultValue={value.fabric} error={errors.fabric} />
          <Select label="Main colour" name="colourFamily" options={vocabulary.colour} defaultValue={value.colourFamily} error={errors.colourFamily} />
        </div>

        <CheckboxGroup label="Motifs" name="motifs" options={vocabulary.motif} selected={value.motifs} error={errors.motifs} />
        <CheckboxGroup label="Zari" name="zariTypes" options={vocabulary.zari} selected={value.zariTypes} error={errors.zariTypes} />

        <Select
          label="Campaign"
          name="campaignSlug"
          options={campaigns.map((c) => ({ slug: c.slug, name: c.name }))}
          defaultValue={value.campaignSlug}
          allowEmpty
          hint="Optional."
        />
      </Section>

      <Section title="On the shop">
        <label className="flex items-center gap-3 a-body-sm" style={{ color: "var(--a-ink)" }}>
          <input
            type="checkbox"
            name="published"
            defaultChecked={value.published}
            className="size-4 accent-ink"
          />
          Show this piece on the shop
        </label>
        <p className="a-label" style={{ color: "var(--a-outline)" }}>
          Untick to hide it from shoppers — nothing is lost.
        </p>
      </Section>

      <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)" }}>
        <button
          type="submit"
          disabled={pending}
          className="a-btn-primary"
        >
          <span className="a-label">{pending ? "Saving…" : "Save"}</span>
        </button>
        <Link href="/admin/products" className="a-btn-ghost">
          Cancel
        </Link>
      </div>
    </form>
  );
}

/* ---------------------------------------------------------------- controls */

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-6 border-t pt-6" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)" }}>
      <legend className="sr-only">{title}</legend>
      <div>
        <h2 className="a-heading-sm">{title}</h2>
        {note ? <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>{note}</p> : null}
      </div>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  name,
  error,
  hint,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  type?: string;
  defaultValue?: string | number;
  required?: boolean;
}) {
  const describedBy = [hint ? `${name}-hint` : "", error ? `${name}-error` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={name} className="a-label block" style={{ color: "var(--a-outline)" }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        defaultValue={rest.defaultValue}
        className={`a-input w-full ${
          error ? "a-input-error" : ""
        }`}
        {...rest}
      />
      {hint ? (
        <p id={`${name}-hint`} className="a-label mt-1" style={{ color: "var(--a-outline)" }}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="a-label mt-1" style={{ color: "var(--a-negative)" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextArea({
  label,
  name,
  error,
  rows,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  error?: string;
  rows: number;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="a-label block" style={{ color: "var(--a-outline)" }}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`a-input w-full min-h-[120px] resize-y ${
          error ? "a-input-error" : ""
        }`}
      />
      {error ? (
        <p id={`${name}-error`} className="a-label mt-1" style={{ color: "var(--a-negative)" }}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
  error,
  hint,
  allowEmpty = false,
}: {
  label: string;
  name: string;
  options: Option[];
  defaultValue?: string;
  error?: string;
  hint?: string;
  allowEmpty?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="a-label block" style={{ color: "var(--a-outline)" }}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue ?? ""}
        aria-invalid={error ? true : undefined}
        className={`a-select w-full ${error ? "a-input-error" : ""}`}
      >
        <option value="">{allowEmpty ? "None" : "Choose…"}</option>
        {options.map((option) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      {hint ? <p className="a-label mt-1" style={{ color: "var(--a-outline)" }}>{hint}</p> : null}
      {error ? <p className="a-label mt-1" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
    </div>
  );
}

function CheckboxGroup({
  label,
  name,
  options,
  selected,
  error,
}: {
  label: string;
  name: string;
  options: Option[];
  selected: string[];
  error?: string;
}) {
  return (
    <fieldset>
      <legend className="a-label" style={{ color: "var(--a-outline)" }}>{label}</legend>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label
            key={option.slug}
            className="flex items-center gap-2 a-body-sm"
            style={{ color: "var(--a-ink)" }}
          >
            <input
              type="checkbox"
              name={name}
              value={option.slug}
              defaultChecked={selected.includes(option.slug)}
              className="size-3.5 accent-ink"
            />
            {option.name}
          </label>
        ))}
      </div>
      {error ? <p className="a-label mt-1" style={{ color: "var(--a-negative)" }}>{error}</p> : null}
    </fieldset>
  );
}