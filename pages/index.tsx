import { Fragment, useRef, useState } from "react";
import type { NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import EmailSignup from "../components/EmailSignup";

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

      <section className="h-screen flex flex-col justify-center items-center px-8">
        <h2 className="text-8xl mb-14 text-white font-medium drop-shadow-2xl">
          BenNFTs
        </h2>
        <div className="flex flex-col">
          <button
            className="bg-white mb-4 px-8 py-4 rounded-lg capitalize font-semibold max-w-xs shadow-lg hover:shadow-xl hover:bg-gradient-to-r  hover:from-violet-600 hover:to-violet-400 hover:text-white"
            onClick={() => setOpen(true)}
          >
            Get the newsletter
          </button>
          <button
            disabled
            className="bg-white px-8 py-4 rounded-lg capitalize font-semibold max-w-xs shadow-lg hover:shadow-xl hover:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-75 disabled:text-gray-400"
          >
            Connect Wallet
          </button>
        </div>
      </section>
      <section className="h-screen bg-yellow-200">
        <h2>Backstory</h2>
      </section>
      <section className="h-screen bg-emerald-200">
        <h2>Roadmap</h2>
      </section>
    </>
  );
};

export default Mint;
