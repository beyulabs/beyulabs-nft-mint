import VoyagerCard from "./VoyagerCard";
import { voyagers } from "../constants";
import { Voyager } from "../types/common";
import Carousel from 'react-multi-carousel';


const VoyagerCharacters = () => {
  const createAvatarCards = voyagers.map((voyager: Voyager) => (
    <div className="mr-10">
      <VoyagerCard
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
      </div>
    ));
;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

  return (
    <div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      <div className="flex flex-row flex-nowrap justify-center items-start mb-64">
      {/* <Carousel
          responsive={responsive}
          ssr
          showDots={true}
          slidesToSlide={1}
          containerClass={`w-full`}
          itemClass={`w-voyagerCard h-80 mx-4 relative cursor-pointer`}
          deviceType={''}
          centerMode={true}
        > */}
        {createAvatarCards}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default VoyagerCharacters;
