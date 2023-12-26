import { Button } from "../ui/button";
import Logo from "./Logo";
import MenuButtons from "./MenuButtons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed z-30 flex w-full items-center justify-center p-6">
      <div className="flex w-full max-w-[1400px] items-center justify-between">
        <Logo />
        <MenuButtons />
        <Button variant="light" size="light" className="hidden md:block">
          Get in touch
        </Button>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
