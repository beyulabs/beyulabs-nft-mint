import VoyagerCard from "./VoyagerCard";
import { voyagers } from "../constants";
import { Voyager } from "../types/common";

const VoyagerCharacters = () => {
  const createAvatarCards = () => {
    return voyagers.map((voyager: Voyager) => (
      <VoyagerCard
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
    ));
  };

  return (
    <div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      <div className="flex flex-row flex-nowrap justify-center items-start mb-64">
        {createAvatarCards()}
      </div>
    </div>
  );
};

export default VoyagerCharacters;
