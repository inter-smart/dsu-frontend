import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";

// Shared sidebar column for all Examination sections
export default function ExaminationSidebar({ data }) {
  return (
    <div className="w-(--width)">
      <LibrarySidebar data={data} />
      <AiAcademicMenubar
        className="[&>div]:px-0 block lg:hidden"
        data={data}
      />
    </div>
  );
}
