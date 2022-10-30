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
            Вход в PSYCards 2.0
            <Icon left>arrow_forward</Icon>
          </Button>
        </a>
      </div>
    </div>
  );
};
