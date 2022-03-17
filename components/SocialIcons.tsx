import Image from "next/image";
import classNames from "classnames";

import { beyuSocialIcons } from "../constants";

const SocialIcons = () => {
  return (
    <ul className="flex">
      {beyuSocialIcons.map((icon) => {
        const liClass = classNames("m-2 sm:m-2 md:m-4", {
          "opacity-50 hover:cursor-not-allowed": !icon.enabled,
          "origin-center hover:scale-150 hover:rotate-12": icon.enabled,
        });
        const aClass = classNames({
          "hover:cursor-not-allowed": !icon.enabled,
        });

        return (
          <li key={`icon-${icon.name}`} className={liClass}>
            <a
              href={icon.url}
              rel="nofollow noreferrer"
              target="_blank"
              className={aClass}
            >
              <Image
                src={icon.image}
                alt={`${icon.name} logo`}
                width={28}
                height={28}
                className="hover:shadow"
                quality={100}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
