import { currentAdmin } from "@/lib/auth/session";
import {
  ACCEPTED_TYPES,
  MAX_UPLOAD_BYTES,
  UploadError,
  saveUpload,
} from "@/lib/media/library";

/**
 * Photo upload.
 *
 * A route handler rather than a server action because server actions cap the
 * request body at 1MB, and a photograph straight off a camera is 5–25MB.
 * Raising that cap would raise it for every action on the site.
 *
 * Checks the session itself: this sits outside the protected layout, and an
 * endpoint is reachable without ever rendering a page.
 */
export async function POST(request: Request) {
  if (!(await currentAdmin())) {
    return Response.json({ error: "Sign in again to upload." }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "The upload did not arrive whole. Try again." }, { status: 400 });
  }

  const files = form.getAll("file").filter((value): value is File => value instanceof File);
  if (files.length === 0) {
    return Response.json({ error: "No photo was attached." }, { status: 400 });
  }

  const saved = [];
  for (const file of files) {
    if (file.type && !ACCEPTED_TYPES.includes(file.type)) {
      return Response.json(
        { error: `"${file.name}" is not a photo this site can use. Use JPEG, PNG, WebP or AVIF.` },
        { status: 415 },
      );
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return Response.json(
        { error: `"${file.name}" is over 30 MB. Export a smaller copy and try again.` },
        { status: 413 },
      );
    }
    try {
      saved.push(await saveUpload(Buffer.from(await file.arrayBuffer()), file.name));
    } catch (error) {
      if (error instanceof UploadError) {
        return Response.json({ error: `"${file.name}": ${error.message}`, saved }, { status: 422 });
      }
      console.error("[media] upload failed", error);
      return Response.json({ error: "The upload failed on the server.", saved }, { status: 500 });
    }
  }

  return Response.json({ saved });
}
