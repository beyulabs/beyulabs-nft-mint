import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "../types/common";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";

import voyagerArrow from "../public/voyager-card-arrow.svg";

interface VoyagerCardProps {
  voyager: TeamMember;
}

const MeetTeamMember = ({ voyager }: VoyagerCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="mx-4 relative cursor-pointer rounded-xl">
      <div
        className="w-80 rounded-xl mb-6 p-4 relative sm:hover:scale-110 sm:hover:bg-nexusGradientGreen lg:bg-none transition ease-in-out"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="mb-5 rounded-xl overflow-hidden">
          <Image
            alt={voyager.nexusName}
            src={voyager.image}
            width={255}
            height={255}
            layout="responsive"
          />
        </div>
        <h3 className="text-center text-2xl text-white font-bold mb-2">{voyager.nexusName}</h3>
        <div className="justify-center items-center">
        <span className={`w-fit m-auto flex rounded-lg text-sm justify-center inline-block py-2.5 px-4 bg-nexusGreen text-white ${isHover ? "sm:bg-white sm:text-nexusGradientGreen" : "bg-nexusGreen text-white"
          }`}>
          {voyager.irlName}
        </span>
        </div>
        {voyager.id === '13' ? null : (
          <div className={`flex flex-row justify-center mt-4 ${isHover ? "invert" : ""}`}>
            {voyager.id === '11' ? null : (
              <div className="mr-5">
                <a href="https://www.linkedin.com">
                  <Image alt="linkedin" src={Linkedin} />
                </a>
              </div>
            )
            }
            {isHover && voyager.id === '2' ? (
              <div className="flex flex-row">
                <div className="mr-5">
                <a href="https://www.twitter.com">
                  <Image alt="twitter" src={Twitter} />
                </a>
                </div>
                <a href="https://www.instagram.com">
                <Image alt="instagram" src={Instagram} />
              </a>
              </div>
            ) : null}
            {voyager.id === '2' ? null : (
              <a href="https://www.instagram.com">
                <Image alt="instagram" src={Instagram} />
              </a>
            )
            }
          </div>
        )
        }
        {isHover && (
          <div className="text-center z-10">
            <p className={`font-bold mt-3 ${isHover ? "text-cardBorder" : ""}`}>Skillset:</p>
            <ul className="mb-4 text-white text-sm">
              <li>Entrepreneur</li>
              <li>Networker</li>
              <li>Project manager/Engineer</li>
              <li>Scateboarder</li>
              <li>loves overprices jpegs and metal shows</li>
            </ul>
          </div>
        )}
        {!isHover && (
          <div className="lg:hidden sm: flex flex-column justify-center items-center p-4">
            <p className="text-white">Read more</p>
            <Image alt="Arrow icon" src={voyagerArrow} width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetTeamMember;