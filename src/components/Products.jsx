import { useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { coffeeProducts } from "../utilities/products.utility";
import CARD from "./CARD";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function TabPanel({ children, value, index, animationDir, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className="tabpanel"
      {...other}
    >
      {value === index && (
        <motion.div
          className="fx gap tabpanel-item active"
          initial={{ opacity: 0, x: animationDir }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: animationDir * -1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Products = () => {
  const [tabValue, setTabValue] = useState(0);
  const { t, i18n } = useTranslation();
  const products = coffeeProducts(t);
  const animationDir = i18n.language === "en" ? 150 : -150;

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <section id="products">
      <div className="container fx fx-dir-col gap">
        {/* Section Header */}
        <div className="fx gap fx-aic">
          <span className="borderForHeader" />
          <h2 className="primaryHeader">{t("products.ourProducts")}</h2>
        </div>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="product category tabs"
          variant="scrollable"
        >
          {products.map((product, index) => (
            <Tab label={product.category} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
        <div className="tabPanel__wrapper">
          {/* Tab Content Panels with Animation */}
          {products.map((product, index) => (
            <TabPanel
              animationDir={animationDir}
              value={tabValue}
              index={index}
              key={index}
            >
              {product.items.map(({ name, image, price }) => (
                <CARD key={name} title={name} img={image} price={price} />
              ))}
            </TabPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
