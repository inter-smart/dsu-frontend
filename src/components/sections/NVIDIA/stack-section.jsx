import Image from "next/image";

function renderTextNodes(nodes) {
    return nodes.map((node, i) =>
        node.medium ? (
            <strong className='font-medium text-[#4A5565]' key={i}>{node.text}</strong>
        ) : (
            <span key={i}>{node.text}</span>
        )
    );
}

export default function StackSection({ data }) {
    return (
        <section className="relative z-0 py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] ">
            <div className="absolute bottom-0 left-0 m-auto max-lg:right-0 max-lg:top-0 -z-10 max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[720px] 3xl:max-w-[850px] w-full h-auto max-lg:opacity-20">
                <Image src={data?.media?.url} width={840} height={850} className="w-full h-full object-contain" alt={data?.media?.alternativeText}/>
            </div>
            <div className="container">
                <div className="lg:w-9/12 ml-auto">
                    <h2 className=" cmn_Title mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px]">
                        {data.sectionHeading}
                    </h2>
                    <div className="flex flex-col-reverse lg:flex-col gap-[10px]">
                        {data?.layers.map((item, id) => (
                            <div key={id} className="w-full border border-black/10 rounded-[8px] overflow-hidden p-[10px] xl:p-[12px] 2xl:p-[15px] 3xl:p-[18px] flex flex-wrap max-sm:gap-[10px] items-center bg-gradient-to-r from-[rgb(230,81,0,0.1)] via-[rgb(255,109,0,0.1)] to-[rgb(255,143,0,0.1)]">
                                <div className="w-full sm:w-1/2 ">
                                    <div className="flex items-center gap-[10px] lg:gap-[15px]">
                                        <div className="w-[60px] xl:w-[72px] 2xl:w-[85px] 3xl:w-[106px] h-[58px] xl:h-[68px] 2xl:h-[78px] 3xl:h-[96px] bg-black/45 rounded-[10px] p-[5px]">
                                            <div className="text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[50px] text-white font-bold text-center mb-0 leading-[26px] xl:leading-[32px] 2xl:leading-[40px] 3xl:leading-[50px]">
                                                {item?.layerNumber}
                                            </div>
                                            <div className="text_1 mb-0 text-center text-white font-semibold tracking-wider">
                                                {item?.layerLabel}
                                            </div>
                                        </div>
                                        <div className="w-[calc(100%-60px)] xl:w-[calc(100%-72px)] 2xl:w-[calc(100%-85px)] 3xl:w-[calc(100%-106px)]">
                                            <div className="text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] leading-[13px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[25px]  text-black font-semibold mb-[5px] 2xl:mb-[8px] 3xl:mb-[10px]">
                                                {item?.title}
                                            </div>
                                            <div className="text_1 lg:max-w-[80%]">
                                                {item?.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <ul>
                                        {item?.points.map((point, pointId) => (
                                            <li key={pointId} className="text_1 pl-[20px] text-[#4A5565] mb-1 relative before:absolute before:content-['✓'] before:top-0 before:left-0 before:text-[#F97316] before:font-bold">
                                                {renderTextNodes(point)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}