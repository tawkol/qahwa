import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVariants";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <Container maxWidth="md" sx={{ textAlign: "center", py: 4 }}>
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="fx gap fx-aic"
        >
          <span className="borderForHeader" />
          <h2 className="primaryHeader">{t("contact.title")}</h2>
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

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="fx fx-dir-col gap"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body1">{t("contact.location")}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography variant="body1">+20 100 742 1294</Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
