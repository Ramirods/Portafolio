
import "./App.css";
import Dogis from "./componentes/pantallaPrincipal";
import UpdateGame from "./componentes/detalle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dogis />} exact />
        <Route path="/update" element={<UpdateGame />} />
      </Routes>
    </Router>
  );
}

export default App;
