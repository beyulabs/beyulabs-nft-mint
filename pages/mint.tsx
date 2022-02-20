import type { NextPage } from "next";

const Mint: NextPage = () => {
  return (
    <>
      <section className="bg-[url('../public/charles-etoroma.jpg')] bg-cover bg-top h-screen flex flex-col justify-center px-8">
        <h2 className="text-8xl mb-14 text-white drop-shadow-2xl">
          Life on Terra
        </h2>
        <button className="bg-white px-8 py-4 rounded-lg capitalize font-semibold max-w-xs shadow-lg hover:shadow-xl hover:bg-sky-500">
          Connect Wallet
        </button>
      </section>
      <section className="h-screen bg-yellow-200">
        <h2>Backstory</h2>
      </section>
      <section className="h-screen bg-emerald-200">
        <h2>Roadmap</h2>
      </section>
    </>
  );
};

export default Mint;
