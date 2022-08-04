import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { PartnersItem } from "../types/common";

interface PartnerItemProps {
    partnerItem: PartnersItem;
  }

  const Partner = ({ partnerItem }: PartnerItemProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const Description = () => {
      return (
        <div>
          <p>Some description about project</p>
        </div>
    )
    }

    const roadmapItemCardCn = classNames(
        "bg-nexusBlack p-4 rounded-xl w-partnerItem h-partnerItem text-white grow md:grow-0",
        {
          "text-white bg-nexusGreen": isHover,
        }
      );
    
      const descriptionCn = classNames({
        "text-astromapGrayText": !isHover,
        "text-white": isHover,
      },
        "font-normal text-base leading-6"
      );

      const CTAdescriptionCn = classNames({
        "text-nexusGreen": !isHover,
        "text-white": isHover,
      },
        "font-normal text-base uppercase mt-6"
      );


      return (
        <div className="w-full cursor-pointer">
          <div className="grid grid-cols-2">
            <div
              className={roadmapItemCardCn}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <div className="flex flex-row justify-center items-center lg:bg-[url('/boarding-pass-ellipsis.svg')] lg:bg-right-bottom md:bg-no-repeat">
                <div className="-ml-4 -mt-4">
                <Image
                  alt="Astromap"
                  src={partnerItem.imagePath}
                  width={233}
                  height={473}
                />
                </div>
    
                <div key={partnerItem.title} className="w-full ml-4">
                  <h3 className="text-white text-2xl font-bold">
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
  

