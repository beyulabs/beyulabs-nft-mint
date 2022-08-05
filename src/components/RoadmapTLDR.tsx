import { AstromapItem } from "../types/common";
import { astromap } from "../utils/constants";
import RoadmapItem from "./RoadmapItem";

const RoadmapTLDR = () => {
  const createRoadmap = () => {
    return astromap.map((item: AstromapItem, index: number) => {
      return (
        <RoadmapItem
          key={`roadmap-item-${index}`}
          itemIndex={index}
          roadmapItem={item}
        />
      );
    });
  };

  return <>{createRoadmap()}</>;
};

export default RoadmapTLDR;
