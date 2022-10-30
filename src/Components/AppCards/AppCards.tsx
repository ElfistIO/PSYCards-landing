import { Card, Col, Divider, Icon, Row } from "react-materialize";
import { Link } from "react-router-dom";

import styles from "./AppCards.module.scss";

export const AppCards = () => {
  return (
    <>
      <div className="center-align blue-grey darken-3">
        <h5 className={styles.appCards__header}>Купить PSYCards</h5>
      </div>
      <Row className={styles.appCards__cards}>
        <Col m={6} s={12} className="container">
          <Card
            actions={[
              <Link key="1" to="/">
                Купить версию PRO
              </Link>,
            ]}
            className="blue-grey darken-1 center-align"
            closeIcon={<Icon>close</Icon>}
            textClassName="white-text"
            title="PSYCards Pro"
          >
            <Divider />
            <ul>
              <li className={styles.appCards__cards_p}>
                С возможностью загрузки собственных наборов
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
              <Link key="2" to="/">
                Купить версию Lite
              </Link>,
            ]}
            className="blue-grey darken-1 center-align"
            closeIcon={<Icon>close</Icon>}
            textClassName="white-text"
            title="PSYCards Lite"
          >
            <Divider />
            <ul>
              <li className={styles.appCards__cards_p}>
                Без возможности загрузки собственных наборов
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
