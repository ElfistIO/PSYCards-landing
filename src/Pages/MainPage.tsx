import { AppCards } from "../Components/AppCards/AppCards";
import { Benefits } from "../Components/Benefits/Benefits";
import { Carousel } from "../Components/Carousel/Carousel";
import { Contributed } from "../Components/Contributed/Contributed";
import { UniSender } from "../Components/UniSender/UniSender";
import { VideoBlock } from "../Components/VideoBlock/VideoBlock";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.mainPage__wrapper}>
      <Carousel />
      <Benefits />
      <AppCards />
      <Contributed />
      <VideoBlock />
      <UniSender />
    </div>
  );
};
