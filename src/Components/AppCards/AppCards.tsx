import { Card, Col, Divider, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

import styles from "./AppCards.module.scss";

export const AppCards = () => {
  return (
    <>
      <div className="center-align blue-grey darken-3">
        <h5 className={styles.appCards__header}>Версии приложения</h5>
      </div>
      <Row className={styles.appCards__cards}>
        <Col m={6} s={12} className="container">
          <Card
            actions={[
              <a
                href="https://mak-online.ru/shop/psycards/paket-psycards-pro/"
                key="1"
              >
                Купить версию PRO
              </a>,
            ]}
            className="blue-grey darken-1 center-align"
            closeIcon={<Icon>close</Icon>}
            textClassName="white-text"
            title="PSYCards Pro"
          >
            <Divider />
            <ul>
              <li className={styles.appCards__cards_p}>
                <b>С возможностью</b> загрузки собственных наборов
              </li>
              <li className={styles.appCards__cards_p}>
                Возможность проведения консультаций
              </li>
              <li className={styles.appCards__cards_p}>
                Возможность проведения игр
              </li>
            </ul>
          </Card>
        </Col>
        <Col m={6} s={12} className="container">
          <Card
            actions={[
              <a
                href="https://mak-online.ru/shop/psycards/paket-psycards-lite/"
                key="2"
              >
                Купить версию Lite
              </a>,
            ]}
            className="blue-grey darken-1 center-align"
            closeIcon={<Icon>close</Icon>}
            textClassName="white-text"
            title="PSYCards Lite"
          >
            <Divider />
            <ul>
              <li className={styles.appCards__cards_p}>
                <b>Без возможности</b> загрузки собственных наборов
              </li>
              <li className={styles.appCards__cards_p}>
                Возможность проведения консультаций
              </li>
              <li className={styles.appCards__cards_p}>
                Ограниченная возможность проведения игр
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};
