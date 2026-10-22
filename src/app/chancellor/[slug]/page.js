import { redirect } from "next/navigation";

// Old leadership URLs (/chancellor/<slug>) now live under /leadership/<slug>
export default async function Page({ params }) {
  const { slug } = await params;
  redirect(`/leadership/${slug}`);
}
