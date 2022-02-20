import type { NextPage } from "next";

import EmailSignup from "../components/EmailSignup";

const Index: NextPage = () => {
  return (
    <>
      <section className="bg-top h-screen flex justify-center px-8">
        <EmailSignup />
      </section>
    </>
  );
};

export default Index;
