import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const nextRouter = useRouter();
  const isHome: boolean = nextRouter.pathname === "/";

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-teal-500">
      <Head>
        <title>BeYu Labs</title>
        <meta
          name="description"
          content="BeYu Labs is on a mission to empower web3 entrepreneurship. Join our community!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setMenuOpen={setMenuOpen} />

      <main>
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}

        {isHome ? (
          props.children
        ) : (
          <div className="pt-16 pb-12 px-8 max-w-4xl m-auto">
            {props.children}
          </div>
        )}
      </main>

      <footer className="w-full py-4 text-center">
        <span className="block mb-0 text-md text-slate-700">
          Copyright &copy; BeYu Labs 2022
        </span>
        <span className="block text-sm text-slate-700">
          &hearts; from the metaverse
        </span>
      </footer>
    </div>
  );
};

export default Layout;
