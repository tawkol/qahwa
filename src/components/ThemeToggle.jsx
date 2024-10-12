import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  IconButton,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ThemeToggle = ({ mobile = false }) => {
  const { theme, setTheme } = useThemeContext();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newTheme) => {
    if (newTheme !== null) {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      if (!mobile) {
        handleClose();
      }
    }
  };

  return (
    <>
      {!mobile ? (
        <>
          <IconButton
            id="theme-button"
            aria-controls={open ? "theme-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="theme"
          >
            {theme === "system" && <Brightness6Icon />}
            {theme === "light" && <LightModeIcon />}
            {theme === "dark" && <DarkModeIcon />}
          </IconButton>
          <Menu
            id="theme-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "theme-button" }}
          >
            <MenuItem
              className="fx gap"
              onClick={() => handleChange(null, "light")}
            >
              <LightModeIcon /> {t("header.theme.light")}
            </MenuItem>
            <MenuItem
              className="fx gap"
              onClick={() => handleChange(null, "dark")}
            >
              <DarkModeIcon /> {t("header.theme.dark")}
            </MenuItem>
            <MenuItem
              className="fx gap"
              onClick={() => handleChange(null, "system")}
            >
              <Brightness6Icon /> {t("header.theme.system")}
            </MenuItem>
          </Menu>
        </>
      ) : (
        <ToggleButtonGroup
          color="primary"
          value={theme}
          exclusive
          onChange={handleChange}
          aria-label="theme"
          dir="ltr"
          fullWidth={mobile}
        >
          <ToggleButton disabled={theme === "light"} value="light">
            <LightModeIcon /> {t("header.theme.light")}
          </ToggleButton>
          <ToggleButton disabled={theme === "system"} value="system">
            <Brightness6Icon /> {t("header.theme.system")}
          </ToggleButton>
          <ToggleButton disabled={theme === "dark"} value="dark">
            <DarkModeIcon /> {t("header.theme.dark")}
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </>
  );
};

export default ThemeToggle;
