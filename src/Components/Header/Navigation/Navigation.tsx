import { Icon, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <Navbar
      className={styles.navigation__wrapper}
      alignLinks="left"
      id="mobile-nav"
      centerChildren
      menuIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
          width="36"
          height="36"
        >
          <path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z" />
        </svg>
      }
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to="/">Главная</Link>
      <a
        href="http://mak-online.ru/product-category/psycards/"
        target="_blank"
        rel="noreferrer"
      >
        Купить приложение PSYCards
      </a>
      <a
        href="http://mak-online.ru/product-category/modul/"
        target="_blank"
        rel="noreferrer"
      >
        Купить наборы для PSYCards
      </a>
      <a
        href="http://mak-online.ru/product-category/igry-na-psycards/"
        target="_blank"
        rel="noreferrer"
      >
        Купить игры для PSYCards
      </a>
      <Link to="/contacts">Контакты</Link>
    </Navbar>
  );
};
