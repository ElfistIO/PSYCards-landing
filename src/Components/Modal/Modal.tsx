import { Button, Textarea, TextInput } from "react-materialize";
import { useNavigate } from "react-router-dom";

import styles from "./Modal.module.scss";

export const ModalWindow = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div className={styles.modalDiv}>
      <div className={styles.modal1}>
        <div className="modal">
          <div className="modal-content">
            <div className={styles.myModal}>
              <h5 className="center-align">Запрос на сотрудничество</h5>
              <form>
                <TextInput id="TextInput-59" label="Ваше имя" />
                <TextInput id="TextInput-59" label="Телефон" />
                <TextInput
                  email
                  error="Некорректный Email"
                  id="TextInput-39"
                  label="Email"
                  success="Great"
                  validate
                />
                <Textarea data-length={120} id="Textarea-29" label="Textarea" />
                <Button onClick={(e) => handleSubmit(e)}>Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
