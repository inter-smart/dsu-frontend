export default function FormError({ message }) {
    if (!message) return null;
    return (
        <p role="alert" className="mt-1 text-[12px] leading-snug text-red-600">
            {message}
        </p>
    );
}
