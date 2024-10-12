import FrenchMed from "../assets/images/frenchMed.png";
import StyledButton from "./StyledButton";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVariants";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home fx fx-aic fx-jcc">
      <div
        style={{ "--gap": "40px" }}
        className="home__container fx fx-dir-col gap fx-jcc"
      >
        <motion.h1
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="home__title"
        >
          {t("home.title")}
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="home__description"
        >
          {t("home.description")}
        </motion.p>
        <StyledButton
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          href="#products"
        >
          {t("home.shopNow")}
        </StyledButton>
      </div>
      <motion.div
        variants={fadeIn("down", 0, 1.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="home__banner"
      >
        <img src={FrenchMed} alt="Banner Image" />
      </motion.div>
    </section>
  );
};
export default Home;
