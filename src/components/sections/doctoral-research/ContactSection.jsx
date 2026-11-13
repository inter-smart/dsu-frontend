import { CARD, DoctoralSection, LABEL, TEXT_LINK } from "./ui";

// Contact cards: name, role, address, email, phone and labelled details (e.g. helplines)
export default function ContactSection({ data }) {
  if (!data?.contacts?.length) return null;

  return (
    <DoctoralSection data={data}>
      <div data-reveal-stagger className="grid gap-[15px] xl:gap-[25px] md:grid-cols-2 xl:grid-cols-3">
        {data.contacts.map((c, i) => (
          <address key={c.id ?? i} className={`${CARD} p-[20px] xl:p-[28px] not-italic text_1`}>
            <p className="!font-bold !text-[#212121] dark:!text-white">{c.name}</p>
            {c.role && <p className="font-medium !text-[#F97316]">{c.role}</p>}
            {c.address && <p className="mt-[8px] whitespace-pre-line">{c.address}</p>}
            {c.email && (
              <p className="mt-[8px]">
                <a href={`mailto:${c.email}`} className={`${TEXT_LINK} break-all`}>
                  {c.email}
                </a>
              </p>
            )}
            {c.phone && (
              <p className="mt-[4px]">
                <a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className="font-medium !text-[#212121] dark:!text-white">
                  {c.phone}
                </a>
              </p>
            )}
            {(c.details || []).map((d, j) => (
              <p key={j} className="mt-[12px]">
                {d.label && <span className={`block ${LABEL}`}>{d.label}</span>}
                {d.value}
              </p>
            ))}
          </address>
        ))}
      </div>
    </DoctoralSection>
  );
}
