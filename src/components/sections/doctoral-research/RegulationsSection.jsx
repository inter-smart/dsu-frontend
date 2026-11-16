import { BTN, CARD, DoctoralSection, FileList, H3, LABEL, TEXT } from "./ui";

// A single phone number (digits, spaces, +, -, brackets) becomes a tel: link; anything else stays text
const PHONE = /^\+?[\d\s()-]{6,}$/;

// Strapi sends `frame-ancestors 'self'` with its files, so a PDF uploaded to the CMS can't be embedded
// from the Strapi host. Load it through this site's /uploads proxy (next.config.ts rewrites) instead,
// which makes it same-origin. Other URLs are used as they are.
const viewerUrl = (url) => {
  try {
    const { pathname, search } = new URL(url);
    return pathname.startsWith("/uploads/") ? `${pathname}${search}` : url;
  } catch {
    return url;
  }
};

// An embedded PDF (e.g. the Ph.D Regulations) beside a documents list and contact rows
export default function RegulationsSection({ data }) {
  if (!data) return null;
  const { document, documentsHeading, documents = [], contactHeading, contacts = [] } = data;
  const hasAside = documents.length > 0 || contacts.length > 0;
  if (!document && !hasAside) return null;

  return (
    <DoctoralSection data={data}>
      <div className={`grid gap-[20px] xl:gap-[30px] ${document && hasAside ? "lg:grid-cols-[2fr_1fr]" : ""}`}>
        {document && (
          <div
            data-reveal
            className="overflow-hidden rounded-[12px] border border-[#F3DFD2] bg-[#F8FAFC] dark:border-white/10 dark:bg-[#1a1a1a]"
          >
            <object data={viewerUrl(document.url)} type="application/pdf" aria-label={document.label} className="block h-[520px] w-full xl:h-[750px]">
              <div className="p-[24px]">
                <p className={TEXT}>Your browser cannot display the PDF here.</p>
                <a href={document.url} target="_blank" rel="noopener noreferrer" className={BTN}>
                  Open {document.label}
                </a>
              </div>
            </object>
          </div>
        )}

        {hasAside && (
          <aside className="flex flex-col gap-[15px] xl:gap-[25px]">
            {documents.length > 0 && (
              <div data-reveal className={`${CARD} p-[20px] xl:p-[28px]`}>
                {documentsHeading && <h3 className={`${H3} mb-[12px]`}>{documentsHeading}</h3>}
                <FileList files={documents} />
              </div>
            )}
            {contacts.length > 0 && (
              <div data-reveal className={`${CARD} p-[20px] xl:p-[28px]`}>
                {contactHeading && <h3 className={`${H3} mb-[12px]`}>{contactHeading}</h3>}
                <dl className="flex flex-col gap-[12px]">
                  {contacts.map((c, i) => (
                    <div key={i}>
                      {c.label && <dt className={`block ${LABEL}`}>{c.label}</dt>}
                      <dd className="text_1 font-medium !text-[#212121] dark:!text-white">
                        {PHONE.test(c.value) ? (
                          <a href={`tel:${c.value.replace(/[^\d+]/g, "")}`} className="!text-[#212121] dark:!text-white">
                            {c.value}
                          </a>
                        ) : (
                          c.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </aside>
        )}
      </div>
    </DoctoralSection>
  );
}
