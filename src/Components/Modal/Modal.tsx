import { TextInput } from "react-materialize";

import styles from "./Modal.module.scss";

export const ModalWindow = () => {
  return (
    <div className={styles.modal__wrapper}>
      <a
        className="waves-effect waves-light btn modal-trigger blue-grey darken-3"
        href="#modal1"
      >
        Запрос на сотрудничество
      </a>
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4 className="center-align">Запрос на сотрудничество</h4>
          <form>
            <TextInput
              email
              error="Wrong Email sir"
              id="TextInput-39"
              label="Email"
              success="Great"
              validate
            />
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Отправить
          </a>
        </div>
      </div>
    </div>
  );
};
