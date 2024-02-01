import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function WorkCard({ works }) {
    const reversedData = [...works].reverse();

    return (
        <>
            {reversedData.map((data) => {
                return (
                    <div
                        data-aos="zoom-in"
                        key={data.id}
                        className="flex flex-col justify-center items-center gap-4"
                    >
                        <POPUP className="img-content relative">
                            <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                                />
                            </div>

                            <div
                                className={`popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
                            >
                                <p
                                    className="text-[var(--c6-txt)] opacity-80 text-lg leading-[1.4] text-pretty text-center w-[90%] pr-3"
                                    style={{
                                        textShadow:
                                            "1px 0 1px #000, -1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                                    }}
                                >
                                    {data.desc}
                                </p>
                                <div className=" flex items-center justify-center gap-4">
                                    <Link
                                        to={data.url}
                                        target="_blank"
                                        className="mt-3 rounded-md shadow-md p-1 px-2 pr-3 flex gap-1 items-center justify-center font-medium bg-[var(--c2-bg)] hover:scale-105"
                                    >
                                        <RxExternalLink className="text-[var(--c2-txt)] rounded-full w-[35px] h-[35px] p-2" />
                                        <p className="text-[var(--c2-txt)] pt-1">Demo</p>
                                    </Link>
                                    <Link
                                        to={data.git}
                                        target="_blank"
                                        className="mt-3 rounded-md shadow-md p-1 px-2 pr-3 flex gap-1 items-center justify-center font-medium bg-[var(--c2-bg)] hover:scale-105"
                                    >
                                        <AiOutlineGithub className=" text-[var(--c2-txt)] rounded-full  w-[35px] h-[35px] p-2" />
                                        <p className=" text-[var(--c2-txt)] pt-1">Code</p>
                                    </Link>
                                </div>
                            </div>
                        </POPUP>
                        <p className="text-[var(--c1-txt)] text-xl font-medium sm:text-lg">
                            {data.title}
                        </p>
                    </div>
                );
            })}
        </>
    );
}

const POPUP = styled.div`
    position: relative;
    img {
        &:hover {
            transform: scaleX(2);
        }
    }
    .popup {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        margin: auto;
        transition: 0.5s ease;
        background: var(--c6-bg);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .icon {
        color: var(--c6-txt);
    }
    &:hover .popup {
        opacity: 1;
        color: var(--c6-txt);
    }
`;
