import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// International flexible section: a title with a description below it.
export default function IntlTextSection({ data }) {
    return (
        <section className="py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[80px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
            </div>
        </section>
    );
}
