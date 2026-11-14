// Shared pieces of the Doctoral Research sections (CMS version of the static Ph.D. Admission page,
// src/data/research/phd-admission.js): same classes, so both look the same.

export const CARD =
  "rounded-[12px] xl:rounded-[15px] border border-[#F3DFD2] dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]";
export const PAD = "p-[20px] xl:p-[30px]";
export const H3 = "text-[18px] xl:text-[22px] 3xl:text-[28px] font-bold leading-[1.2] text-[#212121] dark:text-white";
export const H3_BIG = "text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] font-bold leading-[1.2] text-black dark:text-white";
export const TEXT = "text-[15px] lg:text-[16px] 3xl:text-[18px] leading-normal tracking-[0.02rem] text-[#4A5565] dark:text-white";
export const LABEL = "text-[12px] 3xl:text-[14px] uppercase tracking-wide text-[#4A5565] dark:text-[#9CA3AF]";
export const GRAD = "bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent font-bold";
export const FACT = "rounded-[8px] bg-[#FFF8EE] dark:bg-white/5 px-[12px] py-[10px]";
export const TEXT_LINK = "font-medium !text-[#DC2626] underline underline-offset-2";
export const BTN =
  "mt-[12px] inline-flex h-[40px] items-center rounded-[10px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-medium !text-white no-underline transition-opacity duration-300 hover:opacity-90";

const H2 = "text-[28px] sm:text-[22px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121] dark:text-white";
const BADGE =
  "flex h-[34px] w-[34px] xl:h-[40px] xl:w-[40px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-[14px] xl:text-[16px] font-bold text-white";
const BULLET =
  "relative pl-[20px] text_1 before:absolute before:left-0 before:top-[0.55em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-gradient-to-r before:from-[#DC2626] before:to-[#F97316]";
const FILE_LINK =
  "group flex h-full items-center justify-between gap-[12px] rounded-[10px] border border-[#F3DFD2] dark:border-white/10 bg-white dark:bg-[#1a1a1a] px-[16px] py-[12px] text_1 font-medium !text-[#212121] dark:!text-white no-underline transition-colors duration-300 hover:border-[#F97316] hover:!text-[#DC2626]";

// A full-width band: anchor (menubar links), heading + description, white or tinted background
export function DoctoralSection({ data, children, headingClassName = H2 }) {
  const { anchorId, background, heading, description } = data;
  return (
    <section
      id={anchorId || undefined}
      className={`relative scroll-mt-[150px] py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] transition-colors duration-300 ${
        background === "tint" ? "bg-[#F8FAFC] dark:bg-[#0B0B0B]" : "bg-white dark:bg-[#101010]"
      }`}
    >
      <div className="container">
        {(heading || description) && (
          <div data-reveal className="mb-[25px] xl:mb-[35px] max-w-[900px]">
            {heading && <h2 className={headingClassName}>{heading}</h2>}
            {description && <p className={`${TEXT} mt-[10px]`}>{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items, className = "" }) {
  if (!items?.length) return null;
  return (
    <ul className={`flex flex-col gap-[10px] ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={BULLET}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export const Badge = ({ n }) => <span className={BADGE}>{n}</span>;

// [{ label, value }] as a two-column grid of small tiles
export function Facts({ items, className = "mt-[16px]" }) {
  if (!items?.length) return null;
  return (
    <dl className={`grid grid-cols-2 gap-[10px] ${className}`}>
      {items.map((f, i) => (
        <div key={i} className={FACT}>
          {f.label && <dt className={LABEL}>{f.label}</dt>}
          <dd className="text-[18px] xl:text-[20px] font-bold text-[#212121] dark:text-white">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const ArrowDown = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F97316"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 transition-transform duration-300 group-hover:translate-y-[2px]"
    aria-hidden="true"
  >
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);

// [{ label, url, isExternal }] as a grid of download links
export function FileList({ files, className = "" }) {
  if (!files?.length) return null;
  return (
    <ul className={`grid gap-[10px] ${className}`}>
      {files.map((file, i) => (
        <li key={i}>
          <a
            href={file.url}
            {...(file.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={FILE_LINK}
          >
            <span>{file.label}</span>
            <ArrowDown />
            {file.isExternal && <span className="sr-only">(opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

// { label, url, isExternal } as a plain <a>
export function LinkTo({ link, className, children }) {
  return (
    <a
      href={link.url}
      {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {children ?? link.label}
    </a>
  );
}
