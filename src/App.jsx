import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/portfolio" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App
