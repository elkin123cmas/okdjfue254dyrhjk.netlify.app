import { FC } from "react";
import styles from "../styles/components/formulario.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faChartGantt,
  faLockOpen,
  faMapLocationDot,
  faTicket,
  faGears,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Form: FC = () => {
  return (
    <div className={styles.containFormFlex}>
      <div className={styles.containInternLeft}>
        <div className={styles.containTitle}>
          <h2 className={styles.titleIntern}>contáctate con <br /> nosotros</h2>
        </div>
        <div className={styles.containContactIntern}>
          <div className={styles.contactInternLeft}>
            <FontAwesomeIcon
              className={styles.iconControl}
              icon={faChartColumn}
            />
            <h3 className={styles.titleRightContactIcon}>+57 305 237 0000</h3>
          </div>
          <div className={styles.contactInternLeft}>
            <FontAwesomeIcon
              className={styles.iconControl}
              icon={faChartColumn}
            />
            <h3 className={styles.titleRightContactIcon}>support@InDev.co</h3>
          </div>
          <div className={styles.contactInternLeft}>
            <FontAwesomeIcon
              className={styles.iconControl}
              icon={faChartColumn}
            />
            <h3 className={styles.titleRightContactIcon}>
              Guadalajara de Buga, Valle del Cauca.
            </h3>
          </div>
        </div>
      </div>
      <form action="" className={styles.formDiv}>
        <div className={styles.containInput}>
          <input type="text" placeholder="Nombre y apellido" />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containInput}>
          <input type="email" placeholder="Correo electrónico" />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containInput}>
          <input type="text" placeholder="Asunto" />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containTextArea}>
          <textarea
            className={styles.areaText}
            placeholder="Escribe tu mensaje..."
          />
        </div>
        <button className={styles.send}>Enviar mensaje</button>
      </form>
    </div>
  );
};
export default Form;
