import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMeteor } from "@fortawesome/free-solid-svg-icons";

import EmailSignup from "../components/EmailSignup";
import VoyagerCharacters from "../components/VoyagerCharacters";
import RoadmapTLDR from "../components/RoadmapTLDR";
import FAQList from "../components/FAQList";

import voyagersImage from "../public/voyagers-main-white.svg";
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

      <div className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] w-full opacity-20 bg-black z-30"></div>

      <section className="px-4 md:px-4 flex flex-col justify-center items-center mb-8 md:mb-24 xl:mb-72 text-center">
        <div className="mt-10 sm:mt-20 md:mt-12 lg:mt-16 md:flex-row-reverse flex flex-col items-center z-30">
          <div className="md:w-3/5">
            <h2 className="text-5xl md:text-8xl mb-5 text-white font-medium drop-shadow-2xl">
              <span>Become</span> a member of the{" "}
              <span className="text-nexusGreen">Voyager</span> space mission
            </h2>
            <p className="text-md text-astromapGrayText font-raleway mb-5">
              Unforgettable adventures await you during the flight! Find friends
              and develop together creating, buying and selling NFTs collection!
            </p>
          </div>
          <div className="md:w-2/5">
            <Image alt="Nexus Voyagers" src={voyagersImage} />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-0 mb-8 lg:mt-12">
        <div className="pb-6 lg:bg-[url('/mission-bg.svg')] lg:bg-no-repeat lg:bg-center lg:bg-contain relative lg:p-20 border  border-calloutBorderGreen bg-nexusDarkBg rounded-calloutSection lg:border-0 lg:bg-transparent text-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-80 md:w-1/3 relative">
              <div className="p-5 lg:p-0">
                <Image src={nexusMissionImage} alt="Nexus Mission" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12 md:pr-6">
              <h2 className="text-white uppercase font-bold text-5xl mb-7 px-6 md:px-0">
                The Nexus Voyagers mission
              </h2>
              <div className="text-astromapGrayText text-lg px-6 md:px-0">
                <div className="pr-6">
                  <p className="mb-5">
                    To terraform Web3. An ecosystem cultivated by developers,
                    artists, enthusiasts, and investors. A Solarpunk utopia
                    powered by BeYu Labs and driven by radical optimism and
                    sustainability.
                  </p>
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
                  <p className="uppercase font-medium mb-5">
                    Bridging the gap between dream and reality, virtual and
                    real, we build a regenerative vision of the future.
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
                    className="mb-6 md:mb-0 cursor-not-allowed flex flex-row rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 disabled:opacity-50 m-auto"
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

      <section className="min-h-screen mb-40 px-4 pt-8 sm:pt-16 flex flex-col justify-center items-center">
        <div className="bg-[url('/astromap-line.svg')] bg-no-repeat bg-contain w-full bg-center">
          <h2 className="text-white font-semibold text-6xl drop-shadow-xl mb-12 text-center">
            Astromap
          </h2>
          <RoadmapTLDR />
          <div className="flex-row justify-center flex">
            <button
              disabled
              className="w-full cursor-not-allowed rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen py-4 text-xl disabled:opacity-50"
            >
              Explore Astromap
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 mb-28 mt-4 md:mt-10">
        <div className="pt-14 pb-14 bg-nexusDarkBg bg-[url('/boarding-pass-ellipsis.svg')] bg-right-bottom bg-no-repeat relative border border-calloutBorderGreen rounded-calloutSection text-center">
          <div className="w-36 absolute -top-4 right-0 -mt-6 -mr-12">
            <Image alt="Planet icon" src={planetSVG} layout="responsive" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-80 md:w-1/3 relative">
              <h2 className="text-white uppercase font-bold text-5xl mb-7 px-6 md:px-0">
                Boarding pass
              </h2>
            </div>
            <div className="md:w-2/3 md:pl-12 md:pr-6">
              <div className="md:absolute md:scale-110 md:-bottom-4 md:-left-4 lg:-bottom-64">
                <Image src={nexusTicketsImage} alt="Boarding Pass" />
              </div>
              <div className="text-astromapGrayText text-lg px-6 md:px-0">
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

                <button className="rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
                  Get it
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <VoyagerCharacters />
      </section>

      <section className="w-5/6 md:w-4/6 mx-auto mb-12 md:mb-32">
        <FAQList />
      </section>
    </>
  );
};

export default Mint;
