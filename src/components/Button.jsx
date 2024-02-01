export default function Button({ style = 1, name = "", className = "", ...props }) {
    if (style == 1) {
        return (
            <a
                className={
                    "bg-[var(--c3-bg)] text-[1rem] text-[var(--c3-txt)] px-5 py-2 sm:px-8 rounded-lg font-bold  hover:scale-105 " +
                    className
                }
                {...props}
            >
                <span className="flex justify-center items-center gap-1">{name}</span>
            </a>
        );
    }
    if (style == 2) {
        return (
            <a
                className={
                    "flex items-center gap-2 border- text-[1rem] bg-[var(--c1-bg)] text-[var(--c1-txt)] px-4 py-2 sm:px-6 rounded-lg font-bold  hover:scale-105 " +
                    className
                }
                {...props}
            >
                <span className="flex justify-center items-center gap-1">{name}</span>
            </a>
        );
    }
}
