import InnerHero from "@/components/layout/common/InnerHero";
import ChancellorMessage from "@/components/sections/chancellor/chancellor-message";
import { getLeadershipMemberBySlug } from "@/lib/api/index";

export const revalidate = 60;

export default async function Page({ params }) {
  const { slug } = await params;
  const member = await getLeadershipMemberBySlug(slug);

  if (!member) return null;

  return (
    <>
      {member.hero && <InnerHero data={member.hero} />}
      <ChancellorMessage
        data={{
          name: member.name,
          designation: member.designation,
          email: member.email,
          phone: member.phone,
          linkText: member.linkText,
          linkUrl: member.linkUrl,
          closingNote: member.message,
          image: member.image,
          description: member.bio,
        }}
      />
    </>
  );
}
