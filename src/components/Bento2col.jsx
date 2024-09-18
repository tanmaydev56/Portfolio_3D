import { BentoGrid, BentoGridItem } from "./ui/bento";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { GlobeDemo } from "./Globee";
import { useState } from "react";

export function BentoGridSecondDemo() {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(' tanmaysharma763@gmail.com');
        setHasCopied(true);
    
        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      };
  return (
    <BentoGrid className="max-w-4xl lg:mx-20  md:auto-rows-[20rem]">
      <BentoGridItem
        title="Global Connections"
        description="Explore my work and connect with me from anywhere in the world."
        header={
          <div className="flex flex-col justify-center items-center h-full overflow-hidden  ">
            <GlobeDemo />
          </div>
        }
        className="md:col-span-2 h-[500px]"
      />
      <BentoGridItem
        title="The Art of Design"
        description="Discover the beauty of thoughtful and functional design."
        header={
          <div className="flex flex-col justify-center items-center h-full overflow-hidden  ">
           <img src="/assets/grid2.png" alt="" />
          </div>
        }
        className="md:col-span-1 lg:h-[500px] h-[400px] lg:w-[550px] w-auto"
      />
      <BentoGridItem
        title="My Passion for Coding"
        description="I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills."

       header={
        <div className="flex flex-col justify-center items-center h-full overflow-hidden ">
         <img src="/assets/grid3.png" alt="" />
        </div>
       }
        className="md:col-span-1 lg:h-[400px] h-[400px]  lg:w-[800px] w-auto  lg:translate-y-[180px]"
      />
      <BentoGridItem
       

       header={
        <div className="flex flex-col justify-center items-center h-full overflow-hidden ">
         <img src="/assets/grid4.png" alt="" />
         <div className="space-y-2">
         <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-[15px] md:text-xl font-medium text-gray_gradient text-white">tanmaysharma763@gmail.com</p>
         </div>

         </div>
        </div>
       }
        className="md:col-span-1 lg:h-[400px] h-[400px]  lg:w-[348px] w-auto lg:translate-x-[510px]  lg:translate-y-[180px]"
      />
      


    </BentoGrid>
    
  );
}


