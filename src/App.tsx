import { Route, Routes } from "react-router-dom";

import { Navigation } from "./Components/Header/Navigation/Navigation";
import { LogoBar } from "./Components/Header/LogoBar/LogoBar";
import { MainPage } from "./Pages/MainPage";
import { Contacts } from "./Pages/Contacts";
import { FooterBar } from "./Components/Footer/Footer";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";

function App() {
  return (
    <>
      <LogoBar />
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <FooterBar />
    </>
  );
}

export default App;
