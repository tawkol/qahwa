import LanguageSelector from "./LanguageSelector";
import LOGO from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="main-header fx fx-aic">
      <LOGO />
      <NavLinks className={"fx fx-aic gap"} />
      <div className="utility fx fx-aic fx-jcc gap">
        <ThemeToggle />
        <LanguageSelector />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
