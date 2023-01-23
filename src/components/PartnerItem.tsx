import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { PartnersItem } from '../types/common';

interface PartnerItemProps {
  partnerItem: PartnersItem;
}

const RoadmapItem = ({ partnerItem }: PartnerItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const roadmapItemCardCn = classNames(
    'bg-nexusBlack p-4 rounded-xl w-astromapItem h-astromapItem text-white grow md:grow-0',
    {
      'text-white bg-nexusGreen': isHover,
    }
  );

  const descriptionCn = classNames(
    {
      'text-astromapGrayText': !isHover,
      'text-white': isHover,
    },
    'font-normal text-base leading-6'
  );

  const CTAdescriptionCn = classNames(
    {
      'text-nexusGreen': !isHover,
      'text-white': isHover,
    },
    'font-normal text-base uppercase'
  );

  return (
    <div className="w-full cursor-pointer">
      <div className="grid grid-cols-2">
        <div
          className={roadmapItemCardCn}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex flex-row justify-center items-center">
            <Image
              alt="Astromap"
              src={partnerItem.imagePath}
              width={240}
              height={240}
            />

            <div key={partnerItem.title} className="w-full ml-4">
              <h3 className="text-white text-2xl font-bold underline decoration-emerald-700 decoration-4 underline-offset-2">
                {partnerItem.title}
              </h3>
              <p className={descriptionCn}>{partnerItem.description}</p>
              <p className={CTAdescriptionCn}>{partnerItem.callToAction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
