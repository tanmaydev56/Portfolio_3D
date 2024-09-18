
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { AnimatedTooltipPreview } from "../components/tooltip";


const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 lg:translate-y-[20px] translate-y-[1800px]">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="">
        <AnimatedTooltipPreview/>
        </div>
  
        <p className="text-white-500">© 2024 Tanmay Sharma. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;