import { FilterCategory, FilterOption } from "../types/common";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

interface GalleryFiltersProps {
  filters: FilterCategory[];
}

const GalleryFilters = ({ filters }: GalleryFiltersProps) => {
  const filterComponents = () => {
    return filters.map((filter: FilterCategory) => {
      const { options } = filter;

      return (
        <Disclosure key={`filter-${filter.name}`}>
          {({ open }) => (
            <div className={`${open ? "mb-6" : "mb-2"}`}>
              <Disclosure.Button className="flex flex-row items-center justify-between w-full mb-2">
                <h3>{filter.name}</h3>
                <span className="font-medx-rowium text-gray-900">
                  {open ? (
                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="space-y-4">
                  {options.map((option: FilterOption, index: number) => {
                    return (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${filter.name}-${index}`}
                          name={`${filter.name}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={false}
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${filter.name}-${index}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.display}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      );
    });
  };

  return (
    <div className="bg-stone-50 px-2">
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pt-2 pb-1">
        <h2 className="text-xl uppercase">Filters</h2>
        <FilterIcon className="w-4 h-4" />
      </div>
      <form className="flex flex-col min-h-screen">{filterComponents()}</form>
    </div>
  );
};

export default GalleryFilters;
