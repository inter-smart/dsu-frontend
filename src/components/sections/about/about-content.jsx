import DOMPurify from "isomorphic-dompurify";

// Free content typed in the About page's CKEditor field (`cnt`).
export default function AboutContent({ html }) {
  const clean = DOMPurify.sanitize(html || "", {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target"],
    FORBID_TAGS: ["style", "form", "input", "button"],
  });
  if (!clean.trim()) return null;

  return (
    <section className="w-full py-10 sm:py-15 lg:py-20 dark:bg-[#000]">
      <div className="container">
        <div
          className="ck-content typography blocks-html w-full overflow-x-auto dark:text-[#E5E7EB]"
          dangerouslySetInnerHTML={{ __html: clean }}
        />
      </div>
    </section>
  );
}
