import { AstromapItem } from '../types/common';
import { astromap } from '../utils/constants';
import RoadmapItem from './RoadmapItem';

const RoadmapTLDR = () => {
  const createRoadmap = () =>
    astromap.map((item: AstromapItem, index: number) => (
      <RoadmapItem
        /* eslint-disable-next-line react/no-array-index-key */
        key={`roadmap-item-${index}`}
        itemIndex={index}
        roadmapItem={item}
      />
    ));

  return <>{createRoadmap()}</>;
};

export default RoadmapTLDR;
