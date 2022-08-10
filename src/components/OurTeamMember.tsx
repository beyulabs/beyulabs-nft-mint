import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { TeamMember } from '../types/common';

interface VoyagerCardProps {
  voyager: TeamMember;
}

const OurTeamMember = ({ voyager }: VoyagerCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="mx-4 relative cursor-pointer">
      <div
        className="w-80 bg-nexusDarkBg rounded-xl mb-6 p-4 relative sm:hover:scale-110 sm:hover:bg-nexusGradientGreen"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="bg-white mb-5 rounded-xl overflow-hidden">
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            width={255}
            height={255}
            layout="responsive"
          />
        </div>
        <h3 className="text-center text-2xl text-white font-bold mb-2">
          {voyager.nexusName}
        </h3>
        <span
          className={`flex justify-center rounded-lg text-sm inline-block py-2 px-4 mb-3 bg-nexusGreen text-white ${
            isHover
              ? 'sm:bg-white sm:text-nexusGradientGreen'
              : 'bg-nexusGreen text-white'
          }`}
        >
          {voyager.irlName}
        </span>

        <p
          className={`text-astromapGrayText rounded-lg hidden ${
            isHover ? 'sm:block' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default OurTeamMember;
