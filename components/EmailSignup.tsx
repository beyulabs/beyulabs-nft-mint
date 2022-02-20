import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  faPalette,
  faScrewdriverWrench,
  faBriefcase,
  faBinoculars,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import beyuLabs from "../public/beyulabs-logo.png";

import { EmailSignupCharacterTypes } from "../types/common";
import CharacterSelect from "./CharacterSelect";

export const characterTypes: EmailSignupCharacterTypes[] = [
  {
    id: 1,
    name: "Engineer",
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faScrewdriverWrench}
      />
    ),
  },
  {
    id: 2,
    name: "Artist",
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faPalette}
      />
    ),
  },
  {
    id: 3,
    name: "Entrepreneur",
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faBriefcase}
      />
    ),
  },
  {
    id: 4,
    name: "Collector",
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faBinoculars}
      />
    ),
  },
  {
    id: 5,
    name: "Investor",
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faEthereum}
      />
    ),
  },
];

const EmailSignup = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characterTypes[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log("data", data);
    console.log("e", e);
  };

  const onError = (errors, e) => {
    console.log("errors", errors);
    console.log("e", e);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full sm:max-w-3/4">
        <div className="bg-stone-50 rounded-xl max-w-xl w-full space-y-8 py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              width={175}
              height={175}
              src={beyuLabs}
              alt="BeYu Labs logo"
            />
            <h2 className="text-center text-3xl font-medium text-gray-900 mb-8">
              Get news from the lab...
            </h2>
            <div className="px-8">
              <p className="leading-loose">
                Subscribe to our newsletter to learn more about our upcoming NFT
                drop and see how we&apos;re building a web3 community for
                entrepreneurs.
              </p>
            </div>
          </div>
          <form
            className="mt-8"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="mb-6">
              <div className="rounded-md shadow-sm -space-y-px mb-8">
                <div className="flex flex-row mb-4">
                  <div className="w-1/2 mr-2">
                    <label htmlFor="email-address" className="sr-only">
                      First name
                    </label>
                    <input
                      {...register("firstName")}
                      id="first-name"
                      name="firstName"
                      type="firstName"
                      autoComplete="firstName"
                      className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="First name"
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label htmlFor="email-address" className="sr-only">
                      Last name
                    </label>
                    <input
                      {...register("lastName")}
                      id="last-name"
                      name="lastName"
                      type="lastName"
                      autoComplete="lastName"
                      className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Last name"
                      aria-invalid={errors.lastName ? "true" : "false"}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
              </div>

              <div>
                <CharacterSelect
                  selectedCharacter={selectedCharacter}
                  setSelectedCharacter={setSelectedCharacter}
                />
              </div>

              {errors && errors.email && (
                <div className="mt-0 px-1 text-red-400">
                  <span className="text-sm">An email is required.</span>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailSignup;
