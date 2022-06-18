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
    <div
      className="w-80 mx-4 bg-nexusDarkBg rounded-xl shrink-0 grow-0 mb-6 p-4 border border-nexusGreen relative"
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

      {isHover && (
        <p className="text-astromapGrayText">{voyager.description}</p>
      )}

      {!isHover && (
        <div className="absolute right-0 bottom-0 p-4">
          <Image alt="Arrow icon" src={voyagerArrow} width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default VoyagerCard;
