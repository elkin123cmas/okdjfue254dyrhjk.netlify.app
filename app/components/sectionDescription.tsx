import { FC } from "react";
import styles from "../styles/components/sectionDescription.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStore,
  faCalendarCheck,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

const SectionDescription: FC = () => {
  return (
    <div className={styles.puntualityContainerGrid}>
      <div className={styles.containFlexIconDescription}>
        <div className={styles.containIconPuntuality}>
          <FontAwesomeIcon
            className={styles.iconInternPuntuality}
            icon={faClock}
          />
        </div>
        <p className={styles.descriptionIconDown}>Amplia experiencia en <br /> la industria</p>
      </div>

      <div className={styles.containFlexIconDescription}>
        <div className={styles.containIconPuntuality}>
          <FontAwesomeIcon
            className={styles.iconInternPuntuality}
            icon={faStore}
          />
        </div>
        <p className={styles.descriptionIconDown}>Experiencia con <br /> numerosas empresas</p>
      </div>

      <div className={styles.containFlexIconDescription}>
        <div className={styles.containIconPuntuality}>
          <FontAwesomeIcon
            className={styles.iconInternPuntuality}
            icon={faCalendarCheck}
          />
        </div>
        <p className={styles.descriptionIconDown}>Amplio historial de <br /> reservas procesadas</p>
      </div>

      <div className={styles.containFlexIconDescription}>
        <div className={styles.containIconPuntuality}>
          <FontAwesomeIcon
            className={styles.iconInternPuntuality}
            icon={faEarthEurope}
          />
        </div>
        <p className={styles.descriptionIconDown}>Próximamente, expansión <br /> a nivel internacional</p>
      </div>
    </div>
  );
};
export default SectionDescription;
