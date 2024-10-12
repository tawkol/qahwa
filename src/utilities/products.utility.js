import FrenchDark from "../assets/images/frenchDark.png";
import plainDark from "../assets/images/plainDark.png";
import MuhawajDark from "../assets/images/muhawajDark.png";
import frenchLight from "../assets/images/frenchLight.png";
import plainLight from "../assets/images/plainLight.png";
import muhawajLight from "../assets/images/muhawajLight.png";
import frenchMed from "../assets/images/frenchMed.png";
import plainMed from "../assets/images/plainMed.png";
import muhawajMed from "../assets/images/muhawajMed.png";
import hazelnut from "../assets/images/hazelnut.png";
import greek from "../assets/images/greek.png";
import mocha from "../assets/images/mocha.png";
export const coffeeProducts = (t) => [
  {
    category: t("products.french"),
    items: [
      {
        name: t("products.frenchLight"),
        image: frenchLight,
        price: `250 ${t("products.currency")}`,
      },
      {
        name: t("products.frenchMedium"),
        image: frenchMed,
        price: `250 ${t("products.currency")}`,
      },
      {
        name: t("products.frenchDark"),
        image: FrenchDark,
        price: `250 ${t("products.currency")}`,
      },
    ],
  },
  {
    category: t("products.plain"),
    items: [
      {
        name: t("products.plainLight"),
        image: plainLight,
        price: `150 ${t("products.currency")}`,
      },
      {
        name: t("products.plainMedium"),
        image: plainMed,
        price: `150 ${t("products.currency")}`,
      },
      {
        name: t("products.plainDark"),
        image: plainDark,
        price: `150 ${t("products.currency")}`,
      },
    ],
  },
  {
    category: t("products.muhawaj"),
    items: [
      {
        name: t("products.muhawajLight"),
        image: muhawajLight,
        price: `200 ${t("products.currency")}`,
      },
      {
        name: t("products.muhawajMedium"),
        image: muhawajMed,
        price: `200 ${t("products.currency")}`,
      },
      {
        name: t("products.muhawajDark"),
        image: MuhawajDark,
        price: `200 ${t("products.currency")}`,
      },
    ],
  },
  {
    category: t("products.flavor"),
    items: [
      {
        name: t("products.hazelnut"),
        image: hazelnut,
        price: `200 ${t("products.currency")}`,
      },
      {
        name: t("products.greek"),
        image: greek,
        price: `200 ${t("products.currency")}`,
      },
      {
        name: t("products.mocha"),
        image: mocha,
        price: `200 ${t("products.currency")}`,
      },
    ],
  },
];
