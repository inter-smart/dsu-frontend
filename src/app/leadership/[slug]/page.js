import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import ChancellorMessage from "@/components/sections/chancellor/chancellor-message";
import { getLeadershipMemberBySlug } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = await getLeadershipMemberBySlug(slug);

  return {
    title:
      member?.seo?.metaTitle ||
      (member?.name
        ? `${member.name} | Dayananda Sagar University`
        : "Leadership | Dayananda Sagar University"),
    description: member?.seo?.metaDescription || undefined,
    alternates: member?.seo?.canonicalUrl
      ? { canonical: member.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const member = await getLeadershipMemberBySlug(slug);

  if (!member) notFound();

  return (
    <>
      {member.hero && <InnerHero data={member.hero} className="leadership-detail-hero" />}
      <ChancellorMessage
        data={{
          name: member.name,
          designation: member.designation,
          email: member.email,
          phone: member.phone,
          linkText: member.linkText,
          linkUrl: member.linkUrl,
          linkFileUrl: member.linkFileUrl,
          closingNote: member.message,
          image: member.image,
          description: member.bio,
        }}
      />
    </>
  );
}
