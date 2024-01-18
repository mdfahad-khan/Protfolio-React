import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import SocialLink from "./Component/SocialLink";
import About from "./Component/About";
import Protfolio from "./Component/Protfolio";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <SocialLink />
      <About />
      <Protfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
