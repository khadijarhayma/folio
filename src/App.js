import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigateur from "./Navigateur";
import Accueil from "./component/Accueil";
import Apropos from "./component/Apropos";
import Contact from "./component/Contact";
import Competance from "./component/Competance";
function App() {
  return (
    <div className="App">
      <Navigateur />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Competance" element={<Competance />} />
      </Routes>
    </div>
  );
}

export default App;
