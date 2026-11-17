import DOMPurify from "isomorphic-dompurify";

// CKEditor HTML from the CMS: tables, images, links and embedded videos are kept, scripts and forms are not.
const sanitizeHtml = (html) =>
    DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["target", "allow", "allowfullscreen", "frameborder", "loading", "referrerpolicy"],
        FORBID_TAGS: ["style", "form", "input", "button"],
    });

// Common flexible section: a title with a CKEditor description below it.
export default function TitleDescription({ data }) {
    if (!data?.title && !data?.description) return null;
    return (
        <section className="py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title">{data.title}</h2>}
                {data.description && (
                    <div
                        className="text_1 typography ck-content w-full overflow-x-auto lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.description) }}
                    />
                )}
            </div>
        </section>
    );
}
