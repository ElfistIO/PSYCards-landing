import { Divider, Dropdown, Icon, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <Navbar
      className={styles.navigation__wrapper}
      alignLinks="left"
      id="mobile-nav"
      centerChildren
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to="/">Главная</Link>
      <Dropdown
        id="Dropdown_1"
        options={{
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          outDuration: 250,
        }}
        trigger={
          <a href="#!">
            Купить приложение PSYCards<Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <Link to="/">PSYCards Pro</Link>
        <Divider />
        <Link to="/">PSYCards Pro + модуль "Тело чувств"</Link>
        <Divider />
        <Link to="/">PSYCards Lite</Link>
        <Divider />
        <Link to="/">PSYCards Lite - "Универсальный №1"</Link>
        <Divider />
        <Link to="/">PSYCards Lite - "Универсальный №2"</Link>
        <Divider />
        <Link to="/">PSYCards Lite - "Про деньги"</Link>
        <Divider />
        <Link to="/">PSYCards Lite - "Семья"</Link>
      </Dropdown>
      <Link to="/buy">Купить наборы для PSYCards</Link>
      <Link to="/buy">Купить игры для PSYCards</Link>

      <Link to="/contacts">Контакты</Link>
    </Navbar>
  );
};
