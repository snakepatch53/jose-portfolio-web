import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function SectionFooter({ info }) {
    const { ideasoft_link, social } = info;
    return (
        <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
            <div className=" bg-[var(--c2-bg)] h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
                <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
                    Háblame
                </h2>
                <div className=" flex items-center justify-center gap-8 sm:gap-5">
                    {social.map((item) => (
                        <a
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="box font-medium text-[var(--c2-txt)]   flex items-center justify-center flex-col"
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                className="w-7 mb-1 aspect-square fill-[var(--c2-txt)]"
                            />
                            <p>{item.name}</p>
                        </a>
                    ))}
                </div>
                <div className="sm:text-[12px] text-[var(--c2-txt)] opacity-60">
                    Copyright &copy; <span>{new Date().getFullYear()}</span>.{" "}
                    <a
                        href={ideasoft_link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        Ideasoft
                    </a>{" "}
                    Todo Derechos reservados
                </div>
            </div>
        </div>
    );
}
