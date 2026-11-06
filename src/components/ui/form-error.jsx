export default function FormError({ message }) {
    if (!message) return null;
    return (
        <p role="alert" className="mt-1 text-[12px] leading-snug text-red-600 lg:text-[14px] xl:text-[14px] 2xl:text-[12px]">
            {message}
        </p>
    );
}
