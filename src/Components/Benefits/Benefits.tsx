import { Row } from "react-materialize";
import { Benefit } from "./Benefit";

import styles from "./Benefit.module.scss";

export const Benefits = () => {
  // const div = setTimeout(() => {
  //   <Benefit num={0} startX={-600} startY={-75} endX={0} endY={0} />;
  // }, 1000);
  // function benefit1() {
  //   return div;
  // }
  return (
    <div className={styles.benefits__wrapper}>
      <div className="center-align blue-grey darken-3">
        <h5 className={styles.benefits__header}>Что такое PSYCards?</h5>
      </div>
      <h5 className={styles.benefits__text}>
        PSYCards — это программное приложение для удобного управления любыми
        картинками, созданное специально для дистанционной психологической
        помощи через функцию «демонстрация экрана» в Skype или Hangouts. С его
        помощью вы можете проводить метафорические расклады, игры, презентации
        для людей по всему миру!
      </h5>
      <div className="container center-align">
        <Row>
          <Benefit num={0} startX={-600} startY={-75} endX={0} endY={0} />
          <Benefit num={1} startX={600} startY={-75} endX={0} endY={0} />
        </Row>
        <Row className={styles.benefits__wrapper}>
          <Benefit num={2} startX={-600} startY={0} endX={0} endY={0} />
          <Benefit num={3} startX={600} startY={0} endX={0} endY={0} />
        </Row>
        <Benefit num={4} startX={0} startY={300} endX={0} endY={0} />
      </div>
    </div>
  );
};
