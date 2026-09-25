import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";

export default function Examination() {
  return (
    <section className="w-full h-auto py-[90px_110px] block">
      <div class="container">
        <div className="[--width:330px] w-full h-auto flex flex-wrap">
          <div className="w-(--width)">
            <AiAcademicMenubar />
          </div>
          <div className="w-[calc(100%-(--width))] pl-7.5">
            <div className="w-full h-auto p-[50px_20px_90px_50px] border border-black/10 rounded-[20px] overflow-hidden">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
