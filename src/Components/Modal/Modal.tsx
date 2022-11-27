import { useCallback, useState } from "react";
import { Button, Textarea, TextInput } from "react-materialize";
import { useNavigate } from "react-router-dom";

import styles from "./Modal.module.scss";

const useFormField = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};

export const ModalWindow = () => {
  const nameField = useFormField();
  const phoneField = useFormField();
  const emailField = useFormField();
  const textField = useFormField();

  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // sender ligic
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
                <TextInput id="TextInput-59" label="Ваше имя" {...nameField} />
                <TextInput id="TextInput-59" label="Телефон" {...phoneField} />
                <TextInput
                  email
                  error="Некорректный Email"
                  id="TextInput-39"
                  label="Email"
                  success="Great"
                  validate
                  {...emailField}
                />
                <Textarea
                  data-length={120}
                  id="Textarea-29"
                  label="Textarea"
                  {...textField}
                />
                <Button onClick={(e) => handleSubmit(e)}>Отправить</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
