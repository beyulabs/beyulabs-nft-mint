import { XIcon } from "@heroicons/react/solid";

import { SelectedFilter } from "../types/common";

interface FilterTagProps {
  filter: SelectedFilter;
  remove: (filter: SelectedFilter) => void;
}

const FilterTag = ({ filter, remove }: FilterTagProps) => {
  return (
    <div
      key={`select-filter-${filter.category}-${filter.option}`}
      className="flex flex-row justify-between items-center my-2 mx-1 px-2 py-1 bg-gray-400 rounded-lg"
    >
      <span className="text-sm text-white font-medium">{filter.option}</span>
      <div className="px-1 py-1">
        <XIcon
          className="h-4 w-4  ml-2 fill-white cursor-pointer"
          aria-hidden="true"
          onClick={() => remove(filter)}
        />
      </div>
    </div>
  );
};

export default FilterTag;
