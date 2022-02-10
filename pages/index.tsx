import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-8xl mb-10 text-white drop-shadow-2xl">
          Life on Terra
        </h2>
        <button className="bg-white px-8 py-4 rounded-lg capitalize hover:bg-sky-500 hover:shadow-lg">
          Connect Wallet
        </button>
      </section>
      <section className="bg-yellow-200">
        <h2>Other Stuff</h2>
      </section>
    </>
  );
};

export default Home;
