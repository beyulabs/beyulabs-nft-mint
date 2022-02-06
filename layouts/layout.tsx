import React, { useEffect } from "react";
import Head from "next/head";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  // const [connectedContract, setConnectedContract] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: process.env.INFURA_ID, // required
          },
        },
      };

      const web3Modal = new Web3Modal({
        network: "rinkeby", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });

      const instance = await web3Modal.connect();
      console.log("instance", instance);
      const provider = new ethers.providers.Web3Provider(instance);
      console.log("provider", provider);
      const signer = provider.getSigner();
      console.log("signer", signer);
    };
    connectWallet();
  });

  return (
    <>
      <Head>
        <title>BeYu Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-indigo-500 min-h-screen">
        <div className="px-6 py-4">{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
