import Image from 'next/image';
import { useState } from 'react';
import { Voyager } from '../types/common';

// @ts-ignore
import voyagerArrow from '../../public/voyager-card-arrow.svg';

interface VoyagerCardProps {
  voyager: Voyager;
}

const VoyagerCard = ({ voyager }: VoyagerCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const VoyagerDescription = () => (
    <div className="h-80">
      <p className="text-astromapGrayText rounded-lg text-left font-sm">
        {voyager.description}
      </p>
    </div>
  );

  return (
    <div className="mx-16 pb-6 relative cursor-pointer">
      <div
        /* eslint-disable-next-line max-len */
        className="w-voyagerCard bg-nexusDarkBg rounded-xl mb-6 p-4 border border-cardBorder relative sm:hover:scale-110 sm:hover:z-10 sm:hover:shadow-voyagerCard voyager-card-wrapper"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <>
          <div>
            <div className="bg-nexusDarkBg mb-5 rounded-xl overflow-hidden pt-5">
              {isHover ? (
                <VoyagerDescription />
              ) : (
                <Image
                  alt={voyager.nexusName}
                  src={voyager.image}
                  layout="responsive"
                />
              )}
            </div>
            <h3 className="text-2xl text-white font-bold mb-2">
              {voyager.nexusName}
            </h3>
            <span className="rounded-lg text-sm inline-block py-2 px-4 mb-3 bg-nexusGreen text-nexusDarkBg">
              {voyager.irlName}
            </span>

            {!isHover && (
              <div className="absolute right-0 bottom-0 p-4">
                <Image
                  alt="Arrow icon"
                  src={voyagerArrow}
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default VoyagerCard;
