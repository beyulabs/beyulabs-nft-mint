import VoyagerCard from "./VoyagerCard";
import { voyagers } from "../constants";
import { Voyager } from "../types/common";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const VoyagerCharacters = () => {
  const createAvatarCards = () => {
    return voyagers.map((voyager: Voyager) => (
      <VoyagerCard
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
    ));
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 2
  // };
  return (
    <div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      {/* <Slider {...settings}> */}
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
        {/* </Slider> */}
      </Carousel>
    </div>
  );
};

export default VoyagerCharacters;
