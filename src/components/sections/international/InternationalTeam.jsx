import Image from "next/image";
import Link from "next/link";
import { Grip } from "lucide-react";
import SectionHeader from "./ServiceShared";

export default function InternationalTeam({ data }) {
    const { number, eyebrow, title, description, card } = data;

    return (
        <section id="international-team" className="w-full bg-white py-10 lg:py-12 2xl:py-[64px]">
            <div className="container">
                <SectionHeader number={number} eyebrow={eyebrow} title={title} description={description} />

                <div className="mt-6 flex flex-col gap-6 rounded-[10px] border border-[#F2E4D2] bg-linear-to-b from-[#FFF8EE] to-[#FEF0DD] p-5 lg:flex-row lg:items-center lg:justify-between lg:p-7 2xl:mt-[28px] 2xl:px-[24px] 2xl:py-[38px]">
                    <div>
                        <h3 className="text-[18px] font-medium leading-tight tracking-[-0.02em] text-[#111] lg:text-[22px] 2xl:text-[26px]">
                            {card.title}
                        </h3>
                        <p className="mt-2 text-[14px] text-[#444] lg:text-[16px] 2xl:mt-[18px] 2xl:text-[18px]">{card.text}</p>

                        <ul className="mt-5 flex flex-wrap gap-x-12 gap-y-4 2xl:mt-[26px]">
                            {card.contacts.map((contact) => (
                                <li key={contact.id} className="flex items-center gap-3 2xl:gap-[12px]">
                                    <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-[4px] border border-black/10 bg-transparent 2xl:h-[58px] 2xl:w-[65px]">
                                        <Image
                                            src={contact.icon.url}
                                            alt={contact.icon.alternativeText || ""}
                                            width={32}
                                            height={32}
                                            className="size-6 object-contain 2xl:size-8"
                                        />
                                    </span>
                                    <div>
                                        <p className="text-[15px] font-medium text-[#111] 2xl:text-[18px]">{contact.label}</p>
                                        <Link
                                            href={contact.href}
                                            className="mt-1 block text-[14px] text-[#444] no-underline! transition-colors duration-300 hover:text-(--basecolor) lg:text-[16px] 2xl:text-[18px]"
                                        >
                                            {contact.value}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href={card.button.href}
                        className="inline-flex h-[44px] w-fit shrink-0 items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white no-underline! transition-opacity duration-300 hover:opacity-90 2xl:mr-[75px] 2xl:h-[50px] 2xl:text-[18px]"
                    >
                        {card.button.label}
                        <div className="size-[16px] flex items-center justify-center">
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.68152" cy="1.37879" r="1.37879" fill="white" />
                                <circle cx="7.68152" cy="6.49988" r="1.37879" fill="white" />
                                <circle cx="7.68152" cy="11.621" r="1.37879" fill="white" />
                                <circle cx="13.9852" cy="6.49988" r="1.37879" fill="white" />
                                <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                            </svg>

                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}