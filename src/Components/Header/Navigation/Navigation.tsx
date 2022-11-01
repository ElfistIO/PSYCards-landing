import { Icon, Navbar, NavItem } from "react-materialize";
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
      <Link to="/buy">Купить приложение PSYCards</Link>
      <Link to="/buy">Купить наборы для PSYCards</Link>
      <Link to="/buy">Купить игры для PSYCards</Link>
      <Link to="/contacts">Контакты</Link>
    </Navbar>
  );
};
