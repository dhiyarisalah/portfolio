import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./pages/Projects";
import Expertise from "./pages/Expertise";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/portfolio" Component={HomePage} />
        <Route path="/portfolio/projects" Component={Projects} />
        <Route path="/portfolio/expertise" Component={Expertise} />
      </Routes>
    </div>
  );
}

export default App
