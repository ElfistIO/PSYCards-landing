import { motion } from "framer-motion";
import { Col, Collection, CollectionItem } from "react-materialize";
import { APP_BENEFITS } from "./Benefits.const";

import styles from "./Benefit.module.scss";

interface Props {
  num: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export const Benefit = ({ num, startX, startY, endX, endY }: Props) => {
  const boxVariant = {
    offscreen: {
      x: startX,
      y: startY,
      scale: 0,
      opacity: 0,
    },
    onscreen: {
      y: endY,
      x: endX,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.8,
        delay: 0.3,
      },
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={boxVariant} className={styles.card__wrapper}>
        <Col m={6} s={12}>
          <Collection className="blue-grey lighten-2">
            {APP_BENEFITS[num].text.map((text, id) => (
              <CollectionItem key={id} className="blue-grey lighten-3">
                {text}
              </CollectionItem>
            ))}
          </Collection>
        </Col>
      </motion.div>
    </motion.div>
  );
};
