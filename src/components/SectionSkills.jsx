import React from "react";
import ProgressBar from "../chip/ProgressBar";
import SkillBox from "../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import { SiJavascript, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

export default function SectionSkills({ info, darkMode }) {
    const { technologies } = info;
    const { preferred_techs } = info;
    return (
        <div id="skills">
            <div className=" container m-auto  mt-16">
                {/* heading */}
                <div data-aos="fade-up" className="relative mb-5">
                    <h3 className=" text-3xl font-black sm:text-2xl">Mis habilidades</h3>
                    <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
                </div>
                {/* content*/}
                <div className="flex md:flex-col ">
                    <div className="left flex-1 w-full">
                        <p
                            data-aos="fade-up"
                            className="font-medium w-[100%] text-[var(--c1-txt2)]"
                        >
                            Aquí están mis habilidades.
                        </p>
                        {/* left box */}
                        <div
                            data-aos="zoom-in"
                            className="progress flex items-center h-[100%] justify-end md:justify-center"
                        >
                            <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                                {technologies.map((item) => (
                                    <ProgressBar
                                        key={item.id}
                                        icon={item.icon}
                                        name={item.name}
                                        level={item.level}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* right box */}
                    <div className="right flex-1 grid grid-cols-2 p-5 gap-10 sm:w-full">
                        <SkillBox
                            icon={preferred_techs.language1.icon}
                            skill={preferred_techs.language1.name}
                        />
                        <SkillBox
                            icon={preferred_techs.language2.icon}
                            skill={preferred_techs.language2.name}
                        />
                        <SkillBox
                            className=""
                            icon={preferred_techs.language3.icon}
                            skill={preferred_techs.language3.name}
                        />
                        <SkillBox
                            icon={preferred_techs.language4.icon}
                            skill={preferred_techs.language4.name}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
