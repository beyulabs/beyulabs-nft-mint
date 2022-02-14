import type { NextPage } from "next";
import Image from "next/image";

import GalleryFilters from "../components/GalleryFilters";
import { mockData } from "../pages/api/mockData";

const Gallery: NextPage = () => {
  const filters = [
    {
      name: "type",
      options: [
        {
          value: "human",
          display: "Human",
        },
        {
          value: "red",
          display: "Red",
        },
      ],
    },
    {
      name: "mouth",
      options: [
        {
          value: "smirk",
          display: "Smirk",
        },
        {
          value: "relaxed",
          display: "Relaxed",
        },
        {
          value: "smile",
          display: "Smile",
        },
        {
          value: "scroll",
          display: "Scroll",
        },
        {
          value: "frown",
          display: "Frown",
        },
      ],
    },
    {
      name: "hair",
      options: [
        {
          value: "Gray Samurai",
          display: "Gray Samurai",
        },
        {
          value: "Brown Samurai",
          display: "Brown Samurai",
        },
        {
          value: "Indigo Disheveled",
          display: "Indigo Disheveled",
        },

        {
          value: "Blonde Pixie",
          display: "Blonde Pixie",
        },
      ],
    },
  ];

  const createAzukiPreviews = () => {
    return mockData.map((azuki, index) => {
      return (
        <div className="w-1/3" key={`azuki-${index}`}>
          <Image
            src={azuki.image}
            width="100%"
            height="100%"
            alt={azuki.name}
            layout="responsive"
            quality={20}
          />
        </div>
      );
    });
  };

  return (
    <section className="flex flex-row px-8  bg-teal-500 min-h-screen pt-16">
      <div className="w-1/4 ">
        <GalleryFilters filters={filters} />
      </div>
      <div className="flex flex-wrap  w-3/4 bg-red-500">
        {createAzukiPreviews()}
      </div>
    </section>
  );
};

export default Gallery;
