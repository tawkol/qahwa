import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import NavLinks from "./NavLinks";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
const MobileNav = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <IconButton
        className="mobile_nav_btn"
        onClick={toggleDrawer(true)}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        className="mobile_nav"
        anchor={i18n.language == "en" ? "right" : "left"}
        onClose={toggleDrawer(false)}
      >
        <div className="close">
          <IconButton onClick={toggleDrawer(false)} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <Divider sx={{ marginBottom: "20px" }} />
        {
          <NavLinks
            className={"fx gap fx-dir-col"}
            drawer={true}
            toggleDrawer={toggleDrawer(false)}
          />
        }
        <Divider sx={{ marginBottom: "20px" }} />
        <div className="utility fx fx-dir-col fx-jcc gap">
          <h2>{t("language")}</h2>
          <LanguageSelector mobile={true} />
          <h2>{t("theme")}</h2>
          <ThemeToggle mobile={true} />
        </div>
      </Drawer>
    </>
  );
};

export default MobileNav;
