import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";
const Hero = ({
  heroapi,
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute top-0 left-0 w-full opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl sxm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            {title}
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl sxm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
            {subtitle}
          </h1>
          <button className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5">
            {btntext}
          </button>
          <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27] left-[11%] xl:left-0 w-auto h-auto">
            {videos?.map((value, i) => (
              <Clips key={i} imgsrc={value.imgsrc} clip={value.clip} />
            ))}
          </div>
          <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27] right-0 z-50">
            {sociallinks?.map((value, i) => (
              <SocialLink key={i} icon={value.icon} />
            ))}
          </div>
        </div>
        <div className="">
          <img
            src={img}
            alt="hero-img/img"
            className="w-auto mt-16 h-[45vh] lg:h-[35vh] md:h-[28vh] sm:h-[18vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
