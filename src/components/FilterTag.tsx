import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SelectedFilter } from '../types/common';

interface FilterTagProps {
  filter: SelectedFilter;
  remove: (filter: SelectedFilter) => void;
}

const FilterTag = ({ filter, remove }: FilterTagProps) => (
  <div
    key={`select-filter-${filter.category}-${filter.option}`}
    className="flex flex-row justify-between items-center my-2 mx-1 px-2 py-1 bg-gray-400 rounded-lg"
  >
    <span className="text-sm text-white font-medium">{filter.option}</span>
    <FontAwesomeIcon
      className="ml-2"
      width={16}
      height={16}
      icon={faXmark as IconProp}
      onClick={() => remove(filter)}
    />
  </div>
);

export default FilterTag;
