import React, { useEffect } from "react";
import Head from "next/head";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useRouter } from "next/router";

import { NavRoutes } from "../types/common";

import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const nextRouter = useRouter();
  const isHome: boolean = nextRouter.pathname === "/";
  // const [connectedContract, setConnectedContract] = useState(null);

  // useEffect(() => {
  //   const connectWallet = async () => {
  //     const providerOptions = {
  //       walletconnect: {
  //         package: WalletConnectProvider, // required
  //         options: {
  //           infuraId: process.env.INFURA_ID, // required
  //         },
  //       },
  //     };

  //     const web3Modal = new Web3Modal({
  //       network: "rinkeby", // optional
  //       // cacheProvider: true, // optional
  //       disableInjectedProvider: true,
  //       providerOptions, // required
  //     });

  //     const instance = await web3Modal.connect();
  //     console.log("instance", instance);
  //     const provider = new ethers.providers.Web3Provider(instance);
  //     console.log("provider", provider);
  //     const signer = provider.getSigner();
  //     console.log("signer", signer);
  //   };
  //   connectWallet();
  // });

  return (
    <>
      <Head>
        <title>BeYu Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="min-h-screen bg-teal-500">
        {isHome ? (
          props.children
        ) : (
          <div className="pt-16 pb-12 px-8">{props.children}</div>
        )}
      </main>

      <footer className="w-full py-4 text-center absolute bottom-0">
        <span className="block mb-0 text-md text-slate-700">
          Copyright &copy; BeYu Labs 2022
        </span>
        <span className="block text-sm text-slate-700">
          &hearts; from the metaverse
        </span>
      </footer>
    </>
  );
};

export default Layout;
