import Lottie from "react-lottie-player";
import designerLottie from "../assets/Animations/design.json.json";
import { FC } from "react";
import styles from "../styles/components/designerLottie.module.css";

const DesignerLot: FC = () => {
  return (
    <div className={styles.containLottieDesigner}>
      <Lottie loop animationData={designerLottie} play style={{width: "100%", height: "100%", }} />
    </div>
  );
};
export default DesignerLot;
