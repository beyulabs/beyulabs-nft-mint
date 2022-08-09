import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { PartnersItem } from "../types/common";

interface PartnerItemProps {
    partnerItem: PartnersItem;
  }

  const Partner = ({ partnerItem }: PartnerItemProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const CTAspanCn = classNames({
      "text-nexusGreen": !isHover,
      "text-white": isHover,
    },
      "font-normal text-base leading-6 lg:text-left sm:text-center"
    );

    const Description = () => {
      return (
        <div className="mt-4 lg:text-lg sm:text-sm sm:text-center lg:text-left leading-5 sm:w-partnerTextMob lg:w-partnerText">
          <p className="hover:text-white">Some description about project. Keep your eyes on the <span className={CTAspanCn}>#announcements</span> and <span className={CTAspanCn}>#boarding-pass</span> channels for these challenges,
           they will essentialy guarantee your seat on the rocket to the new world. These challenges will be presented sporadically.  </p>
        </div>
    )
    }

    const roadmapItemCardCn = classNames(
        "bg-nexusBlack p-4 rounded-xl sm:w-partnerItemPhone lg:w-partnerItem h-partnerItem text-white grow md:grow-0 sm:flex flex-column",
        {
          "text-white bg-nexusGreen": isHover,
        }
      );
    
      const descriptionCn = classNames({
        "text-astromapGrayText": !isHover,
        "text-white": isHover,
      },
        "font-normal text-base leading-6 order-1"
      );

      const CTAdescriptionCn = classNames({
        "text-nexusGreen": !isHover,
        "text-white": isHover,
      },
        "font-normal text-base lg:uppercase sm:lowercase mt-6 lg:text-left sm:text-center"
      );


      return (
        <div className="w-full cursor-pointer lg:-ml-36">
          <div className="sm:w-partnerItemPhone h-partnerItemPhone sm:m-auto">
            <div
              className={roadmapItemCardCn}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className="lg:flex flex-row justify-center items-center sm:flex flex-column sm:flex items-start lg:bg-[url('/boarding-pass-ellipsis.svg')] bg-right-bottom md:bg-no-repeat">
                <div className="-ml-4">
                <Image
                  alt="Astromap"
                  src={partnerItem.imagePath}
                  width={233}
                  height={473}
                />
                </div>
    
                <div key={partnerItem.title} className="w-full ml-4">
                  <h3 className="text-white lg:text-left sm:text-center text-2xl font-bold sm:order-none">
                    {partnerItem.title}
                  </h3>
                  <p className={descriptionCn}><Description/></p>
                  <p className={CTAdescriptionCn}>{partnerItem.callToAction}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Partner;
  

