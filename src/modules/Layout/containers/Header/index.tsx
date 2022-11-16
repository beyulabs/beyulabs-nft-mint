import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SocialIcons from '@components/SocalIcons/SocialIcons';

import { Button } from '@components/Button/button';
import { Coins, Wallet } from '@components/Icons/Icons';
import cn from 'classnames';
import useMediaQuery from '@modules/Layout/hooks/useMediaQuery';
import { ethers } from 'ethers';

import { routes } from '@utils/constants';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { getContract, connect, updateAccount } from '../../../../utils/redux/blockchain/blockchainActions';
import { NavRoute } from '../../../../types/common';
import { selectAccountState, setConnectedAccount, setLoading, failedConnection } from '../../../../utils/redux/blockchain/blockchainReducer';
import CONTRACT from '../../../../utils/redux/contractInfo/contractInfo.json';
import abi from '../../../../utils/redux/contractInfo/abi.json';

import s from './Header.module.scss';
import logo from "../../../../../public/nexus-voyagers-logotype.png"

declare let window: any;

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isTablet = useMediaQuery(1200);
  const nextRouter = useRouter();
  const [activeNav, setActiveNav] = useState<boolean>(false);

  const dispatch = useDispatch()
  const account = useSelector(selectAccountState)

  const[pubCost, setPubCost] = useState(0);
  const[preCost, setPreCost] = useState(0);
  const[max, setMax] = useState(0);
  const[amount, setAmount] = useState(1)
  const[pubsale, setPubSale] = useState();
  const[presale, setPreSale] = useState();
  const[modal, openModal] = useState(false);

  const getAccounts = async () => {
    const { ethereum } = window;

    const accountsConnected = await ethereum.request({ method: 'eth_accounts' });
    return accountsConnected;
  };

  const setConnectedAccountMeth = async () => {
    const accounts = await getAccounts()
    if (accounts.length > 0) {
      const contr = getContract();
      dispatch(setConnectedAccount({account: accounts[0], smartContract: contr}));
    }
  };

  const fetchInfo = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT.address, abi, signer);

    const globprice = await contract.CREW_MINT_PRICE();
    const preprice = await contract.FOUNDING_CREW_MINT_PRICE();
    const maxperw = await contract.MAX_TOKEN_PER_WALLET();
    const preboarding = await contract.preboarding();
    const generalBoarding = await contract.generalBoarding();

    setPubCost(Number(globprice.toString()));
    setPreCost(Number(preprice.toString()));
    setMax(maxperw.toString())
    setPubSale(generalBoarding);
    setPreSale(preboarding);
  };

  const handleConnection = async() =>{
    const { ethereum } = window;
    dispatch(setLoading());
    let result = await connect()
    if(result.error == ""){
      dispatch(
        setConnectedAccount({
            account: result.account,
            smartContract: result.contract
        })
      );
      ethereum.on('accountsChanged', (accounts: any) => {
        updateAccount(accounts[0], getContract());
      });
    }
    else dispatch(failedConnection(result?.error));
  }

  const increment = () =>{
    setAmount(amount + 1)
  }

  const decrement = () =>{
    if(amount > 1) setAmount(amount - 1)
  }

  const mint = async() =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT.address, abi, signer);

    if(presale){
      contract.preMint(
        amount,
        { value: String(amount * preCost) }
      )
    }
    else if(pubsale){
      contract.mint(
        amount,
        { value: String(amount * pubCost) }
      )
    }
  }

  useEffect(() => {
    setConnectedAccountMeth();
    fetchInfo();
  }, [account]);

  const SwitchLightMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const ToggleThemeMode = () => (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a onClick={SwitchLightMode} className={s.ToggleTheme}>
        {theme === "light" ? (
          <img src={"/dark-mode-page.svg"} alt="Theme" width="26" height="26" />
        ) : (
          <img
            src={"/light-mode-page.svg"}
            alt="Theme"
            width="26"
            height="26"
          />
        )}
        <span>
          {theme === "light" ? <span>Dark </span> : <span>Light </span>}
          <span>mode</span>
        </span>
      </a>
    </>
  );

  const menu = (
    <div className={isTablet ? "container" : ""}>
      <div className={s.menu}>
        <div className={s.block}>
          <h5>Menu</h5>
          <div className={s.nav}>
            <ul className={s.nav__links}>
              {routes.map((route: NavRoute) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={`route-${route.path}`}
                  className={nextRouter.pathname === route.path ? s.active : ""}
                  onClick={() => setActiveNav(false)}
                >
                  {route.enabled ? (
                    <Link href={route.path}>{route.title}</Link>
                  ) : (
                    route.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className={s.block}>
          <h5>Social</h5>
          <SocialIcons />
        </div>
        <ToggleThemeMode />
        <hr />
        <div className={s.buttons}>
          <Button 
            text="Mint" 
            color="green" 
            icon={<Coins />} 
            disabled = { !account }
            onClick = {
              () => openModal(true)
            }
          />
          <Button
            text={!account ? "Connect wallet" : "Connected"}
            color="transparent"
            icon={<Wallet />}
            disabled = { account }
            onClick={handleConnection}
          />
        </div>
      </div>
    </div>
  );

  const navIconToggle = () => {
    setActiveNav((prev) => !prev);
  };

  return (
    <header className={cn(s.header, activeNav && s.openNav)}>
      <div className="container">
        <div className={s.header__row}>
          <div className="logo">
            {theme === "light" && (
              <Link href="/">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <a onClick={() => setActiveNav(false)}>
                  <img
                    src={"/nexus-voyagers-logotype-green-dark.svg"}
                    alt="BeYu Labs logo"
                    width="160"
                    height="47"
                  />
                </a>
              </Link>
            )}
            {theme === "dark" && (
              <Link href="/">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <a onClick={() => setActiveNav(false)}>
                  <img
                    src={"/nexus-voyagers-logotype-green-white.svg"}
                    alt="BeYu Labs logo"
                    width="160"
                    height="47"
                  />
                </a>
              </Link>
            )}
          </div>
          {isTablet ? (
            // eslint-disable-next-line jsx-a11y/no-redundant-roles,react/button-has-type
            <button
              className={cn(s.nav_icon, activeNav && s.nav_icon_active)}
              onClick={navIconToggle}
              role="button"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
              <span />
            </button>
          ) : (
            menu
          )}
        </div>
      </div>
      <div className={cn(s.mobileNav, activeNav && s.active)}>{menu}</div>
      {
        modal &&
        <div className={cn(s.modal)}>
          <div className={cn(s.modalComponent)}>
            <img src={logo.src} className={cn(s.modalLogo)}/>
            <p className={cn(s.modalText)}>1 NFT: {presale ? ethers.utils.formatEther(String(preCost))  : ethers.utils.formatEther(String(pubCost))} ETH</p>
            <p className={cn(s.modalText)}>Max per wallet: {max}</p>
            <div className={cn(s.amountContainer)}>
              <div className={cn(s.amountButton)} onClick={decrement}>-</div>
              <p className={cn(s.amount)}>{amount}</p>
              <div className={cn(s.amountButton)} onClick={increment}>+</div>
            </div>

            <div 
              className={cn(s.mintButton)}
              onClick={mint}
            >
              Mint
            </div>
            <div className={cn(s.close)} onClick={() => openModal(false)}>X</div>
          </div>
        </div>
      }
    </header>
  );
};

export default Header;
