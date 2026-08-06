"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  saveProductAction,
  type FormState,
} from "@/lib/admin/product-actions";
import type { ProductInput } from "@/lib/data/admin-queries";

/**
 * The product form.
 *
 * Grouped the way someone photographing and describing a saree actually thinks
 * about it — what it is, what it costs, what it says, how it was made, how it
 * is classified — rather than in database column order.
 *
 * `useActionState` keeps the typed values on a validation failure. Losing 90
 * words of narrative to a mistyped SKU is the kind of thing that stops people
 * using an admin at all.
 */

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

  // Values come from the last submission if it failed, then the saved record,
  // then the defaults.
  const value = state.values ?? product ?? EMPTY;
  const errors = state.errors;

  return (
    <form action={formAction} className="max-w-3xl space-y-12">
      {product ? <input type="hidden" name="id" value={product.id} /> : null}

      {errors.form ? (
        <p role="alert" className="border border-error px-4 py-3 text-caption text-error">
          {errors.form}
        </p>
      ) : null}

      <Section
        title="What it is"
        note="The title describes the cloth. The name is what you call the piece."
      >
        <Field
          label="Name"
          name="poeticName"
          defaultValue={value.poeticName}
          error={errors.poeticName}
          hint="Its proper name — Aparajita, not a description."
          required
        />
        <Field
          label="Title"
          name="title"
          defaultValue={value.title}
          error={errors.title}
          hint="Colour, fabric, technique, garment. No mention of stock or dispatch."
          required
        />
        <Field
          label="Web address"
          name="handle"
          defaultValue={value.handle}
          error={errors.handle}
          hint="Lower case, hyphens. Becomes /products/…"
          required
        />
        <Field
          label="SKU"
          name="sku"
          defaultValue={value.sku}
          error={errors.sku}
          required
        />
      </Section>

      <Section title="Price and availability">
        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Price (₹)"
            name="priceRupees"
            type="number"
            defaultValue={value.priceRupees || ""}
            error={errors.priceRupees}
            hint="Whole rupees."
            required
          />
          <Field
            label="How many"
            name="inventoryQuantity"
            type="number"
            defaultValue={value.inventoryQuantity}
            error={errors.inventoryQuantity}
            hint="Usually 1. Zero means sold out — the page still works."
            required
          />
          <Select
            label="Dispatch"
            name="fulfilmentMode"
            options={vocabulary.fulfilment}
            defaultValue={value.fulfilmentMode}
            error={errors.fulfilmentMode}
            hint="Shows as a badge. Never put this in the title."
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
        title="What it says"
        note="The narrative is the moat. Around 90 words, specific to this piece."
      >
        <TextArea
          label="Narrative"
          name="narrative"
          rows={8}
          defaultValue={value.narrative}
          error={errors.narrative}
          required
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Colour" name="specColour" defaultValue={value.specColour} error={errors.specColour} hint="In words — 'Indigo blue'." required />
          <Field label="Technique" name="specTechnique" defaultValue={value.specTechnique} error={errors.specTechnique} required />
          <Field label="Fabric" name="specFabric" defaultValue={value.specFabric} error={errors.specFabric} required />
          <Field label="Speciality" name="specSpeciality" defaultValue={value.specSpeciality} hint="Optional." />
          <Field label="Collection note" name="specCollectionNote" defaultValue={value.specCollectionNote} hint="Optional." />
          <Field label="Note" name="specNote" defaultValue={value.specNote} hint="Optional." />
        </div>
      </Section>

      <Section
        title="Where it came from"
        note="This replaces reviews as the reason to trust the page."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Workshop" name="provenanceWorkshop" defaultValue={value.provenanceWorkshop} error={errors.provenanceWorkshop} required />
          <Field label="Loom" name="provenanceLoom" defaultValue={value.provenanceLoom} error={errors.provenanceLoom} required />
          <Field label="Weeks on the loom" name="provenanceWeeks" type="number" defaultValue={value.provenanceWeeks} error={errors.provenanceWeeks} required />
          <Field label="Weavers involved" name="provenanceArtisans" type="number" defaultValue={value.provenanceArtisans} error={errors.provenanceArtisans} required />
        </div>
      </Section>

      <Section
        title="How it is classified"
        note="These drive the filters. You can only choose from the agreed vocabulary — that is deliberate."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Select label="Garment" name="garmentType" options={vocabulary.garment} defaultValue={value.garmentType} error={errors.garmentType} />
          <Select label="Weave" name="weave" options={vocabulary.weave} defaultValue={value.weave} error={errors.weave} />
          <Select label="Fabric" name="fabric" options={vocabulary.fabric} defaultValue={value.fabric} error={errors.fabric} />
          <Select label="Colour family" name="colourFamily" options={vocabulary.colour} defaultValue={value.colourFamily} error={errors.colourFamily} />
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

      <Section title="Publishing">
        <label className="flex items-center gap-3 text-caption text-ink-body">
          <input
            type="checkbox"
            name="published"
            defaultChecked={value.published}
            className="size-4 accent-ink"
          />
          Show this piece on the site
        </label>
        <p className="text-caption text-ink-muted">
          Leave unticked to keep it as a draft while you finish the photographs.
        </p>
      </Section>

      <div className="flex items-center gap-4 border-t border-rule pt-6">
        <button
          type="submit"
          disabled={pending}
          className="bg-ink px-8 py-4 text-bg disabled:opacity-50"
        >
          <span className="eyebrow">{pending ? "Saving…" : "Save"}</span>
        </button>
        <Link href="/admin" className="eyebrow text-ink-muted underline">
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
    <fieldset className="space-y-6 border-t border-rule pt-6">
      <legend className="sr-only">{title}</legend>
      <div>
        <h2 className="text-h4">{title}</h2>
        {note ? <p className="text-caption mt-1 text-ink-muted">{note}</p> : null}
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
      <label htmlFor={name} className="eyebrow block text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`w-full border-b bg-transparent py-2 text-ink outline-none focus:border-ink ${
          error ? "border-error" : "border-rule-input"
        }`}
        {...rest}
      />
      {hint ? (
        <p id={`${name}-hint`} className="text-caption mt-1 text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="text-caption mt-1 text-error">
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
      <label htmlFor={name} className="eyebrow block text-ink-muted">
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
        className={`w-full border bg-transparent p-3 text-ink outline-none focus:border-ink ${
          error ? "border-error" : "border-rule-input"
        }`}
      />
      {error ? (
        <p id={`${name}-error`} className="text-caption mt-1 text-error">
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
      <label htmlFor={name} className="eyebrow block text-ink-muted">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue ?? ""}
        aria-invalid={error ? true : undefined}
        className={`w-full border-b bg-transparent py-2 text-ink outline-none focus:border-ink ${
          error ? "border-error" : "border-rule-input"
        }`}
      >
        <option value="">{allowEmpty ? "None" : "Choose…"}</option>
        {options.map((option) => (
          <option key={option.slug} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      {hint ? <p className="text-caption mt-1 text-ink-muted">{hint}</p> : null}
      {error ? <p className="text-caption mt-1 text-error">{error}</p> : null}
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
      <legend className="eyebrow text-ink-muted">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label
            key={option.slug}
            className="flex items-center gap-2 text-caption text-ink-body"
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
      {error ? <p className="text-caption mt-1 text-error">{error}</p> : null}
    </fieldset>
  );
}
