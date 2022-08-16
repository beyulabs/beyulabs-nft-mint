import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { beyuLabsTwitterURL, discordInviteURL } from '../utils/constants';

const EmailSignupExists = () => (
  <>
    <div className="mb-8">
      <h2 className="text-3xl font-medium text-gray-900 mb-4">
        You are already subscribed!
      </h2>
      <p>
        Make sure to check your inbox for the email we sent to verify your
        identity. In the meantime, follow{' '}
        <a
          href={beyuLabsTwitterURL}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-teal-500 font-semibold"
        >
          BeYu Labs
        </a>{' '}
        on Twitter and join our{' '}
        <a
          href={discordInviteURL}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-teal-500 font-semibold"
        >
          Discord community
        </a>
        .
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
              icon={faTwitter as IconProp}
            />
          </a>
        </li>
        <li className="mx-2">
          <a href={discordInviteURL} target="_blank" rel="nofollow noreferrer">
            <FontAwesomeIcon
              className="text-teal-500 drop-shadow-lg hover:scale-110 hover:rotate-12"
              width={32}
              height={32}
              icon={faDiscord as IconProp}
            />
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default EmailSignupExists;
