import { Card, Col, Divider, Icon, Row } from "react-materialize";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const location = useLocation();
  return (
    <div className={styles.contacts__wrapper}>
      <Row className={styles.contacts__cards}>
        <Col m={12} s={12} className="container">
          <Card
            actions={[
              <Link
                className="waves-effect waves-light btn modal-trigger"
                to="modal"
                state={{ background: location }}
                key="1"
              >
                Запрос на сотрудничество
              </Link>,
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            textClassName="white-text"
            title="Контакты"
          >
            <Divider />
            <ul>
              <li className={styles.appCards__cards_p}>
                ИП Ласьков Вячеслав Валерьевич
              </li>
              <li className={styles.appCards__cards_p}>
                Юридический адрес: г. Снежинск, ул.Чкаловская, д.13
              </li>
              <li className={styles.appCards__cards_p}>
                ОГРН: 320745600015783
              </li>
              <li className={styles.appCards__cards_p}>ИНН: 742303333416</li>
            </ul>
            <ul>
              <li className={styles.appCards__cards_p}>Режим работы:</li>
              <li className={styles.appCards__cards_p}>
                Пн-пт – 8:00-19:00, сб – 10:00-17:00, воскресенье – выходной
              </li>
            </ul>
            <ul>
              <li className={styles.appCards__cards_p}>Телефон:</li>
              <li className={styles.appCards__cards_p}>+7 (919) 117-55-99</li>
            </ul>
            <ul>
              <li className={styles.appCards__cards_p}>
                Почта для технических вопросов:
              </li>
              <li className={styles.appCards__cards_p}>
                support@mak-online.ru
              </li>
            </ul>
            <ul>
              <li className={styles.appCards__cards_p}>
                Почта для общих вопросов:
              </li>
              <li className={styles.appCards__cards_p}>info@mak-online.ru</li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};
