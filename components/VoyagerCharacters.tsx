import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

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
    <div className="md:w-2/3 md:mx-auto">
      <h2 className="uppercase text-3xl text-white font-semibold drop-shadow-xl mb-8 text-center md:text-4xl">
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
      >
        {createAvatarCards()}
      </Carousel>
    </div>
  );
};

export default VoyagerCharacters;
