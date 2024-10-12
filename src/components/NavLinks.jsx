import { useTranslation } from "react-i18next";

const NavLinks = ({ className, drawer = false, toggleDrawer }) => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    if (drawer) {
      // Call the toggleDrawer function to close the drawer
      toggleDrawer();
    }
  };

  return (
    <nav className="nav_links">
      <ul className={className}>
        <li>
          <a onClick={handleLinkClick} href="#home">
            {t("header.home")}
          </a>
        </li>
        <li>
          <a onClick={handleLinkClick} href="#about">
            {t("header.about")}
          </a>
        </li>
        <li>
          <a onClick={handleLinkClick} href="#products">
            {t("header.products")}
          </a>
        </li>
        <li>
          <a onClick={handleLinkClick} href="#contact">
            {" "}
            {t("header.contact")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
