"use client";
import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ChancellorMessage({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[65px] 2xl:py-[90px] 3xl:py-[120px] bg-white">
            <div className="container">
                <div className="flex flex-wrap lg:max-w-[75%] xl:max-w-[80%] m-auto max-md:gap-[15px]">
                    <div className="w-full md:w-[200px] lg:w-[225px] xl:w-[280px] 2xl:w-[335px] 3xl:w-[420px]  ">
                        <div className="w-full lg:aspect-[420/420] mb-[15px] rounded-[10px] overflow-hidden">
                            <Image src={data?.image.url} width={420} height={414} className="w-full h-full object-cover" alt={data.name} />
                        </div>
                        <div className="w-full bg-[#FFEACB] rounded-[8px] 2xl:rounded-[10px] p-[12px_15px] lg:p-[15px_20px] xl:p-[18px_30px] overflow-hidden">
                            <ul className="w-full">
                                <li className="py-[13px] border-b border-black/20 last-of-type:border-0">
                                    <Link href={`mailto:${data?.email}`} className="flex gap-[10px] group">
                                        <div className="w-[18px] xl:w-[20px] 3xl:w-[22px] h-[18px] 2xl:w-[20px] 3xl:h-[22px] flex">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_6104_14910)">
                                                    <path d="M22 9.16667V17.4167C22 19.9467 19.9467 22 17.4167 22H4.58333C2.05333 22 0 19.9467 0 17.4167V7.33333C0 4.80333 2.05333 2.75 4.58333 2.75H11.9167C12.4208 2.75 12.8333 3.1625 12.8333 3.66667C12.8333 4.17083 12.4208 4.58333 11.9167 4.58333H4.58333C3.52917 4.58333 2.62167 5.17917 2.15417 6.04083L9.05667 12.9433C10.1292 14.0158 11.8708 14.0158 12.9433 12.9433L16.445 9.44167C16.8025 9.08417 17.38 9.08417 17.7375 9.44167C18.095 9.79917 18.095 10.3767 17.7375 10.7342L14.2358 14.2358C13.3467 15.125 12.1642 15.5742 10.9908 15.5742C9.8175 15.5742 8.64417 15.125 7.74583 14.2358L1.83333 8.31417V17.4167C1.83333 18.9292 3.07083 20.1667 4.58333 20.1667H17.4167C18.9292 20.1667 20.1667 18.9292 20.1667 17.4167V9.16667C20.1667 8.6625 20.5792 8.25 21.0833 8.25C21.5875 8.25 22 8.6625 22 9.16667ZM14.6667 3.66667C14.6667 1.64083 16.3075 0 18.3333 0C20.3592 0 22 1.64083 22 3.66667C22 5.6925 20.3592 7.33333 18.3333 7.33333C16.3075 7.33333 14.6667 5.6925 14.6667 3.66667ZM16.5 3.66667C16.5 4.675 17.325 5.5 18.3333 5.5C19.3417 5.5 20.1667 4.675 20.1667 3.66667C20.1667 2.65833 19.3417 1.83333 18.3333 1.83333C17.325 1.83333 16.5 2.65833 16.5 3.66667Z" fill="url(#paint0_linear_6104_14910)" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_6104_14910" x1="0" y1="11" x2="22" y2="11" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_6104_14910">
                                                        <rect width="22" height="22" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="text_1 font-semibold text-[#212121] w-[calc(100%-18px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-22px)] transition-all group-hover:text-[#DC2626]">
                                            {data?.email}
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[13px] border-b border-black/20 last-of-type:border-0">
                                    <Link href={`tel:${data?.phone}`} className="flex gap-[10px] group">
                                        <div className="w-[18px] xl:w-[20px] 3xl:w-[22px] h-[18px] 2xl:w-[20px] 3xl:h-[22px] flex">
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9994 16.7225V19.8839C22.0005 20.1774 21.9403 20.4679 21.8225 20.7368C21.7047 21.0057 21.5319 21.247 21.3152 21.4454C21.0985 21.6438 20.8427 21.7949 20.5642 21.8889C20.2856 21.9829 19.9904 22.0179 19.6975 21.9914C16.4484 21.6391 13.3275 20.5311 10.5853 18.7563C8.03418 17.1384 5.87123 14.9798 4.2501 12.4336C2.46565 9.68454 1.35515 6.55458 1.00857 3.29735C0.982184 3.00594 1.01689 2.71225 1.11046 2.43496C1.20404 2.15767 1.35444 1.90287 1.5521 1.68677C1.74975 1.47067 1.99033 1.29802 2.2585 1.1798C2.52668 1.06157 2.81659 1.00038 3.10976 1.0001H6.27738C6.78981 0.995069 7.28658 1.17617 7.67511 1.50964C8.06364 1.84311 8.31741 2.30621 8.38913 2.81261C8.52283 3.82431 8.77078 4.81767 9.12824 5.77374C9.2703 6.15091 9.30105 6.56082 9.21684 6.9549C9.13263 7.34898 8.93699 7.71071 8.6531 7.99722L7.31214 9.33552C8.81524 11.9737 11.004 14.1581 13.6474 15.6582L14.9883 14.3199C15.2754 14.0366 15.6379 13.8413 16.0327 13.7573C16.4276 13.6732 16.8383 13.7039 17.2162 13.8457C18.1742 14.2025 19.1695 14.4499 20.1832 14.5834C20.6962 14.6556 21.1646 14.9134 21.4994 15.3078C21.8343 15.7022 22.0122 16.2057 21.9994 16.7225Z" stroke="url(#paint0_linear_6104_14914)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_6104_14914" x1="1" y1="11.5" x2="22" y2="11.5" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                        <div className="text_1 font-semibold text-[#212121] w-[calc(100%-18px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-22px)] transition-all group-hover:text-[#DC2626]">
                                            {data?.phone}
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[13px] border-b border-black/20 last-of-type:border-0">
                                    <Link href={data?.linkUrl || "#"} className="flex gap-[10px] group">
                                        <div className="w-[18px] xl:w-[20px] 3xl:w-[22px] h-[18px] 2xl:w-[20px] 3xl:h-[22px] flex">
                                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.80575 12.5627C7.56342 12.5627 6.34899 12.1943 5.31603 11.5041C4.28307 10.8139 3.47797 9.83286 3.00255 8.6851C2.52714 7.53733 2.40274 6.27437 2.64511 5.05591C2.88748 3.83745 3.48572 2.71822 4.36418 1.83976C5.24264 0.961302 6.36186 0.363064 7.58032 0.120697C8.79878 -0.12167 10.0617 0.00272157 11.2095 0.478141C12.3573 0.95356 13.3383 1.75865 14.0285 2.79161C14.7187 3.82457 15.0871 5.03901 15.0871 6.28134C15.0852 7.94668 14.4229 9.54329 13.2453 10.7209C12.0677 11.8984 10.4711 12.5608 8.80575 12.5627ZM8.80575 1.75C7.90954 1.75 7.03345 2.01576 6.28828 2.51367C5.5431 3.01158 4.96231 3.71928 4.61934 4.54727C4.27638 5.37526 4.18664 6.28636 4.36149 7.16536C4.53633 8.04435 4.9679 8.85175 5.60161 9.48547C6.23533 10.1192 7.04274 10.5508 7.92173 10.7256C8.80072 10.9004 9.71182 10.8107 10.5398 10.4677C11.3678 10.1248 12.0755 9.54398 12.5734 8.79881C13.0713 8.05364 13.3371 7.17755 13.3371 6.28134C13.3355 5.08003 12.8576 3.92836 12.0082 3.0789C11.1587 2.22945 10.0071 1.75155 8.80575 1.75Z" fill="url(#paint0_linear_6104_14918)" />
                                                <path d="M13.5033 23.3771H4.11747C3.50875 23.3767 2.90769 23.2413 2.35751 22.9809C1.80733 22.7204 1.32168 22.3413 0.935488 21.8708C0.549294 21.4002 0.272144 20.85 0.12396 20.2596C-0.0242232 19.6692 -0.0397591 19.0533 0.0784695 18.4561L0.248803 17.608C0.635754 15.6953 1.67155 13.975 3.18096 12.7381C4.69036 11.5013 6.5807 10.8238 8.53214 10.8203H9.0968C11.0482 10.824 12.9384 11.5016 14.4478 12.7384C15.9571 13.9752 16.993 15.6954 17.3801 17.608L17.5493 18.4561C17.6687 19.0537 17.6541 19.6703 17.5064 20.2616C17.3588 20.8528 17.0818 21.4039 16.6955 21.8752C16.3091 22.3464 15.8231 22.7261 15.2723 22.9869C14.7215 23.2476 14.1197 23.3829 13.5103 23.383L13.5033 23.3771ZM8.52864 12.5645C6.98206 12.5675 5.484 13.1046 4.28794 14.0851C3.09188 15.0656 2.27127 16.4292 1.96497 17.9451L1.79464 18.7933C1.72617 19.137 1.73475 19.4915 1.81974 19.8315C1.90473 20.1714 2.06403 20.4883 2.28617 20.7593C2.50831 21.0303 2.78776 21.2487 3.10442 21.3988C3.42107 21.5488 3.76706 21.6268 4.11747 21.6271H13.5033C13.8537 21.6268 14.1997 21.5488 14.5164 21.3988C14.833 21.2487 15.1125 21.0303 15.3346 20.7593C15.5567 20.4883 15.716 20.1714 15.801 19.8315C15.886 19.4915 15.8946 19.137 15.8261 18.7933L15.657 17.9451C15.3505 16.4293 14.5298 15.0658 13.3338 14.0854C12.1378 13.1049 10.6398 12.5677 9.0933 12.5645H8.52864Z" fill="url(#paint1_linear_6104_14918)" />
                                                <path d="M24.2061 3.23047H17.2061C16.974 3.23047 16.7514 3.13828 16.5873 2.97419C16.4232 2.81009 16.3311 2.58753 16.3311 2.35547C16.3311 2.1234 16.4232 1.90084 16.5873 1.73675C16.7514 1.57266 16.974 1.48047 17.2061 1.48047H24.2061C24.4381 1.48047 24.6607 1.57266 24.8248 1.73675C24.9889 1.90084 25.0811 2.1234 25.0811 2.35547C25.0811 2.58753 24.9889 2.81009 24.8248 2.97419C24.6607 3.13828 24.4381 3.23047 24.2061 3.23047Z" fill="url(#paint2_linear_6104_14918)" />
                                                <path d="M24.2061 7.89453H17.2061C16.974 7.89453 16.7514 7.80234 16.5873 7.63825C16.4232 7.47415 16.3311 7.2516 16.3311 7.01953C16.3311 6.78747 16.4232 6.56491 16.5873 6.40081C16.7514 6.23672 16.974 6.14453 17.2061 6.14453H24.2061C24.4381 6.14453 24.6607 6.23672 24.8248 6.40081C24.9889 6.56491 25.0811 6.78747 25.0811 7.01953C25.0811 7.2516 24.9889 7.47415 24.8248 7.63825C24.6607 7.80234 24.4381 7.89453 24.2061 7.89453Z" fill="url(#paint3_linear_6104_14918)" />
                                                <path d="M24.2061 12.5625H17.2061C16.974 12.5625 16.7514 12.4703 16.5873 12.3062C16.4232 12.1421 16.3311 11.9196 16.3311 11.6875C16.3311 11.4554 16.4232 11.2329 16.5873 11.0688C16.7514 10.9047 16.974 10.8125 17.2061 10.8125H24.2061C24.4381 10.8125 24.6607 10.9047 24.8248 11.0688C24.9889 11.2329 25.0811 11.4554 25.0811 11.6875C25.0811 11.9196 24.9889 12.1421 24.8248 12.3062C24.6607 12.4703 24.4381 12.5625 24.2061 12.5625Z" fill="url(#paint4_linear_6104_14918)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_6104_14918" x1="2.52441" y1="6.28133" x2="15.0871" y2="6.28133" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_6104_14918" x1="0" y1="17.1016" x2="17.6292" y2="17.1016" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_6104_14918" x1="16.3311" y1="2.35547" x2="25.0811" y2="2.35547" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_6104_14918" x1="16.3311" y1="7.01953" x2="25.0811" y2="7.01953" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint4_linear_6104_14918" x1="16.3311" y1="11.6875" x2="25.0811" y2="11.6875" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </div>
                                        <div className="text_1 font-semibold text-[#212121] w-[calc(100%-18px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-22px)] transition-all group-hover:text-[#DC2626]">
                                            {data?.linkText}
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-[calc(100%-200px)] lg:w-[calc(100%-225px)] xl:w-[calc(100%-280px)] 2xl:w-[calc(100%-335px)] 3xl:w-[calc(100%-420px)]
                    md:pl-[40px] lg:pl-[60px] xl:pl-[80px] 2xl:pl-[100px] 3xl:pl-[120px]">
                        <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-black font-bold mb-[6px]">
                            {data.name}
                        </div>
                        <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#DC2626] font-semibold relative pb-[8px] mb-[10px] sm:mb-[20px] lg:mb-[30px] after:absolute after:bottom-0 after:content-[''] after:left-0 after:h-[3px]
                                     after:w-[30px] after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] ">
                            {data.designation}
                        </div>
                        <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                        w-full max-w-[550px] xl:max-w-[590px] 2xl:max-w-[790px] 3xl:max-w-[820px]">
                            <BlocksRenderer content={data.description} />
                        </div>
                        {data.closingNote && (
                            <div className="text-[15px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[28px] text-[#212121] font-semibold uppercase">
                                {data.closingNote}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
