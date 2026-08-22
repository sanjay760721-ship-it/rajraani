/**
 * A local stand-in for Sanity's `defineType` / `defineField` helpers.
 *
 * Sanity schema types are **plain objects** — `defineType` is an identity
 * function that exists only to give TypeScript something to infer from. So the
 * schemas in this folder are already valid Sanity schemas; they simply do not
 * require the `sanity` package to be installed to typecheck.
 *
 * That matters because the Studio is a separate application (usually its own
 * workspace), and pulling several hundred megabytes of Studio dependencies into
 * the storefront to model content would be the wrong trade. When the Studio
 * exists, each schema file changes one import line:
 *
 *     -import { defineType, defineField } from "../../lib/define.ts";
 *     +import { defineType, defineField } from "sanity";
 *
 * The types below cover the subset of the schema language these schemas use.
 * They are deliberately narrower than Sanity's real types: a field this project
 * does not use is a field that cannot be typo'd into a schema.
 */

/** The chainable validation builder, as far as we use it. */
export type ValidationRule = {
  required: () => ValidationRule;
  min: (n: number) => ValidationRule;
  max: (n: number) => ValidationRule;
  length: (n: number) => ValidationRule;
  regex: (
    pattern: RegExp,
    options?: { name?: string; invert?: boolean },
  ) => ValidationRule;
  uri: (options?: { allowRelative?: boolean; scheme?: string[] }) => ValidationRule;
  custom: (fn: (value: never) => true | string) => ValidationRule;
  error: (message?: string) => ValidationRule;
  warning: (message?: string) => ValidationRule;
};

export type ArrayMember = {
  type: string;
  name?: string;
  title?: string;
  fields?: FieldDefinition[];
  to?: { type: string }[];
  options?: Record<string, unknown>;
  preview?: PreviewConfig;
  validation?: (rule: ValidationRule) => ValidationRule;
};

export type PreviewConfig = {
  select: Record<string, string>;
  prepare?: (selection: Record<string, unknown>) => {
    title?: string;
    subtitle?: string;
    media?: unknown;
  };
};

export type FieldDefinition = {
  name: string;
  type: string;
  title?: string;
  description?: string;
  fields?: FieldDefinition[];
  of?: ArrayMember[];
  to?: { type: string }[];
  options?: Record<string, unknown>;
  initialValue?: unknown;
  hidden?: boolean;
  readOnly?: boolean;
  rows?: number;
  validation?: (rule: ValidationRule) => ValidationRule;
};

export type TypeDefinition = {
  name: string;
  type: "document" | "object";
  title?: string;
  description?: string;
  fields: FieldDefinition[];
  options?: Record<string, unknown>;
  preview?: PreviewConfig;
  initialValue?: Record<string, unknown>;
  /**
   * Documents there should only ever be one of — homepage, navigation, global
   * settings. Sanity has no built-in singleton, so this flag is read by the
   * Studio's structure configuration to pin a single editable document and hide
   * the "create new" action.
   */
  __singleton?: boolean;
};

export function defineType(definition: TypeDefinition): TypeDefinition {
  return definition;
}

export function defineField(field: FieldDefinition): FieldDefinition {
  return field;
}

export function defineArrayMember(member: ArrayMember): ArrayMember {
  return member;
}

/**
 * Slug pattern, enforced at the CMS layer.
 *
 * pre-build-gaps.md §4 found handle casing inconsistent on the reference site —
 * `campaignpage_songs_of_the_season_` sitting among otherwise kebab-case slugs.
 * A slug becomes a URL, so it is free to constrain now and a redirect map later.
 */
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const slugValidation = (rule: ValidationRule) =>
  rule
    .required()
    .regex(SLUG_PATTERN, { name: "kebab-case" })
    .error("Lower-case words separated by single hyphens, e.g. evening-raga");
