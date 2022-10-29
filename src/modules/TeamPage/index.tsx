import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import HtmlMeta from '@components/HtmlMeta';
import useMediaQuery from '@modules/Layout/hooks/useMediaQuery';
import { useTheme } from 'next-themes';
import TeamList from '@modules/TeamPage/components/TeamList/intex';
import s from './TeamPage.module.scss';

const TeamPage = () => {
  const isTablet = useMediaQuery(992);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          s.team,
          theme === 'light' && s.light,
          theme === 'dark' && s.dark
        )}
      >
        <div className="container">
          <HtmlMeta title="Team" />
          <TeamList />
          {/* <div className={s.partners}> */}
          {/*  <h2>Partners:</h2> */}
          {/*  <div className={s.cards}> */}
          {/*    <div className={cn(s.card, theme === 'light' && s.light)}> */}
          {/*      <img src={'/WeDream.png'} alt="" /> */}
          {/*      <div className={s.text}> */}
          {/*        <h3>WeDream</h3> */}
          {/*        <p> */}
          {/*          <a href="https://www.wedream.world/"> */}
          {/*            Link to the project website */}
          {/*          </a> */}
          {/*        </p> */}
          {/*      </div> */}
          {/*    </div> */}
          {/*    <div className={cn(s.card, theme === 'light' && s.light)}> */}
          {/*      {isTablet ? ( */}
          {/*        <img src={'/team_partner_2.png'} alt="" /> */}
          {/*      ) : ( */}
          {/*        <img src={'/team_partner_2_desktop.png'} alt="" /> */}
          {/*      )} */}
          {/*      <div className={s.text}> */}
          {/*        <h3>ThinkNFT</h3> */}
          {/*        <p> */}
          {/*          <a href="https://thinknft.art/"> */}
          {/*            Link to the project website */}
          {/*          </a> */}
          {/*        </p> */}
          {/*      </div> */}
          {/*    </div> */}
          {/*  </div> */}
          {/* </div> */}
        </div>
        <div className="container" id="topSpacing">
          <h1>
            <span className={'green'}>Join</span> the Movement{' '}
          </h1>
          <ul className="image-gallery">
            <li>
              <img src="/partnerlogos1.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos2.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos3.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos4.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos5.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos7.jpg" alt="" />
            </li>
            <li>
              <img src="/partnerlogos8.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
