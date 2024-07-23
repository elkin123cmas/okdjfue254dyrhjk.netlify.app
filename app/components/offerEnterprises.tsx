import { FC } from "react";
import styles from "../styles/components/offerEnterprises.module.css";
import {
  faShop,
  faScrewdriverWrench,
  faShieldHalved,
  faTape,
  faServer,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferEnterprises: FC = () => {
  return (
    <div className={styles.containerOfferGrids}>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon className={styles.iconHamburg} icon={faShop} />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>Solución omnicanal</h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Permita que sus clientes programen citas fácilmente desde su sitio
            web, redes sociales o correos electrónicos salientes. Nuestro
            software de programación muestra disponibilidad en tiempo real para
            sus consultores, permitiendo a los clientes reservar en el momento
            más conveniente para ellos. Ofrecemos una solución eficiente y
            omnicanal para la reserva de citas, adaptable como marca blanca
            según sus necesidades.
          </p>
        </div>
      </div>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon
            className={styles.iconHamburg}
            icon={faScrewdriverWrench}
          />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>
            Administrador de cuenta exclusivo
          </h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Su gestor de cuentas estará disponible para ayudar en asuntos
            técnicos, formación y nuevas implementaciones. Comuníquese
            directamente a través de un canal dedicado en Slack. Ofrecemos un
            servicio de atención al cliente en vivo de calidad para sus
            empleados.
          </p>
        </div>
      </div>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon
            className={styles.iconHamburg}
            icon={faShieldHalved}
          />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>Privacidad y seguridad</h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Q-Booker.io cumple con el RGPD y cuenta con seguridad dedicada,
            además de oficiales DPO que garantizan privacidad y seguridad.
            Comunicaciones seguras y copias de seguridad diarias garantizan la
            integridad y previenen la pérdida de datos. Haga clic aquí para
            conocer todas las medidas de seguridad que hemos implementado para
            proteger sus datos. Nuestro sistema de servidores distribuidos
            globalmente ofrece una experiencia más rápida y cumple con las
            normativas de privacidad.
          </p>
        </div>
      </div>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon className={styles.iconHamburg} icon={faTape} />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>API Integrada y Robusta</h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Integre una opción de programación de reservas en su página web, en
            Facebook, Instagram o en su perfil de Google Mi Negocio. También
            puede utilizar nuestra amplia API. Utilice la URL de notificación
            para recibir avisos sobre la creación, cancelación o modificación de
            sus reservas. Esta función le permite integrar información relevante
            en cualquier sistema que utilice o insertarla en su propia base de
            datos para análisis futuros.
          </p>
        </div>
      </div>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon className={styles.iconHamburg} icon={faServer} />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>Servidores dedicados a empresas</h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Para clientes de organizaciones que necesitan una mayor capacidad y
            desean una solución altamente segura, ofrecemos la opción de
            configurar un servidor dedicado. Este servidor puede manejar un
            mayor volumen de reservas, más llamadas a la API y un número
            ilimitado de usuarios, entre otras funcionalidades. Además, el
            servidor dedicado puede ubicarse en el país de su elección,
            proporcionando flexibilidad geográfica y seguridad adicional.
          </p>
        </div>
      </div>
      <div className={styles.containInternOffer}>
        <div className={styles.containImgOfferInter}>
          <FontAwesomeIcon className={styles.iconHamburg} icon={faSpinner} />{" "}
        </div>
        <div className={styles.titleOfferContain}>
          <h3 className={styles.titleOffer}>
            Gestor automático de colas de carga
          </h3>
        </div>
        <div className={styles.containDescriptionOffer}>
          <p className={styles.descriptionOffer}>
            Nuestro Gestor de Colas de Carga Automática se encarga eficazmente
            de manejar cargas repentinas intensas para que su sistema no se vea
            afectado. Los clientes son colocados en una cola ordenada,
            permitiéndoles esperar su turno para reservar de manera organizada.
            Esto es especialmente útil durante promociones flash o para
            servicios limitados y solicitados.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OfferEnterprises;
