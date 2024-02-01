import React from "react";
import styled from "styled-components";

const ProgressBar = ({ icon, name, level, duration = 3 }) => {
    return (
        <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold ">
            <div className="flex justify-between">
                <div className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
                    <div
                        dangerouslySetInnerHTML={{ __html: icon }}
                        className="w-4 mb-1 aspect-square fill-[var(--c1-txt)]"
                    />{" "}
                    {name}
                </div>{" "}
                {/* <span className=" text-gray-400 text-[1.1rem] sm:text-[1rem] exsm:text-sm">
          {value}%
        </span> */}
            </div>
            <div className="h-[8px] w-[100%] relative rounded-3xl bg-[var(--c4-txt)]">
                <Progress
                    className="w-[0%] h-[8px] absolute rounded-3xl bg-[var(--c4-bg)]"
                    style={{
                        width: `${level}%`,
                        animation: `progress-animation ${duration}s linear`,
                    }}
                ></Progress>
            </div>
        </div>
    );
};

export default ProgressBar;

const Progress = styled.div`
    @keyframes progress-animation {
        from {
            width: 0%;
        }
        to {
            width: ${(props) => props.width};
        }
    }
`;
