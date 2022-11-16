import React from 'react';
import Image from 'next/image';

import s from './Footer.module.scss';

const Footer = () => {
  const NexusLogo = '/nexus-voyagers-logotype-white.png';
  const BeyuLogo = '/beyu-labs-logotype-white.png';

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__row}>
          <div className={s.logos}>
            <Image
              src={NexusLogo}
              width="160"
              height="47"
              alt="Nexus Voyagers logo"
            />
            <Image
              src={BeyuLogo}
              width="222"
              height="66"
              alt="BeYu Labs logo"
            />
          </div>
        </div>
      </div>
      <div className={s.copy}>Nexus Voyagers © {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
