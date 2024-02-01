import WorkCard from "../chip/WorkCard";

export default function SectionWorks({ info }) {
    const { works } = info;
    return (
        <div id="works" className="container m-auto mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Trabajos</h3>
                <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
            </div>
            <div data-aos="fade-up" className="left flex-1 w-full">
                <p className="text-gray-700 font-medium w-[100%] text-[var(--c1-txt2)]">
                    Éstos son algunos de mis trabajos.
                </p>
            </div>
            {/* card */}
            <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
                <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
                    <WorkCard works={works} />
                </div>
            </div>
        </div>
    );
}
