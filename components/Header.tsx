import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center w-100 bg-indigo-500 px-6 py-4">
      <Nav />
      <SocialIcons />
    </header>
  );
};

export default Header;
