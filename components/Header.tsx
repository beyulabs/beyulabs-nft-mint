import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center w-100 bg-transparent px-6 py-4 absolute w-full text-xl">
      <Nav />
      <SocialIcons />
    </header>
  );
};

export default Header;
