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
            <div className="absolute bottom-0 top-0 left-0 m-auto -z-10 max-w-[850px] w-full">
                <Image src={data?.media?.url} width={840} height={850} className="w-full h-full object-cover" alt={data?.media?.alternativeText}/>
            </div>
            <div className="container">
                <div className="max-w-[65%] ml-auto">
                    <h2 className=" text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] text-center mb-[10px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black  ">
                        {data.sectionHeading}
                    </h2>
                    <div className="flex flex-col gap-[10px]">
                        {data?.layers.map((item, id) => (
                            <div key={id} className="w-full border border-black/10 rounded-[8px] overflow-hidden p-[18px] flex items-center bg-gradient-to-r from-[rgb(230,81,0,0.1)] via-[rgb(255,109,0,0.1)] to-[rgb(255,143,0,0.1)]">
                                <div className="w-1/2 ">
                                    <div className="flex items-center gap-[15px]">
                                        <div className="w-[106px] h-[96px] bg-black/45 rounded-[10px] p-[10px_20px]">
                                            <div className="text-[50px] text-white font-bold text-center mb-0 leading-[50px]">
                                                {item?.layerNumber}
                                            </div>
                                            <div className="text_1 mb-0 text-center text-white font-semibold tracking-wider">
                                                {item?.layerLabel}
                                            </div>
                                        </div>
                                        <div className="w-[calc(100%-106px)]">
                                            <div className="text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] text-black font-semibold mb-[10px]">
                                                {item?.title}
                                            </div>
                                            <div className="text_1 lg:max-w-[80%]">
                                                {item?.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
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