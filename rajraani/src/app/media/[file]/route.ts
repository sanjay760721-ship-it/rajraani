import { readMediaFile } from "@/lib/media/library";

/**
 * Serves photographs uploaded through the admin.
 *
 * Only names the media table knows are served (see `readMediaFile`), so this
 * cannot be walked to read anything else under `data/`. A file's name carries
 * its id and never changes content, so it can be cached forever: replacing a
 * photo means uploading a new file, which gets a new name.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;
  const body = readMediaFile(file);
  if (!body) return new Response("Not found", { status: 404 });

  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": String(body.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
