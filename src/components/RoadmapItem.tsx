import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { AstromapItem } from '../types/common';

// @ts-ignore
import astroDot from '../../public/astromap-dot.svg';

interface RoadmapItemProps {
  itemIndex: number;
  roadmapItem: AstromapItem;
}

const RoadmapItem = ({ itemIndex, roadmapItem }: RoadmapItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const roadmapItemCn = classNames(
    'flex flex-row items-center mb-10 md:mb-20',
    {
      'md:flex-row-reverse md:mr-[50%]': itemIndex % 2 === 0,
      'md:ml-[50%]': itemIndex % 2 !== 0,
    }
  );

  const itemNumberWrapperCn = classNames(
    'flex flex-row items-center text-nexusGreen',
    {
      'md:mr-10': itemIndex % 2 !== 0,
      'md:flex-row-reverse md:ml-10': itemIndex % 2 === 0,
    }
  );

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
    'font-normal text-base leading-6 w-astromapDescription'
  );

  return (
    <div className="w-full cursor-pointer">
      <div className={roadmapItemCn}>
        <div className={itemNumberWrapperCn}>
          <div className="-mt-2 font-bold text-2xl">{`0${itemIndex + 1}`}</div>
          <Image alt="Astromap" src={astroDot} width={50} height={50} />
        </div>
        <div
          className={roadmapItemCardCn}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex flex-row justify-center items-center">
            <Image
              alt="Astromap"
              src={roadmapItem.imagePath}
              width={240}
              height={240}
            />

            <div key={roadmapItem.title} className="w-full ml-4">
              <h3 className="text-white text-2xl font-bold underline decoration-emerald-700 decoration-4 underline-offset-2">
                {roadmapItem.title}
              </h3>
              <p className={descriptionCn}>{roadmapItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
