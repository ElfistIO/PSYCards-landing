import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Carousel.module.scss";

import carouselImage01 from "../../Assets/01.jpg";
import carouselImage02 from "../../Assets/02.jpg";
import carouselImage03 from "../../Assets/03.jpg";
import carouselImage04 from "../../Assets/04.jpg";
import carouselImage05 from "../../Assets/05.jpg";
import carouselImage06 from "../../Assets/06.jpg";
import carouselImage001 from "../../Assets/001.jpg";
import carouselImage002 from "../../Assets/002.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="container center-align">
      <h4 className={styles.slider__header}>Приложение PSYCards</h4>
      <h5 className={styles.slider__text}>
        для проведения психологических консультаций и трансформационных игр с
        применением метафорических ассоциативных карт в Онлайн-среде
      </h5>
      <div className={styles.slider__wrapper}>
        <Slider {...settings}>
          <div>
            <img
              src={carouselImage001}
              alt={"001"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage002}
              alt={"002"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage01}
              alt={"01"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage02}
              alt={"02"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage03}
              alt={"03"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage04}
              alt={"04"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage05}
              alt={"05"}
              className={styles.slider__img}
            />
          </div>
          <div>
            <img
              src={carouselImage06}
              alt={"06"}
              className={styles.slider__img}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
