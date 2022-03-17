import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ setMenuOpen }: MobileMenuProps) => {
  return (
    <div className="fixed h-full w-full px-8 py-6 bg-red-500 z-50 top-0 left-0">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          className="mr-2"
          width={24}
          height={24}
          icon={faX}
          onClick={() => {
            document.body.style.overflow = "auto";
            setMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
