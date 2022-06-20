import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

import { AstromapItem } from "../types/common";
import { astromap } from "../constants";
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
