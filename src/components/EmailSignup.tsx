import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import {
  faPalette,
  faScrewdriverWrench,
  faBriefcase,
  faBinoculars,
  faXmark,
  faListSquares,
} from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { EmailSignupCharacterTypes } from '../types/common';
import CharacterSelect from './CharacterSelect';

import EmailSignupSuccess from './EmailSignupSuccess';
import EmailSignupFailure from './EmailSignupFailure';
import EmailSignupExists from './EmailSignupExists';

const beyuLabs = '/beyu-labs-logotype-bw.png';

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
  persona: string | null;
}

enum AlertType {
  error = 'error',
  success = 'success',
  exists = 'exists',
}

export const characterTypes: EmailSignupCharacterTypes[] = [
  {
    id: 0,
    name: 'Select one...',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faListSquares as IconProp}
      />
    ),
  },
  {
    id: 1,
    name: 'Engineer',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faScrewdriverWrench as IconProp}
      />
    ),
  },
  {
    id: 2,
    name: 'Artist',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faPalette as IconProp}
      />
    ),
  },
  {
    id: 3,
    name: 'Entrepreneur',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faBriefcase as IconProp}
      />
    ),
  },
  {
    id: 4,
    name: 'Collector',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faBinoculars as IconProp}
      />
    ),
  },
  {
    id: 5,
    name: 'Investor',
    icon: (
      <FontAwesomeIcon
        className="mr-2"
        width={16}
        height={16}
        icon={faEthereum as IconProp}
      />
    ),
  },
];

const EmailSignup = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characterTypes[0]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<AlertType>(AlertType.error);

  const alertCn = classNames(
    'flex flex-row justify-between items-center text-sm mb-4 px-4 py-2 rounded border-2',
    {
      'bg-green-200 border-green-500':
        alertType === AlertType.success || alertType === AlertType.exists,
      'bg-red-200 border-red-500': alertType === AlertType.error,
    }
  );

  const { mutate: submitEmailForm } = useMutation(
    (data: EmailSignupSubmitPayload) =>
      axios
        .post('/api/mailchimp', data)
        .then((res) => {
          if (res.status === 201) {
            setAlertType(AlertType.success);
          } else if (res.status === 200) {
            setAlertType(AlertType.exists);
          }
        })
        .catch((err) => {
          setAlertType(AlertType.error);
        })
        .finally(() => {
          setShowAlert(true);
        })
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: EmailSignupFormValues) => {
    const { email, firstName, lastName } = data;

    const personaToSubmit =
      selectedCharacter.name === 'Select one...'
        ? 'General'
        : selectedCharacter.name;

    const payload: EmailSignupSubmitPayload = {
      email,
      first_name: firstName,
      last_name: lastName,
      persona: personaToSubmit,
      status: 'pending',
    };
    console.log('Payload to Mailchimp:', payload);

    submitEmailForm(payload);
  };

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onError = (errors: any, e: any) => {
    console.log('errors', errors);
    console.log('e', e);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full sm:max-w-3/4">
        <div className="bg-slate-100 rounded-xl max-w-xl w-full space-y-8 pt-4 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="m-auto w-3/4 mb-8">
              <Image
                src={beyuLabs}
                alt="BeYu Labs logo"
                objectFit="scale-down"
                className="drop-shadow-md"
              />
            </div>
            {!showAlert && (
              <>
                <h2 className="text-center text-3xl font-medium text-gray-900 mb-4">
                  News from the Lab
                </h2>
                <div className="px-4">
                  <p className="leading-snug">
                    Join us on our mission to empower web3 entrepreneurship.
                    Subscribe to stay up to date on our weekly events, upcoming
                    NFT drop and more.
                  </p>
                </div>
              </>
            )}
          </div>
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit as any, onError)}
          >
            {showAlert && (
              <>
                <div className={alertCn}>
                  {alertType === AlertType.error && (
                    <span className="font-bold">Error!</span>
                  )}
                  {alertType === AlertType.success ||
                    (alertType === AlertType.exists && (
                      <span className="font-bold">Success!</span>
                    ))}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer w-4"
                    width={16}
                    height={16}
                    icon={faXmark as IconProp}
                    onClick={() => setShowAlert(false)}
                  />
                </div>
                {alertType === AlertType.success && <EmailSignupSuccess />}
                {alertType === AlertType.exists && <EmailSignupExists />}
                {alertType === AlertType.error && <EmailSignupFailure />}
              </>
            )}
            {!showAlert && (
              <>
                <div className="mb-6">
                  <div className="rounded-md -space-y-px mb-4">
                    <div className="flex flex-row mb-4">
                      <div className="w-1/2 mr-2">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="email-address" className="sr-only">
                          First name
                        </label>
                        <input
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...register('firstName')}
                          id="first-name"
                          name="firstName"
                          type="firstName"
                          autoComplete="firstName"
                          /* eslint-disable-next-line max-len */
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="First name"
                          aria-invalid={errors.firstName ? 'true' : 'false'}
                        />
                      </div>
                      <div className="w-1/2 ml-2">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="email-address" className="sr-only">
                          Last name
                        </label>
                        <input
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...register('lastName')}
                          id="last-name"
                          name="lastName"
                          type="lastName"
                          autoComplete="lastName"
                          /* eslint-disable-next-line max-len */
                          className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Last name"
                          aria-invalid={errors.lastName ? 'true' : 'false'}
                        />
                      </div>
                    </div>
                    <div className="shadow-sm">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...register('email', {
                          required: true,
                        })}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        /* eslint-disable-next-line max-len */
                        className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        aria-invalid={errors.email ? 'true' : 'false'}
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
                    /* eslint-disable-next-line max-len */
                    className="group relative w-1/2 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailSignup;
