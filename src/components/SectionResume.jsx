import React from "react";

export default function SectionResume({ info }) {
    const { experience } = info;
    const { education } = info;
    return (
        <div id="resume" className=" container m-auto   mt-16">
            {/* heading */}
            <div data-aos="fade-up" className="relative mb-5">
                <h3 className=" text-3xl font-black sm:text-2xl">Trayectoria</h3>
                <span className="h-[1.1px] right-0 absolute w-[92%] bg-[var(--c1-txt)] block"></span>
            </div>
            <div data-aos="fade-up" className="left flex-1 w-full">
                <p className="text-[var(--c1-txt2)] font-medium w-[100%]">
                    Aquí están mis experiencias y calificaciones.
                </p>
            </div>
            {/* card*/}
            <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
                <div className="left flex-1 flex items-centerjustify-center">
                    <fieldset
                        data-aos="zoom-in"
                        className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-[var(--c1-txt)] rounded-3xl py-1 px-8 font-semibold text-xl text-[var(--c1-txt3)]">
                            Experience
                        </legend>
                        <div className="flex flex-col gap-5">
                            {experience.map((item) => (
                                <div key={item.id} className="relative">
                                    <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                        <div className="c1 w-[12px] h-[12px] rounded-full bg-[var(--c3-bg)] border-2 border-[var(--c3-txt2)]"></div>
                                        <div className="line w-[230px] bg-[var(--c1-txt2)] h-[2px] sm:w-[250px]"></div>
                                        <div className="c2 w-[12px] h-[12px] rounded-full bg-[var(--c3-bg)] border-2 border-[var(--c3-txt2)]"></div>
                                    </div>
                                    <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-[var(--c1-txt3)] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                        <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                            {item.role}
                                        </h1>
                                        <span className=" text-[.9rem] font-semibold text-[var(--c1-txt2)] sm:text-base">
                                            {item.company}
                                        </span>
                                        <span className=" text-[.9rem] font-semibold text-[var(--c1-txt3)] sm:text-base">
                                            {item.date}
                                        </span>
                                        <p className=" text-[.9rem] text-pretty text-[var(--c1-txt2)]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div className="right flex-1 flex items-center justify-center">
                    <fieldset
                        data-aos="zoom-in"
                        className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
                    >
                        <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-[var(--c1-txt)] rounded-3xl py-1 px-8 font-semibold text-xl text-[var(--c1-txt3)]">
                            Experience
                        </legend>
                        <div className="flex flex-col gap-5">
                            {education.map((item) => (
                                <div key={item.id} className="relative">
                                    <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                                        <div className="c1 w-[12px] h-[12px] rounded-full bg-[var(--c3-bg)] border-2 border-[var(--c3-txt2)]"></div>
                                        <div className="line w-[230px] bg-[var(--c1-txt2)] h-[2px] sm:w-[250px]"></div>
                                        <div className="c2 w-[12px] h-[12px] rounded-full bg-[var(--c3-bg)] border-2 border-[var(--c3-txt2)]"></div>
                                    </div>
                                    <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-[var(--c1-txt3)] shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                                        <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                                            {item.title}
                                        </h1>
                                        <span className=" text-[.9rem] font-semibold text-[var(--c1-txt2)] sm:text-base">
                                            {item.institution}
                                        </span>
                                        <span className=" text-[.9rem] font-semibold text-[var(--c1-txt3)] sm:text-base">
                                            {item.date}
                                        </span>
                                        <p className=" text-[.9rem] text-pretty text-[var(--c1-txt2)]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}
