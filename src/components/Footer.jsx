import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Email from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fx gap fx-dir-col">
      <div className="container fx gap">
        <div className="logoWrapper fx gap fx-dir-col">
          <Logo />

          <p>
            {t("home.description")}
          </p>
        </div>
        <div className="quickLinks fx fx-dir-col gap">
          <h3>{t("footer.quickLinks")}</h3>
          <NavLinks />
        </div>
        <div className="socialLinks">
          <h3>{t("footer.socialLinks")}</h3>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <IconButton aria-label="WhatsApp">
            <WhatsApp />
          </IconButton>
          <IconButton aria-label="Email">
            <Email />
          </IconButton>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {currentYear} Qahwa. {t("footer.copyRights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
