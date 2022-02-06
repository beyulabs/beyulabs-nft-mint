import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-100 bg-indigo-500 px-6 py-4">
      <Nav />
      <SocialIcons />
    </div>
  );
};

export default Header;
