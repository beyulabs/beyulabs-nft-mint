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
import CalloutSection from "../components/CalloutSection";

import voyagersImage from "../public/voyagers-main.svg";
import nexusMissionImage from "../public/nexus-mission.svg";
import nexusTicketsImage from "../public/nexus-tickets.svg";
import coinsSVG from "../public/coins.svg";

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

      <CalloutSection
        title="The Nexus Voyagers mission"
        image={<Image src={nexusMissionImage} alt="Nexus Mission" />}
        description={
          <>
            <p className="mb-5">
              To terraform Web3. An ecosystem cultivated by developers, artists,
              enthusiasts, and investors. A Solarpunk utopia powered by BeYu
              Labs and driven by radical optimism and sustainability.
            </p>
            <p className="mb-5">
              A collection of 10,119 crew members, primed for the genesis
              mission launch. On this voyage, crew members will have access to
              epic shared experiences, meaningful collabs, one of a kind NFT
              drops, and a future built for the community over time. With the
              focus on empowering Web3 entrepreneurship the ecosystem will fill
              the underlying gaps on contribution with incentivized exchange of
              utility. Each of us will have a role to play.
            </p>
            <p className="uppercase font-medium mb-5">
              Bridging the gap between dream and reality, virtual and real, we
              build a regenerative vision of the future.
            </p>
            <p className="uppercase bold mb-5">
              Are you mission ready?{" "}
              <span className="text-nexusGreen">Join now!</span>
            </p>
            <button className="flex flex-row rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
              <Image alt="Coins" src={coinsSVG} />
              <span className="inline-block ml-2">Mint</span>
            </button>
          </>
        }
      />

      <section className="min-h-screen mb-20 px-4 pt-16 flex flex-col justify-center items-center">
        <div className="bg-[url('/astromap-line.svg')] bg-no-repeat w-full bg-center">
          <h2 className="text-white font-semibold text-6xl drop-shadow-xl mb-12 text-center">
            Astromap
          </h2>
          <RoadmapTLDR />
          <div className="flex flex-row justify-center">
            <button className="rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-9 py-5 text-xl">
              Explore Astromap
            </button>
          </div>
        </div>
      </section>

      <CalloutSection
        title="Boarding pass"
        image={<Image src={nexusTicketsImage} alt="Boarding Pass" />}
        description={
          <>
            <p className="mb-5 uppercase font-medium">
              The Boarding Passes are separated by their contribution to the new
              world of web3. Each character type will have a unique challenge in
              order to ensure you align with that character,and that you will be
              able to mint them during our presale.
            </p>
            <p className="mb-5">
              Keep your eyes on the #announcements and #boarding-pass channels
              for these challenges, they will essentially guarantee your seat on
              the rocket to the new world. These challenges will be presented
              sporadically and closed off in short sprints of time, so stay
              active in the Discord to make sure you lock down your respective
              boarding pass and don’t get left behind in the deteriorating space
              of Web2.
            </p>

            <button className="rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
              Get it
            </button>
          </>
        }
      />

      <section className="min-h-screen px-8 pt-16 pb-8 bg-violet-200">
        <VoyagerCharacters />
      </section>

      <section className="w-4/6 mx-auto mb-32">
        <FAQList />
      </section>
    </>
  );
};

export default Mint;
