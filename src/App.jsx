import {Routes, Route} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/portfolio" Component={HomePage} />
        <Route path="/portfolio/portfolio" Component={Portfolio} />
        <Route path="/portfolio/aboutme" Component={AboutMe} />
      </Routes>
    </div>
  );
}

export default App
