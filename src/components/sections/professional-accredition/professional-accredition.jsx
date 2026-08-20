 
import Image from "next/image";

export default function ProfessionalAccredition({data}) {
  return (
    <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -m-[13px]">
          {data?.cards.map((item, id) => (
            <div className="w-1/3 p-[13px]" key={id}>
              <div className="w-full h-full p-[35px] border border-[#EFD8CA] rounded-[5px] xl:rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px]">
                 <div className="w-[140px] h-[105px] flex items-center justify-center mb-[75px]">
                    <Image src={item.logo} width={140} height={105} alt="logo" className="w-full h-full object-contain" />
                 </div>

                  <div className="text-[28px] text-[#212121] font-bold mb-[10px]">
                    {item.title}
                  </div>
                  <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
