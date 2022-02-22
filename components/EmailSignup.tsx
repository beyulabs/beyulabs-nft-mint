import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  faPalette,
  faScrewdriverWrench,
  faBriefcase,
  faBinoculars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import beyuLabs from "../public/beyulabs-logo.png";

import { EmailSignupCharacterTypes } from "../types/common";
import CharacterSelect from "./CharacterSelect";
import classNames from "classnames";

interface EmailSignupFormValues {
  email: string;
  firstName: string;
  lastName: string;
}

interface EmailSignupSubmitPayload {
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  persona?: string;
}

enum AlertType {
  error = "error",
  success = "success",
}

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
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<AlertType>(AlertType.error);

  const alertCn = classNames(
    "flex flex-row justify-between items-center text-sm mb-4 px-4 py-2 rounded border-2",
    {
      "bg-green-200 border-green-500": alertType === AlertType.success,
      "bg-red-200 border-red-500": alertType === AlertType.error,
    }
  );

  const { mutate: submitEmailForm } = useMutation(
    (data: EmailSignupSubmitPayload) => {
      return axios
        .post("/api/mailchimp", data)
        .then((res) => {
          if (res.status === 200) {
            setAlertType(AlertType.success);
          }
        })
        .catch((err) => {
          setAlertType(AlertType.error);
        })
        .finally(() => {
          setShowAlert(true);
        });
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: EmailSignupFormValues) => {
    const { email, firstName, lastName } = data;

    const payload: EmailSignupSubmitPayload = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      persona: selectedCharacter.name,
      status: "pending",
    };

    submitEmailForm(payload);
  };

  const onError = (errors: any, e: any) => {
    console.log("errors", errors);
    console.log("e", e);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full sm:max-w-3/4">
        <div className="bg-stone-50 rounded-xl max-w-xl w-full space-y-8 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
              <p className="leading-relaxed">
                Subscribe to our newsletter to learn more about our upcoming NFT
                drop and see how we&apos;re building a web3 community for
                entrepreneurs.
              </p>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            {showAlert && (
              <div className={alertCn}>
                {alertType === AlertType.error && (
                  <span className="font-bold">Error!</span>
                )}
                {alertType === AlertType.success && (
                  <span>
                    <span className="font-bold">Success!</span>
                    <span> Confirmation email sent.</span>
                  </span>
                )}
                <FontAwesomeIcon
                  className="ml-2 cursor-pointer"
                  width={16}
                  height={16}
                  icon={faXmark}
                  onClick={() => setShowAlert(false)}
                />
              </div>
            )}
            <div className="mb-6">
              <div className="rounded-md -space-y-px mb-6">
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
                <div className="shadow-sm">
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
                {errors && errors.email && (
                  <div className="mt-0 px-1 text-red-400">
                    <span className="text-sm">An email is required.</span>
                  </div>
                )}
              </div>

              <div>
                <CharacterSelect
                  selectedCharacter={selectedCharacter}
                  setSelectedCharacter={setSelectedCharacter}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-1/2 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
