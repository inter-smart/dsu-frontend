import { DoctoralSection, FileList, H3 } from "./ui";

// Groups of downloadable files side by side. With two groups, the longer one gets the wider column;
// a group of more than 4 files lists them in two columns.
export default function CourseworkSection({ data }) {
  if (!data?.groups?.length) return null;
  const { groups } = data;

  let columns = "";
  if (groups.length === 2) {
    columns = groups[0].files.length > groups[1].files.length ? "lg:grid-cols-[1.6fr_1fr]" : "lg:grid-cols-[1fr_1.6fr]";
  } else if (groups.length > 2) {
    columns = "lg:grid-cols-2";
  }

  return (
    <DoctoralSection data={data}>
      <div className={`grid gap-[25px] xl:gap-[35px] ${columns}`}>
        {groups.map((group, i) => (
          <div key={group.id ?? i} data-reveal>
            {group.title && <h3 className={`${H3} mb-[12px]`}>{group.title}</h3>}
            <FileList files={group.files} className={group.files.length > 4 ? "xl:grid-cols-2" : ""} />
          </div>
        ))}
      </div>
    </DoctoralSection>
  );
}
