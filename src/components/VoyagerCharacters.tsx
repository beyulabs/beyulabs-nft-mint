import { Carousel } from 'react-responsive-carousel';
import VoyagerCard from './VoyagerCard';
import { voyagers } from '../utils/constants';
import { Voyager } from '../types/common';

const VoyagerCharacters = () => {
  const createAvatarCards = () =>
    voyagers.map((voyager: Voyager) => (
      <VoyagerCard
        key={`${voyager.nexusName.toLowerCase()}`}
        voyager={voyager}
      />
    ));

  return (
    <div>
      <h2 className="text-6xl text-white font-bold drop-shadow-xl mb-24 text-center uppercase">
        The Voyagers
      </h2>
      <Carousel
        infiniteLoop
        autoPlay={false}
        showStatus={false}
        showArrows
        showThumbs={false}
        dynamicHeight={false}
        swipeable
        centerMode
        centerSlidePercentage={33}
      >
        {createAvatarCards()}
      </Carousel>
    </div>
  );
};

export default VoyagerCharacters;
