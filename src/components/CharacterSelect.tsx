import { Dispatch, Fragment, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { faCheck, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import { EmailSignupCharacterTypes } from "../types/common";
import { characterTypes } from "./EmailSignup";

interface CharacterSelectProps {
  selectedCharacter: EmailSignupCharacterTypes;
  setSelectedCharacter: Dispatch<SetStateAction<EmailSignupCharacterTypes>>;
}

const CharacterSelect = ({
  selectedCharacter,
  setSelectedCharacter,
}: CharacterSelectProps) => {
  return (
    <Listbox value={selectedCharacter} onChange={setSelectedCharacter}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Label className="text-sm text-slate-500">
              Optional
            </Listbox.Label>
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {selectedCharacter.icon}
                <span className="block truncate">{selectedCharacter.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FontAwesomeIcon
                  className="ml-2"
                  width={16}
                  height={16}
                  icon={faSort}
                />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {characterTypes.map((character) => {
                  return (
                    <Listbox.Option
                      key={character.id}
                      value={character}
                      className="cursor-default select-none relative py-2 pl-3 pr-6 hover:bg-blue-100 hover:cursor-pointer"
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex justify-between items-center">
                            <div
                              className={classNames(
                                selected
                                  ? "font-semibold text-blue-500"
                                  : "font-normal",
                                "flex ml-3 truncate items-center"
                              )}
                            >
                              <span>{character.icon}</span>
                              <span>{character.name}</span>
                            </div>

                            {selected && (
                              <FontAwesomeIcon
                                width={16}
                                height={16}
                                icon={faCheck}
                                className={classNames(
                                  selected
                                    ? "font-semibold text-blue-500"
                                    : "font-normal",
                                  "ml-2"
                                )}
                              />
                            )}
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  );
                })}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CharacterSelect;
