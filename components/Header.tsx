import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-100 bg-transparent px-8 pt-4 absolute w-full text-xl">
      <Nav />
      <SocialIcons />
    </header>
  );
};

export default Header;
