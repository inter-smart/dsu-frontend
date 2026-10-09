import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";

// Shared sidebar column for all Examination sections
export default function ExaminationSidebar({
  data,
  subItems,
  activeSubId,
  onSubItemClick,
}) {
  return (
    <div className="w-(--width)">
      <LibrarySidebar
        data={data}
        subItems={subItems}
        activeSubId={activeSubId}
        onSubItemClick={onSubItemClick}
      />
      <AiAcademicMenubar
        className="[&>div]:px-0 block lg:hidden"
        data={data}
      />
    </div>
  );
}
