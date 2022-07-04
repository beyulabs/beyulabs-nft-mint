import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

import beyuLabsLogo from "../public/beyu-labs-logotype-white.png";
import nexusVoyagersLogo from "../public/nexus-voyagers-logotype-white.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>BeYu Labs</title>
        <meta
          name="description"
          content="BeYu Labs is on a mission to empower web3 entrepreneurship. Join our community!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[url('/home-bg.svg')] bg-cover overflow-hidden">
        <div className="m-auto max-w-screen-xl">
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
          {props.children}
        </div>
      </main>

      <footer className="w-full text-center bg-nexusGreen text-white">
        <div className="flex flex-col items-center py-12 md:w-96 md:flex-row md:mx-auto">
          <div className="w-1/2 m-2">
            <Image
              src={nexusVoyagersLogo}
              alt="Nexus Voyagers logo"
              layout="responsive"
            />
          </div>
          <div className="w-1/2 m-2">
            <Image
              src={beyuLabsLogo}
              alt="BeYu Labs logo"
              layout="responsive"
            />
          </div>
        </div>
        <hr className="border-nexusFooterDivider opacity-30" />
        <p className="py-2 text-md">Nexus Voyagers &copy; 2022</p>
      </footer>
    </>
  );
};

export default Layout;
