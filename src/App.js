import { HashRouter, Route, Routes } from "react-router-dom";
import { Authentication } from "./Pages/Authentication";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
