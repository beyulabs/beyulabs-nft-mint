// import { ReactNode, useState } from "react";
// import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Disclosure } from "@headlessui/react";

import { faqs } from "../utils/constants";
import { FAQProps } from "../types/common";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// import s from "./Spoiler.module.scss";
// import { SpoilerPlus, SpoilerMinus } from "./Icons";
//
// interface SpoilerProps {
//   title: string;
//   children?: ReactNode;
//   className?: string;
// }
//
// const Spoiler = ({ title, children, className }: SpoilerProps) => {
//   const [activeSpoiler, setActiveSpoiler] = useState<boolean>(false);
//
//   const spoilerToggle = () => {
//     setActiveSpoiler((prev) => !prev);
//   };
//
//   return (
//     <div
//       className={`py-6 px-9 mb-5 rounded-xl bg-nexusBlack w-faqField ml-96 -mr-32 ${
//         activeSpoiler ? "border border-nexusGreen" : ""
//       }`}
//     >
//       <div
//         className={cn(
//           "flex flex-row justify-between w-full text-left",
//           s.spoiler__head,
//           {
//             [s.spoiler__head__active]: activeSpoiler,
//           },
//           className,
//           "spoiler__head"
//         )}
//         onClick={spoilerToggle}
//       >
//         <span className="pr-2 font-bold text-2xl">{title}</span>
//         <span className={cn("text-nexusGreen", s.icon)}>
//           {!activeSpoiler ? <SpoilerPlus /> : <SpoilerMinus />}
//         </span>
//       </div>
//       <div
//         className={cn(
//           "text-gray-400 font-normal text-lg w-faqAnswer",
//           s.spoiler__text,
//           {
//             [s.spoiler__text__active]: activeSpoiler,
//           }
//         )}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={`py-6 px-9 mb-5 rounded-xl bg-nexusBlack w-faqField ml-96 -mr-32 ${
            open ? "border border-nexusGreen" : "border border-nexusBlack"
          }`}
        >
          <div
            className={`flex flex-row text-white text-xl md:text-2xl font-bold justify-between ${
              open ? "mb-6" : ""
            }`}
          >
            <Disclosure.Button className="w-full">
              <div className="flex flex-row justify-between w-full text-left">
                <span className="pr-2 font-bold text-2xl">{question}</span>
                <span className="text-nexusGreen">
                  {open ? (
                    <FontAwesomeIcon icon={faMinus as IconProp} width={24} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus as IconProp} width={24} />
                  )}
                </span>
              </div>
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="text-gray-400 font-normal text-lg w-faqAnswer">
            {answer}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

const FaqItem = () => {
  return faqs.map((faq, index) => (
    <FAQ key={`faq-${index}`} answer={faq.answer} question={faq.question} />
    // <Spoiler key={`faq-${index}`} title={faq.question}>
    //   {faq.answer}
    // </Spoiler>
  ));
};

const FAQList = () => {
  return (
    <>
      <h2 className="text-center text-5xl mb-20 text-white font-bold -ml-44 mr-80">
        FAQ
      </h2>
      {FaqItem()}
    </>
  );
};

export default FAQList;
