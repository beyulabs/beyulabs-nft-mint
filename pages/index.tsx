import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import EmailSignup from "../components/EmailSignup";
import VoyagerCharacters from "../components/VoyagerCharacters";
import RoadmapTLDR from "../components/RoadmapTLDR";
import FAQList from "../components/FAQList";

import spacemanImage from "../public/spaceman.svg";
import voyagersImage from "../public/voyagers-main.svg";
import nexusMissionImage from "../public/nexus-mission.svg";
import nexusTicketsImage from "../public/nexus-tickets.svg";
import coinsSVG from "../public/coins.svg";
import planetSVG from "../public/planet.svg";

const Mint: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-visible"
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
                    width={24}
                    height={24}
                  />
                </div>
                <EmailSignup />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <section className="h-screen bg-[url('/landscape.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full bg-opacity-20 bg-black z-30"></div>
        <h1 className="text-white text-center text-6xl z-40 font-bold drop-shadow-xl px-4">
          Nexus Voyagers
        </h1>
      </section>

      <section className="min-h-screen px-2 flex flex-col justify-center items-center mb-8 md:mb-0 text-center lg:text-left lg:p-0 lg:h-fit lg:py-24 lg:mb-8">
        <div className="mt-10 flex flex-col items-center z-30 lg:flex-row lg:items-start lg:mt-0">
          <div className="px-2 md:px-6 lg:w-1/2">
            <h2 className="text-4xl md:text-6xl mb-5 text-white font-medium drop-shadow-2xl">
              <span className="highlight">Become</span> a member of the{" "}
              <span className="text-nexusGreen">Voyager</span> space{" "}
              <span className="highlight">mission</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:relative">
            <div className="lg:block lg:absolute lg:-top-12 lg:right-4 lg:scale-125 lg:p-4">
              <Image alt="Nexus Voyagers" src={voyagersImage} />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen mb-16 md:px-8 md:bg-[url('/mission-bg.svg')] md:bg-contain md:bg-no-repeat lg:py-56 lg:mb-16 lg:bg-contain lg:bg-center">
        <div className="py-24 bg-[url('/mobile-mission-bg.svg')] bg-no-repeat bg-center bg-cover relative text-center md:bg-none md:text-left lg:pb-0">
          <div className="w-36 absolute -left-8 -scale-x-100 md:hidden">
            <Image alt="Planet icon" src={planetSVG} layout="responsive" />
          </div>
          <div className="w-36 absolute right-0 -bottom-16 animate-spaceman">
            <Image alt="Nexus Spaceman" src={spacemanImage} />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline">
            <div className="w-80 md:w-1/3">
              <div className="md:w-full md:relative">
                <div className="-mt-5 md:absolute md:-top-12 md:-left-6 md:mt-0 lg:scale-05 lg:-top-28">
                  <Image src={nexusMissionImage} alt="Nexus Mission" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:ml-6 md:pt-8 md:pr-2 lg:pt-2">
              <h2 className="text-white uppercase font-bold text-3xl md:text-4xl mb-4 px-6 md:px-0">
                The Nexus Voyagers mission
              </h2>
              <div className="text-astromapGrayText text-base px-6 md:px-0">
                <div className="pr-6">
                  <p className="mb-5">
                    A collection of 10,119 crew members, primed for the genesis
                    mission launch. On this voyage, crew members will have
                    access to epic shared experiences, meaningful collabs, one
                    of a kind NFT drops, and a future built for the community
                    over time. With the focus on empowering Web3
                    entrepreneurship the ecosystem will fill the underlying gaps
                    on contribution with incentivized exchange of utility. Each
                    of us will have a role to play.
                  </p>
                  <p className="uppercase bold mb-5">
                    Are you mission ready?{" "}
                    <span
                      className="text-nexusGreen cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      Join now!
                    </span>
                  </p>
                  <button
                    disabled
                    className="text-xl mb-6 md:mb-0 cursor-not-allowed flex flex-row rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 disabled:opacity-50 m-auto"
                  >
                    <Image alt="Coins" src={coinsSVG} />
                    <span className="inline-block ml-2">Mint</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen mb-40 px-4 pt-8 flex flex-col justify-center items-center md:px-12">
        <div className="bg-[url('/astromap-line.svg')] bg-no-repeat bg-contain w-full bg-center lg:w-3/4">
          <h2 className="text-white font-semibold text-3xl uppercase drop-shadow-xl mb-12 text-center md:text-4xl">
            Astromap
          </h2>
          <RoadmapTLDR />
          <div className="flex-row justify-center flex">
            <button
              disabled
              className="w-full cursor-not-allowed rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen py-4 text-xl disabled:opacity-50 md:w-1/3"
            >
              Explore Astromap
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen px-6 mb-28 mt-4 md:px-8 lg:mb-52 lg:px-16">
        <div className="pt-14 pb-14 bg-nexusDarkBg bg-[url('/boarding-pass-ellipsis.svg')] bg-right-bottom bg-no-repeat relative border border-calloutBorderGreen rounded-calloutSection text-center md:py-8">
          <div className="w-36 absolute -top-4 right-0 -mt-6 -mr-12">
            <Image alt="Planet icon" src={planetSVG} layout="responsive" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-80 md:hidden">
              <h2 className="text-white uppercase font-bold text-3xl mb-5 px-6 md:text-4xl">
                Boarding pass
              </h2>
            </div>
            <div className="md:relative md:flex md:flex-row">
              <div className="md:w-1/3 md:relative">
                <div className="w-full md:absolute md:scale-125 md:top-8 md:-left-2 lg:-bottom-64">
                  <Image src={nexusTicketsImage} alt="Boarding Pass" />
                </div>
              </div>
              <div className="text-astromapGrayText text-sm px-6 md:text-left md:w-2/3 md:ml-8 md:px-2">
                <h2 className="text-white uppercase font-bold text-3xl mb-5 px-6 md:px-0">
                  Boarding pass
                </h2>
                <p className="mb-5 uppercase font-medium">
                  The Boarding Passes are separated by their contribution to the
                  new world of web3. Each character type will have a unique
                  challenge in order to ensure you align with that character,and
                  that you will be able to mint them during our presale.
                </p>
                <p className="mb-5">
                  Keep your eyes on the #announcements and #boarding-pass
                  channels for these challenges, they will essentially guarantee
                  your seat on the rocket to the new world. These challenges
                  will be presented sporadically and closed off in short sprints
                  of time, so stay active in the Discord to make sure you lock
                  down your respective boarding pass and don’t get left behind
                  in the deteriorating space of Web2.
                </p>

                <button className="text-xl rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
                  Get it
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen mb-20 lg:mb-36">
        <VoyagerCharacters />
      </section>

      <section className="min-h-screen w-5/6 md:w-5/6 mx-auto mb-12 md:mb-24">
        <FAQList />
      </section>
    </>
  );
};

export default Mint;
