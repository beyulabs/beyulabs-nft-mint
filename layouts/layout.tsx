import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

import beyuLabsLogo from "../public/beyu-labs-logotype-white.png";
import nexusVoyagersLogo from "../public/nexus-voyagers-logotype-white.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const nextRouter = useRouter();
  const isHome: boolean = nextRouter.pathname === "/";

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-nexusDarkBg">
      <Head>
        <title>BeYu Labs</title>
        <meta
          name="description"
          content="BeYu Labs is on a mission to empower web3 entrepreneurship. Join our community!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto max-w-screen-xl">
        <Header setMenuOpen={setMenuOpen} />
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
        {props.children}
      </main>

      <footer className="w-full text-center bg-nexusGreen text-white">
        <div className="flex flex-row justify-center mt-8">
          <div className="w-1/2">
            <div className="flex flex-row max-w-96">
              <div className="w-1/2 m-8">
                <Image
                  src={nexusVoyagersLogo}
                  alt="Nexus Voyagers logo"
                  layout="responsive"
                />
              </div>
              <div className="w-1/2 m-8">
                <Image
                  src={beyuLabsLogo}
                  alt="BeYu Labs logo"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-nexusFooterDivider opacity-30" />
        <p className="py-2 text-md">Nexus Voyagers &copy; 2022</p>
      </footer>
    </div>
  );
};

export default Layout;
