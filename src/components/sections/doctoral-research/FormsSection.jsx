import { DoctoralSection, FileList } from "./ui";

// A grid of downloadable files
export default function FormsSection({ data }) {
  if (!data?.files?.length) return null;

  return (
    <DoctoralSection data={data}>
      <div data-reveal-stagger>
        <FileList files={data.files} className="md:grid-cols-2 xl:grid-cols-3" />
      </div>
    </DoctoralSection>
  );
}
