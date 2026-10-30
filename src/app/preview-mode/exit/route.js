import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Leaves Draft Mode (the "Exit preview" button of the preview banner)
export async function POST() {
  const draft = await draftMode();
  draft.disable();
  redirect("/");
}
