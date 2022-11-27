import { Link } from "react-router-dom";
import { Button, Icon } from "react-materialize";
import { LINKS } from "./LogoBar.const";

import styles from "./LogoBar.module.scss";
import Logo from "../../../Assets/logo-head.png";

export const LogoBar = () => {
  return (
    <div className="container">
      <div className={styles.logo_bar__wrapper}>
        <Link to="/">
          <img src={Logo} alt="logo" className={styles.logo_bar__logo} />
        </Link>
        <div className={styles.logo_bar__contacts}>
          <p>Связаться с нами:</p>
          <div className={styles.logo_bar__logo_wrapper}>
            {LINKS.map((el, index) => (
              <a target="_blank" href={el.link} rel="noreferrer" key={index}>
                {el.icon}
              </a>
            ))}
          </div>
        </div>
        <a href="https://dev.mak-online.ru/login">
          <Button node="button" waves="light" className="blue-grey darken-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
            >
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
            </svg>
            Вход в PSYCards 2.0
          </Button>
        </a>
      </div>
    </div>
  );
};
