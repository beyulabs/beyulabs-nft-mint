import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { beyuLabsTwitterURL, discordInviteURL } from "../constants";

const EmailSignupSuccess = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-medium text-gray-900 mb-4">
          Something went wrong.
        </h2>
        <p className="mb-2">
          There was an issue setting up your subscription. Please contact
          support at{" "}
          <a
            href="mailto:team@beyulabs.io?subject=Help with newsletter subscription"
            className="text-teal-500 font-semibold"
          >
            team@beyulabs.io
          </a>{" "}
          for help.
        </p>
      </div>
      <div>
        <ul className="flex flex-row w-full justify-center">
          <li className="mx-2">
            <a
              href={beyuLabsTwitterURL}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <FontAwesomeIcon
                className="text-teal-500 drop-shadow-lg hover:scale-110 hover:rotate-12"
                width={32}
                height={32}
                icon={faTwitter}
              />
            </a>
          </li>
          <li className="mx-2">
            <a
              href={discordInviteURL}
              target="_blank"
              rel="nofollow noreferrer"
            >
              <FontAwesomeIcon
                className="text-teal-500 drop-shadow-lg hover:scale-110 hover:rotate-12"
                width={32}
                height={32}
                icon={faDiscord}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EmailSignupSuccess;
