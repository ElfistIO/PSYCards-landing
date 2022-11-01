import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation } from "./Components/Header/Navigation/Navigation";
import { LogoBar } from "./Components/Header/LogoBar/LogoBar";
import { MainPage } from "./Pages/MainPage";
import { Contacts } from "./Pages/Contacts";
import { FooterBar } from "./Components/Footer/Footer";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";
import { ModalWindow } from "./Components/Modal/Modal";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <LogoBar />
      <Navigation />
      <>
        <Routes location={background || location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<Contacts />}>
            <Route path="modal" element={<ModalWindow />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/contacts/modal" element={<ModalWindow />} />
          </Routes>
        )}
      </>
      <FooterBar />
    </>
  );
}

export default App;
