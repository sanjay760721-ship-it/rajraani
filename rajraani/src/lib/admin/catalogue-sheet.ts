/**
 * The catalogue as a spreadsheet: the columns, and reading a CSV back.
 *
 * Client-safe (no database), so the Products screen can describe the columns
 * and the server can parse the upload with the same rules.
 *
 * Only safe, everyday fields come back in from a spreadsheet — name,
 * description, price, stock and whether a piece is on the shop — matched by
 * product code. Weaves, fabrics and colours stay in the piece's own form,
 * where they can only be chosen from the fixed list.
 */

export const SHEET_COLUMNS = [
  "Product code",
  "Name",
  "Description",
  "Price (₹)",
  "In stock",
  "On the shop",
  "Weave",
  "Fabric",
  "Colour",
  "Photos",
  "Web address",
] as const;

/** The columns an upload may change. Everything else is for reading only. */
export const EDITABLE_COLUMNS = ["Name", "Description", "Price (₹)", "In stock", "On the shop"] as const;

/** One CSV field, quoted when it needs to be. */
export function csvField(value: string | number): string {
  const text = String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/** Parse CSV text into rows of cells (RFC 4180: quotes, doubled quotes, newlines in quotes). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  const input = text.replace(/^﻿/, "");
  for (let i = 0; i < input.length; i++) {
    const char = input[i]!;
    if (quoted) {
      if (char === '"' && input[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && input[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += char;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((cells) => cells.some((cell) => cell.trim()));
}

export type SheetChange = {
  code: string;
  name: string;
  changes: { column: string; from: string; to: string }[];
};

export type SheetPreview = {
  changes: SheetChange[];
  problems: string[];
  unchanged: number;
};
