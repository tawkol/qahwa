import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
