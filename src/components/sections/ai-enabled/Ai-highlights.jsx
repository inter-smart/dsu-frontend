import React from 'react'

export default function AiHighlights({ data }) {
    return (
        <section className='relative py-[40px_10px] xl:py-[50px_10px] 2xl:py-[60px_10px] 3xl:py-[80px_20px] bg-white dark:bg-[#0f1011] transition-colors duration-300'>
            <div className="container">
                <div className="w-full sm:max-w-[90%]">
                    <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-black dark:text-white font-bold mb-[8px]">
                        {data?.heading}
                    </div> 
                    {data?.items && (
                        <ul className='columns-1 md:columns-2 gap-x-[40px] xl:gap-x-[48px]'>
                            {data.items.map((item, id) => (
                                <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    )
}
