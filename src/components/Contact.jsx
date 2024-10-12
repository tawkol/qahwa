import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVariants";
import { useTranslation } from "react-i18next";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div style={{ "--gap": "30px" }} className="container fx fx-dir-col gap">
        <div className="fx gap fx-aic">
          <span className="borderForHeader" />
          <h2 className="primaryHeader">{t("contact.title")}</h2>
        </div>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="fx fx-dir-col gap"
          style={{ "--gap": "20px" }}
        >
          <div 
          
          className="fx fx-aic gap">
            <LocationOnIcon color="primary" sx={{ fontSize: "2rem" }} />
            <p>{t("contact.location")}</p>
          </div>
          <div className="fx fx-aic gap">
            <PhoneIcon color="primary" sx={{ fontSize: "2rem" }} />
            <p>+20 100 742 1294</p>
          </div>
        </motion.div>
        <motion.p
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="contact__description"
        >
          {t("contact.message")}
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
