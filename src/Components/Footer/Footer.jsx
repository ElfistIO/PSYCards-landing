import { Footer } from "react-materialize";

export const FooterBar = () => {
  return (
    <Footer
      className="blue-grey darken-4"
      copyrights="@ ИП Ласьков Вячеслав Валерьевич"
      links={
        <>
          <ul>
            <li>
              ИП Ласьков Вячеслав Валерьевич
              <br />
              Юридический адрес: г. Снежинск, ул.Чкаловская, д.13
              <br />
              ИНН 742303333416
              <br />
              ОГРНИП 320745600015783
            </li>
          </ul>
        </>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          <i className="material-icons">share</i>
        </a>
      }
    >
      <h5 className="white-text">Приложение PSYCards</h5>
      <p className="grey-text text-lighten-4">
        для проведения психологических консультаций и трансформационных игр с
        применением метафорических ассоциативных карт в онлайн-среде.
      </p>
    </Footer>
  );
};
