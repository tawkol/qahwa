import { motion } from "framer-motion";
import { fadeIn } from "../utilities/animationVariants";
import { useTranslation } from "react-i18next";
import { CoffeeOutlined, History, Group } from "@mui/icons-material";

const About = () => {
  const { t } = useTranslation();
  const valuesDesc = t("about.ourValuesDesc");
  const storyDesc = t("about.ourStoryDesc");
  const joinUsDesc = t("about.joinUsDesc");
  return (
    <section className="about" id="about">
      <div style={{ "--gap": "30px" }} className="container fx fx-dir-col gap">
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="fx gap fx-aic"
        >
          <span className="borderForHeader" />
          <h2 className="primaryHeader">{t("about.title")}</h2>
        </motion.div>

        <div className="aboutCards">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="fx fx-dir-col gap"
          >
            <header className="fx fx-dir-col gap">
              <div className="fx fx-jcc fx-aic headerIcons">
                <CoffeeOutlined />
              </div>
              <h1>{t("about.ourValues")}</h1>
            </header>
            <p>{valuesDesc.padEnd(300)}</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="fx fx-dir-col gap"
          >
            <header className="fx fx-dir-col gap">
              <div className="fx fx-jcc fx-aic headerIcons">
                <History />
              </div>
              <h1>{t("about.ourStory")}</h1>
            </header>
            <p>{storyDesc.padEnd(300)}</p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="fx fx-dir-col gap"
          >
            <header className="fx fx-dir-col gap">
              <div className="fx fx-jcc fx-aic headerIcons">
                <Group />
              </div>
              <h1>{t("about.joinUs")}</h1>
            </header>
            <p>{joinUsDesc.padEnd(300)}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
