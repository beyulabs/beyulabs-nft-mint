import VoyagerCard from "./VoyagerCard";
import { voyagers } from "../constants";
import { Voyager } from "../types/common";
import { Carousel } from "react-responsive-carousel";

const VoyagerCharacters = () => {
  const createAvatarCards = () => {
    return voyagers.map((voyager: Voyager) => (
      <div className="mr-10">
      <VoyagerCard
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      <div className="flex flex-row flex-wrap justify-center mb-64">
      <Carousel
        autoPlay={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={25} 
      >
        {createAvatarCards()}
      </Carousel>
      </div>
    </div>
  );
};

export default VoyagerCharacters;
