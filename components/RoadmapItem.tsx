import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { AstromapItem } from "../types/common";

import astroDot from "../public/astromap-dot.svg";

interface RoadmapItemProps {
  itemIndex: number;
  roadmapItem: AstromapItem;
}

const RoadmapItem = ({ itemIndex, roadmapItem }: RoadmapItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const roadmapItemCn = classNames(
    "flex flex-row items-center mb-10 md:mb-20",
    {
      "md:flex-row-reverse md:mr-[50%]": itemIndex % 2 === 0,
      "md:ml-[50%]": itemIndex % 2 !== 0,
    }
  );

  const itemNumberWrapperCn = classNames(
    "flex flex-row items-center text-nexusGreen",
    {
      "md:mr-10": itemIndex % 2 !== 0,
      "md:flex-row-reverse md:ml-10": itemIndex % 2 === 0,
    }
  );

  const roadmapItemCardCn = classNames(
    "bg-nexusBlack p-4 rounded-xl w-96 text-white grow md:grow-0",
    {
      "text-white bg-nexusGreen": isHover,
    }
  );

  const descriptionCn = classNames({
    "text-astromapGrayText": !isHover,
    "text-white": isHover,
  });

  return (
    <div className="w-full cursor-pointer">
      <div className={roadmapItemCn}>
        <div className={itemNumberWrapperCn}>
          <div className="-mt-2">{`0${itemIndex + 1}`}</div>
          <Image alt="Astromap" src={astroDot} width={48} height={48} />
        </div>
        <div
          className={roadmapItemCardCn}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex flex-row justify-center">
            <Image
              alt="Astromap"
              src={roadmapItem.imagePath}
              width={164}
              height={164}
            />

            <div key={roadmapItem.title} className="w-full ml-4">
              <h3 className="text-white text-xl font-semibold">
                {roadmapItem.title}
              </h3>
              <p className={descriptionCn}>{roadmapItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
