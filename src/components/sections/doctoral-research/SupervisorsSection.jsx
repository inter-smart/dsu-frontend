import { CARD, DoctoralSection, FileList, H3, PAD } from "./ui";

// Supervisor Directory: one card per school, each listing its supervisor files (open in a new tab)
export default function SupervisorsSection({ data }) {
  if (!data?.groups?.length) return null;

  return (
    <DoctoralSection data={data}>
      <div data-reveal-stagger className="grid gap-[15px] xl:gap-[25px] md:grid-cols-2">
        {data.groups.map((group, i) => (
          <section key={group.id ?? i} className={`${CARD} ${PAD}`}>
            {group.title && <h3 className={`${H3} mb-[14px]`}>{group.title}</h3>}
            <FileList files={group.files} />
          </section>
        ))}
      </div>
    </DoctoralSection>
  );
}
