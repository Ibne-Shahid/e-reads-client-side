export default function Button({ children, className, ...props }) {
    return (
        <button
            className={`transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}