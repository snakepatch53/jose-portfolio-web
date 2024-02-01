import React from "react";

const SkillBox = ({ icon, skill }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className={
                "box mx-auto w-[11rem] h-[11rem] rounded-lg bg-[var(--c2-bg)] shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
            }
        >
            <div
                className={
                    " w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl"
                }
            >
                <div
                    dangerouslySetInnerHTML={{ __html: icon }}
                    className="w-10 mb-1 aspect-square fill-[var(--c2-txt)]"
                />
            </div>
            <p className="font-semibold exsm:text-sm text-[var(--c2-txt2)]">{skill}</p>
        </div>
    );
};

export default SkillBox;
