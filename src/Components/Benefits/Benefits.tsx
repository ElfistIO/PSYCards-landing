import { CardPanel, Col, Row } from "react-materialize";
import { Benefit } from "./Benefit";

import styles from "./Benefit.module.scss";

export const Benefits = () => {
  return (
    <div className={styles.benefits__wrapper}>
      <div className="center-align blue-grey darken-3">
        <h5 className={styles.benefits__header}>Возможности PSYCards</h5>
      </div>
      <h5 className={styles.benefits__text}>
        <Row>
          <Col m={12} s={12}>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">
                Проведение консультаций с использованием МАК
              </span>
            </CardPanel>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">Ведение трансформационных игр</span>
            </CardPanel>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">Организация коучинговых сессий</span>
            </CardPanel>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">
                Работа с таро и гадальными картами
              </span>
            </CardPanel>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">
                Работа с клиентом в Zoom / Skype / Hangouts (классическая
                версия)
              </span>
            </CardPanel>
            <CardPanel className="blue-grey darken-1">
              <span className="white-text">
                Приглашение клиента в сессию (версия 2.0)
              </span>
            </CardPanel>
          </Col>
        </Row>
      </h5>
      <div className="center-align blue-grey darken-3">
        <h5 className={styles.benefits__header}>Достоинства PSYCards</h5>
      </div>
      <div className="container center-align">
        <Row>
          <Benefit num={0} startX={-600} startY={-75} endX={0} endY={0} />
          <Benefit num={1} startX={600} startY={-75} endX={0} endY={0} />
        </Row>
        <Row className={styles.benefits__wrapper}>
          <Benefit num={2} startX={-600} startY={0} endX={0} endY={0} />
          <Benefit num={3} startX={600} startY={0} endX={0} endY={0} />
        </Row>
      </div>
    </div>
  );
};
