import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import EmailSignup from "../components/EmailSignup";
import MiniTeam from "../components/MiniTeam";
import BackstoryTLDR from "../components/BackstoryTLDR";
import RoadmapTLDR from "../components/RoadmapTLDR";
import FAQList from "../components/FAQList";

import voyagersImage from "../public/voyagers-main.svg";

const Mint: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-visible"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-y-visible shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="py-2 px-4 absolute right-0">
                  <FontAwesomeIcon
                    className="text-gray-500 ml-2 text-xl cursor-pointer"
                    icon={faXmark}
                    onClick={() => setOpen(false)}
                  />
                </div>
                <EmailSignup />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <section className="flex flex-col justify-center items-center">
        <div className="my-20 flex flex-row items-center">
          <div className="w-3/5">
            <h2 className="text-8xl mb-10 text-white font-medium drop-shadow-2xl">
              <span>Become</span> a member of the{" "}
              <span className="text-nexusGreen">Voyager</span> space mission
            </h2>
            <p className="text-nexusGrayText">
              Unforgettable adventures await you during the flight! Find friends
              and develop together creating, buying and selling NFTs collection!
            </p>
          </div>
          <div className="w-2/5">
            <Image alt="Nexus Voyagers" src={voyagersImage} />
          </div>
        </div>

        {/* <button
            className="bg-white mb-4 px-8 py-4 rounded-lg capitalize font-semibold max-w-xs shadow-lg hover:shadow-xl hover:bg-gradient-to-r  hover:from-violet-600 hover:to-violet-400 hover:text-white"
            onClick={() => setOpen(true)}
          >
            Get the newsletter
          </button> */}
      </section>
      <section className="min-h-screen bg-[url('/stars.jpg')] bg-blend-multiply bg-gray-600 bg-bottom bg-cover flex flex-col justify-center items-center">
        <BackstoryTLDR />
      </section>
      <section className="min-h-screen px-8 pt-16 pb-8 bg-violet-200">
        <div className="lg:m-auto lg:max-w-screen-lg">
          <h2 className="text-6xl font-semibold drop-shadow-xl mb-12 text-center">
            Team
          </h2>
          <MiniTeam />
        </div>
      </section>
      <section className="min-h-screen px-4 pt-16 flex flex-col justify-center items-center">
        <h2 className="text-white font-semibold text-6xl drop-shadow-xl mb-12 text-center">
          Astromap
        </h2>
        <div className="bg-[url('/astromap-line.svg')] bg-no-repeat w-full bg-center">
          <RoadmapTLDR />
        </div>
      </section>
      <section className="w-4/6 mx-auto mb-32">
        <FAQList />
      </section>
    </>
  );
};

export default Mint;
