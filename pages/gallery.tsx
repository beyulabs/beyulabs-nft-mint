import type { NextPage } from "next";

import GalleryFilters from "../components/GalleryFilters";

const Gallery: NextPage = () => {
  const filters = [
    {
      name: "hair",
      options: [
        {
          value: "blonde",
          display: "Blonde",
        },
        {
          value: "brunette",
          display: "Brunette",
        },
        {
          value: "redhead",
          display: "Redhead",
        },
      ],
    },
    {
      name: "eyes",
      options: [
        {
          value: "green",
          display: "Green",
        },
        {
          value: "blue",
          display: "Blue",
        },
        {
          value: "hazel",
          display: "Hazel",
        },
      ],
    },
    {
      name: "background",
      options: [
        {
          value: "gold",
          display: "Gold",
        },
        {
          value: "silver",
          display: "Silver",
        },
        {
          value: "bronze",
          display: "Bronze",
        },
      ],
    },
  ];
  return (
    <section className="flex flex-row px-8  bg-teal-500 min-h-screen pt-16">
      <div className="w-1/4 ">
        <GalleryFilters filters={filters} />
      </div>
      <div className="w-3/4 bg-red-500">
        <p>nfts</p>
      </div>
    </section>
  );
};

export default Gallery;
