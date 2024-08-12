import { FC } from "react";
import styles from "../styles/components/formulario.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,

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
            <h3 className={styles.titleRightContactIcon}>+57 305 237 9574</h3>
          </div>
          <div className={styles.contactInternLeft}>
            <FontAwesomeIcon
              className={styles.iconControl}
              icon={faChartColumn}
            />
            <h3 className={styles.titleRightContactIcon}>support@Q-Booker.io</h3>
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
      <form action="https://formsubmit.co/serviciotecnicoinfacont@gmail.com" method="POST" className={styles.formDiv}>
        <div className={styles.containInput}>
          <input type="text" name="nombre" placeholder="Nombre y apellido" required />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containInput}>
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containInput}>
          <input type="text" name="asunto" placeholder="Asunto" required />
          <FontAwesomeIcon className={styles.iconRight} icon={faChartColumn} />
        </div>
        <div className={styles.containTextArea}>
          <textarea className={styles.areaText} name="mensaje" placeholder="Escribe tu mensaje..." required></textarea>
        </div>

        <input type="hidden" name="_formulario" value="Formulario de contacto de servicio técnico" />
        <button type="submit" className={styles.send}>Enviar mensaje</button>
      </form>

    </div>
  );
};
export default Form;
