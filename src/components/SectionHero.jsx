import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../assets/Resume.pdf";
import Button from "./Button";

export default function SectionHero({ info }) {
    return (
        <div
            id="home"
            className=""
            style={{
                background: "var(--c5-bg)",
                color: "var(--c1-bg)",
            }}
        >
            <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
                <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
                    <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
                        <h2
                            data-aos="fade-up"
                            className=" text-5xl font-bold sm:text-[2rem] text-[var(--c5-txt)]"
                        >
                            Hola, soy {info.name}
                        </h2>
                        <TypeAnimation
                            data-aos="fade-up"
                            sequence={[info.profession, 2000, info.role, 2000, ""]}
                            speed={30}
                            wrapper="h2"
                            repeat={Infinity}
                            className="text-[var(--c5-txt2)] text-4xl font-bold sm:text-3xl"
                        />
                        <p className="text-[1.1rem] font-normal tracking-wide w-3/4 md:w-full text-[var(--c5-txt)] opacity-70 sm:text-[.95rem]">
                            {info.description}
                        </p>
                    </div>
                    <div data-aos="fade-up" className="buttons flex gap-5">
                        <Button style="1" href="#contact" name="Contáctame" />
                        <Button
                            style="2"
                            href={resumePDF}
                            name={
                                <>
                                    Curriculum <FiDownload />
                                </>
                            }
                            download
                        />
                    </div>
                    <div className="icons flex mt-5">
                        <ul
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className=" flex gap-5 pl-5"
                        >
                            {info.social.map((item) => (
                                <SocialItem key={item.id} icon={item.icon} href={item.url} />
                            ))}
                        </ul>
                    </div>
                </div>
                <PhotoBackground src="./img/jose.png" />
            </div>
        </div>
    );
}

function SocialItem({ icon, href = "" }) {
    return (
        <li>
            <a href={href} target="_blank" red="noreferrer">
                <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className="w-6 aspect-square hover:scale-110 fill-[var(--c5-txt)] opacity-50 hover:opacity-100"
                    // style={{ fill: "" }}
                />
            </a>
        </li>
    );
}

function PhotoBackground({ src = "", ...props }) {
    return (
        <div
            className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end"
            style={{
                "--color1": "var(--c4-bg)",
                "--color2": "var(--c6-bg)",
            }}
        >
            <div className="relative h-[88%] w-fit flex items-center sm:items-end">
                <div className="relative  w-full h-full" data-aos="fade-up">
                    <div className="relative w-full h-full">
                        <svg viewBox="0 0 172.8 172.8" className="w-full h-full">
                            <circle
                                cx="128"
                                cy="60.8"
                                r="30.41"
                                style={{
                                    fill: "var(--color1)",
                                }}
                            />
                            <circle
                                cx="86"
                                cy="108.82"
                                r="57.98"
                                style={{
                                    fill: "var(--color2)",
                                }}
                            />
                            <circle
                                cx="28.02"
                                cy="30.39"
                                r="14.2"
                                style={{
                                    fill: "var(--color1)",
                                }}
                            />
                        </svg>
                        <img
                            src={src}
                            className="absolute inset-0 w-full h-full rounded-b-full object-contain object-bottom pl-[81.5px] pr-[85px] pb-[55px]"
                        />
                    </div>
                </div>
                <div className="absolute z-20 bottom-10 md:bottom-3 right-8 md:right-2">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className=" relative cursor-pointer"
                    >
                        <img
                            className=" w-[135px] md:w-[90px] circle-text"
                            src="./img/fullstack.png"
                            alt=""
                        />
                        <FaPlay className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
