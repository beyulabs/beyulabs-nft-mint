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
      <h2 className="text-6xl text-white font-semibold drop-shadow-xl mb-12 text-center">
        The Voyagers
      </h2>
      <div className="flex flex-row flex-wrap justify-center items-start">
        {createAvatarCards()}
      </div>
    </div>
  );
};

export default VoyagerCharacters;
