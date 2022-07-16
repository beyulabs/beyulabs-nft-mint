import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";

import { faqs } from "../constants";
import { FAQProps } from "../types/common";

const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={`py-6 px-9 mb-5 rounded-xl bg-nexusBlack ${
            open ? "border border-nexusGreen" : ""
          }`}
        >
          <div
            className={`flex flex-row text-white text-xl md:text-2xl font-bold justify-between ${
              open ? "mb-6" : ""
            }`}
          >
            <Disclosure.Button className="w-full">
              <div className="flex flex-row justify-between w-full text-left">
                <span className="pr-2">{question}</span>
                <span className="text-nexusGreen">
                  {open ? (
                    <FontAwesomeIcon icon={faMinus} width={24} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} width={24} />
                  )}
                </span>
              </div>
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="text-gray-500">
            {answer}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

const FAQList = () => {
  return (
    <>
      <h2 className="text-center text-3xl mb-8 text-white font-semibold md:text-4xl">
        FAQs
      </h2>
      {faqs.map((faq, index) => {
        return (
          <FAQ
            key={`faq-${index}`}
            answer={faq.answer}
            question={faq.question}
          />
        );
      })}
    </>
  );
};

export default FAQList;
