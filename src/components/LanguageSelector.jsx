import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../context/ThemeContext";

const LanguageSelector = ({ mobile = false }) => {
  const { i18n } = useTranslation();
  const i18Lang = i18n.language;
  let { dir } = useThemeContext();
  const [language, setLanguage] = useState(i18Lang);
  // console.log(language);

  const handleChange = (event, lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if ((i18n, language === "ar")) {
      document.body.dir = "rtl";
      document.documentElement.setAttribute("lang", "ar");
      dir = "rtl";
    }
    // Update the language when it changes
    i18n.on("languageChanged", (lng) => {
      if (lng === "ar") {
        document.body.dir = "rtl";
        document.documentElement.setAttribute("lang", "ar");
        dir = "rtl";
      } else {
        document.body.removeAttribute("dir");
        document.documentElement.setAttribute("lang", "en");
        dir = "ltr";
      }
    });
  }, [i18n]);
  return (
    <>
      <ToggleButtonGroup
        size={mobile ? "normal" : "small"}
        color="primary"
        value={language}
        exclusive
        onChange={handleChange}
        aria-label="language-selector"
        dir="ltr"
        fullWidth={mobile}
      >
        <ToggleButton disabled={language === "en"} value="en">
          en
        </ToggleButton>
        <ToggleButton
          className="LanguageSelectorArabicBtn"
          disabled={language === "ar"}
          value="ar"
        >
          ar
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default LanguageSelector;
