import Image from "next/image";
import { Voyager } from "../types/common";

interface VoyagerCardProps {
  voyager: Voyager;
}

const VoyagerCard = ({ voyager }: VoyagerCardProps) => {
  const createPills = () => {
    return voyager.irlName.map((name, index) => {
      return (
        <span
          key={`${name}-${index}`}
          className="rounded-lg text-sm inline-block py-2 px-4 mx-2 mb-3 bg-nexusGreen text-nexusDarkBg"
        >
          {name}
        </span>
      );
    });
  };

  return (
    <div className="mx-8 relative cursor-pointer">
      <div className="bg-nexusDarkBg rounded-xl mb-6 p-4 border border-nexusGreen relative">
        <div className="bg-white mb-5 rounded-xl overflow-hidden">
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            layout="responsive"
          />
        </div>
        <h3 className="text-2xl text-white bold mb-2">{voyager.nexusName}</h3>

        {createPills()}

        <p className="text-astromapGrayText rounded-lg">
          {voyager.description}
        </p>
      </div>
    </div>
  );
};

export default VoyagerCard;
