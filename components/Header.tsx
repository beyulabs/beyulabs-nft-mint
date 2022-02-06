import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-100 bg-indigo-500 px-6 py-4">
      <p>BeYu Labs</p>
      <Nav />
    </div>
  );
};

export default Header;
