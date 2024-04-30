import { FC } from "react";
import styles from "../styles/components/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge,faLifeRing,faUsersViewfinder,faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Footer: FC = () => {
  return (
    <div className={styles.containFooterGeneral}>
      <div className={styles.containFooterGrid}>
        <div className={styles.containInfoFooter}>
          <h3 className={styles.titleFooterIntern}>
            <FontAwesomeIcon
              className={styles.iconInternFooter}
              icon={faBellConcierge}
            />
            Servicio
          </h3>
          <ul className={styles.containListFooter}>
            <li className={styles.listInterFooter}>Precio</li>
            <li className={styles.listInterFooter}>Empresa</li>
            <li className={styles.listInterFooter}>Tipos de negocio</li>
          </ul>
        </div>
        <div className={styles.containInfoFooter}>
          <h3 className={styles.titleFooterIntern}>
            <FontAwesomeIcon
              className={styles.iconInternFooter}
              icon={faLifeRing}
            />
            Ayuda
          </h3>
          <ul className={styles.containListFooter}>
            <li className={styles.listInterFooter}>Centro de Soporte</li>
            <li className={styles.listInterFooter}>Como funciona</li>
            <li className={styles.listInterFooter}>Preguntas frecuentes</li>
            <li className={styles.listInterFooter}>Videos tutoriales</li>
          </ul>
        </div>
        <div className={styles.containInfoFooter}>
          <h3 className={styles.titleFooterIntern}>
            <FontAwesomeIcon
              className={styles.iconInternFooter}
              icon={faUsersViewfinder}
            />
            Sobre
          </h3>
          <ul className={styles.containListFooter}>
            <li className={styles.listInterFooter}>Acerca de nosotros</li>
            <li className={styles.listInterFooter}>Nuestro equipo</li>
            <li className={styles.listInterFooter}>Contactos</li>
          </ul>
        </div>
        <div className={styles.containInfoFooter}>
          <h3 className={styles.titleFooterIntern}>
            <FontAwesomeIcon
              className={styles.iconInternFooter}
              icon={faShieldHalved}
            />
            Servicios jurídicos
          </h3>
          <ul className={styles.containListFooter}>
            <li className={styles.listInterFooter}>Política de privacidad</li>
            <li className={styles.listInterFooter}>Cookie Policy</li>
            <li className={styles.listInterFooter}>Términos y condiciones</li>
          </ul>
        </div>
      </div>
      <div className={styles.containDescriptionFooter}>
        <p className={styles.textDescriptionFooterIntern}>
          InDeveloper.co se encuentra en la ciudad de <span className={styles.textSubrayed1}>Guadalajara de Buga, Colombia,
          en el Departamento del Valle del Cauca.</span> <br />
          InDeveloper.co forma alianza con InFaCont ERP. <br />
          Contáctanos: <span className={styles.textSubrayed1}> support@InDeveloper.co</span> para consultas generales.
        </p>
        <p className={styles.textCopy}>
          Copyright ©2024 InDeveloper.co Ltd. Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};
export default Footer;
