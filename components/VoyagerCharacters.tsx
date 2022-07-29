import VoyagerCard from "./VoyagerCard";
import { voyagers } from "../constants";
import { Voyager } from "../types/common";
import { Carousel } from "react-responsive-carousel";

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
    <div className="">
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      <Carousel
        infiniteLoop={true}
        autoPlay={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        dynamicHeight={false}
        swipeable={true}
        centerMode={true}
        centerSlidePercentage={33}
      >
        {createAvatarCards()}
      </Carousel>
    </div>
  );
};

export default VoyagerCharacters;
