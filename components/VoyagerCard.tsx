import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { Voyager } from "../types/common";

import voyagerArrow from "../public/voyager-card-arrow.svg";

interface VoyagerCardProps {
  voyager: Voyager;
}

const VoyagerCard = ({ voyager }: VoyagerCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="w-80 mx-4 relative cursor-pointer">
      <div
        className="w-80 bg-nexusDarkBg rounded-xl mb-6 p-4 border border-nexusGreen relative hover:scale-110 hover:z-10 hover:shadow-voyagerCard voyager-card-wrapper"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="bg-white mb-5 rounded-xl overflow-hidden">
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            layout="responsive"
          />
        </div>
        <h3 className="text-2xl text-white bold mb-2">{voyager.nexusName}</h3>
        <span className="rounded-lg text-sm inline-block py-2 px-4 mb-3 bg-nexusGreen text-nexusDarkBg">
          {voyager.irlName}
        </span>

        <p className="text-astromapGrayText rounded-lg hidden">
          {voyager.description}
        </p>

        {!isHover && (
          <div className="absolute right-0 bottom-0 p-4">
            <Image alt="Arrow icon" src={voyagerArrow} width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default VoyagerCard;
