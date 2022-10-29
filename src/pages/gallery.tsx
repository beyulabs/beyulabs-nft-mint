import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import GalleryFilters from '../components/GalleryFilters';
import FilterTag from '../components/FilterTag';
import { mockData } from './api/mockData';
import { FilterCategory, SelectedFilter } from '../types/common';

const initialFilters = [
  {
    name: 'Type',
    options: [
      {
        display: 'Human',
        checked: false,
      },
      {
        display: 'Red',
        checked: false,
      },
    ],
  },
  {
    name: 'Mouth',
    options: [
      {
        display: 'Smirk',
        checked: false,
      },
      {
        display: 'Relaxed',
        checked: false,
      },
      {
        display: 'Smile',
        checked: false,
      },
      {
        display: 'Scroll',
        checked: false,
      },
      {
        display: 'Frown',
        checked: false,
      },
    ],
  },
  {
    name: 'Hair',
    options: [
      {
        display: 'Gray Samurai',
        checked: false,
      },
      {
        display: 'Brown Samurai',
        checked: false,
      },
      {
        display: 'Indigo Disheveled',
        checked: false,
      },

      {
        display: 'Blonde Pixie',
        checked: false,
      },
    ],
  },
];

const Gallery: NextPage = () => {
  const [filters, setFilters] = useState<FilterCategory[]>(initialFilters);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);
  console.log('selectedFilters', selectedFilters);

  const createAzukiPreviews = () =>
    mockData.map((azuki, index) => (
      // eslint-disable-next-line react/no-array-index-key
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
    ));

  const removeFilterTag = (filterToRemove: SelectedFilter) => {
    const existingFilterIndex: number = selectedFilters.findIndex(
      (selectedFilter: SelectedFilter) =>
        selectedFilter.category === filterToRemove.category &&
        selectedFilter.option === filterToRemove.option
    );

    const newSelectedFilters = [
      ...selectedFilters.slice(0, existingFilterIndex),
      ...selectedFilters.slice(existingFilterIndex + 1),
    ];

    setSelectedFilters(newSelectedFilters);

    // const newFilters = [...filters];
    // const categoryToUpdate: FilterCategory | undefined = newFilters.find(
    //   (filter) => filter.name === filterToRemove.category
    // );
    // console.log("categoryToUpdate", categoryToUpdate);
    // if (categoryToUpdate) {
    //   categoryToUpdate.options.forEach((option) => {
    //     console.log("option", option);
    //     if (option.display === filterToRemove.option) {
    //       option.checked = false;
    //     }
    //   });
    //   console.log("newFilters", newFilters);

    //   setFilters(newFilters);
    // }
  };

  const createFilterTags = () =>
    selectedFilters.map((filter: SelectedFilter) => (
      <FilterTag
        key={`select-filter-${filter.category}-${filter.option}`}
        filter={filter}
        remove={removeFilterTag}
      />
    ));

  return (
    <section className="flex flex-row min-h-screen">
      <div className="w-1/4 ">
        <GalleryFilters
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="flex flex-col  w-3/4 bg-stone-50">
        <div className="flex flex-wrap">{createFilterTags()}</div>
        <div className="flex flex-wrap">{createAzukiPreviews()}</div>
      </div>
    </section>
  );
};

export default Gallery;
