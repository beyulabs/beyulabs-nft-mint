import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FilterCategory, FilterOption, SelectedFilter } from '../types/common';

interface GalleryFiltersProps {
  filters: FilterCategory[];
  selectedFilters: SelectedFilter[];
  setSelectedFilters: (selectedFilters: SelectedFilter[]) => void;
}

const GalleryFilters = ({
  filters,
  selectedFilters,
  setSelectedFilters,
}: GalleryFiltersProps) => {
  const filterComponents = () =>
    filters.map((filter: FilterCategory) => {
      const { options } = filter;

      return (
        <Disclosure key={`filter-${filter.name}`}>
          {({ open }) => (
            <div className={`${open ? 'mb-6' : 'mb-2'}`}>
              <Disclosure.Button className="flex flex-row items-center justify-between w-full mb-2">
                <h3>{filter.name}</h3>
                <span className="font-medx-rowium text-gray-900">
                  {open ? (
                    <FontAwesomeIcon
                      width={12}
                      height={12}
                      icon={faMinus as IconProp}
                    />
                  ) : (
                    <FontAwesomeIcon
                      width={12}
                      height={12}
                      icon={faPlus as IconProp}
                    />
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="space-y-4">
                  {options.map((option: FilterOption, index: number) => (
                    <div key={option.display} className="flex items-center">
                      <input
                        id={`filter-${filter.name}-${index}`}
                        name={`${filter.name}-${option.display}`}
                        defaultValue={option.display}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        onClick={(e) => {
                          const categoryAndOption: string[] = e.currentTarget.name.split(
                            '-'
                          );

                          const existingFilterIndex: number = selectedFilters.findIndex(
                            // eslint-disable-next-line @typescript-eslint/no-shadow
                            (filter: SelectedFilter) =>
                              filter.category === categoryAndOption[0] &&
                              filter.option === categoryAndOption[1]
                          );

                          let newSelectedFilters: SelectedFilter[] = [];
                          if (existingFilterIndex === -1) {
                            const newEntry: SelectedFilter = {
                              category: categoryAndOption[0],
                              option: categoryAndOption[1],
                            };

                            newSelectedFilters = [...selectedFilters, newEntry];
                          } else {
                            newSelectedFilters = [
                              ...selectedFilters.slice(0, existingFilterIndex),
                              ...selectedFilters.slice(existingFilterIndex + 1),
                            ];
                          }

                          setSelectedFilters(newSelectedFilters);
                        }}
                      />
                      <label
                        htmlFor={`filter-${filter.name}-${index}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.display}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      );
    });

  return (
    <div className="bg-stone-50 px-2">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pt-2 pb-1">
        <h2 className="text-xl uppercase">Filters</h2>
        <FontAwesomeIcon width={12} height={12} icon={faBars as IconProp} />
      </div>
      <form className="flex flex-col min-h-screen">{filterComponents()}</form>
    </div>
  );
};

export default GalleryFilters;
