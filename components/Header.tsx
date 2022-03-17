import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

interface HeaderProps {
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ setMenuOpen }: HeaderProps) => {
  return (
    <header className="flex flex-row items-center justify-between w-100 bg-transparent px-8 pt-4 absolute w-full text-xl">
      <Nav setMenuOpen={setMenuOpen} />
      <SocialIcons />
    </header>
  );
};

export default Header;
