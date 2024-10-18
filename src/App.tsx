import "./App.scss";
import { Articles } from "./components/Articles/";
import { Banner } from "./components/Banner";
import { Footer } from './components/Footer';
import { NavBar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Articles />
      <Footer />
    </>
  );
};
