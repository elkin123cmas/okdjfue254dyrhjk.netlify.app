"use client";

import { FC } from "react";
import styles from "../styles/dashboard/precio.module.css";
import Image from "next/image";
import include from "../assets/imagenes/ImgInclude.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Precio: FC = () => {
  return (
    <div className={styles.containGeneral}>
      <div className={styles.containOfferFree}>
        <h2 className={styles.titleFree}>
          Recibe reservas hoy, elige un plan más tarde
        </h2>
        <p className={styles.desciptionFree}>
          Prueba gratis durante 30 días. No se requiere tarjeta de crédito
        </p>
        <div className={styles.containBtnContact}>
          <button className={styles.btnContact}>
            prueba totalmente gratis
          </button>
        </div>
      </div>
      <h3 className={styles.titleOfferFree}>InDev.co Citas</h3>

      {/* ********SECTION GRID********* */}
      <div className={styles.containInfoGrid}>
        <div className={styles.containGridInternOffer}>
          <div className={styles.containTitlePrices}>
            <h3 className={styles.titlePrices}>Básico</h3>
          </div>
          <div className={styles.containPricesNum}>
            <p className={styles.descriptionPrices}>$49.900</p>
            <p className={styles.descrptionPricesDown}>cops al mes</p>
          </div>
          <div className={styles.containListPricesDescription}>
            <ul className={styles.containListPrices}>
              <li className={styles.listPrices}>2 Plugins</li>
              <li className={styles.listPrices}>1 acceso del personal</li>
              <li className={styles.listPrices}>50 reservas/mes</li>
            </ul>
          </div>
        </div>
        <div className={styles.containGridInternOffer}>
          <div className={styles.containTitlePrices}>
            <h3 className={styles.titlePrices}>Estándar</h3>
          </div>
          <div className={styles.containPricesNum}>
            <p className={styles.descriptionPrices}>$66.900</p>
            <p className={styles.descrptionPricesDown}>cops al mes</p>
          </div>
          <div className={styles.containListPricesDescription}>
            <ul className={styles.containListPrices}>
              <li className={styles.listPrices}>5 Plugins</li>
              <li className={styles.listPrices}>1 Landing Page</li>

              <li className={styles.listPrices}>3 accesos del personal</li>
              <li className={styles.listPrices}>100 reservas/mes</li>
            </ul>
          </div>
        </div>
        <div className={styles.containGridInternOffer}>
          <div className={styles.containTitlePrices}>
            <h3 className={styles.titlePrices}>Premium</h3>
          </div>
          <div className={styles.containPricesNum}>
            <p className={styles.descriptionPrices}>$98.900</p>
            <p className={styles.descrptionPricesDown}>cops al mes</p>
          </div>
          <div className={styles.containListPricesDescription}>
            <ul className={styles.containListPrices}>
              <li className={styles.listPrices}>10 Plugins</li>
              <li className={styles.listPrices}>1 Página web</li>
              <li className={styles.listPrices}>6 accesos del personal</li>

              <li className={styles.listPrices}>2.000 reservas/mes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.containTitleMoreOfferFlex}>
        <h3 className={styles.moreOffer}>
          ¿Requieres un plan más completo? ¿Tu empresa cuenta con múltiples
          filiales o franquicias?
        </h3>
        <button className={styles.contactMoreOffer}>
          contacta con nosotros
        </button>
      </div>

      {/* **********SECTION INCLUDE********** */}
      <div className={styles.containIncludeAndImg}>
        <div className={styles.containImgInclude}>
          <Image
            className={styles.imgInclude}
            src={include}
            alt="Los planes incluyen"
          />
        </div>
        <div className={styles.titleCenterAndGrid}>
          <h3 className={styles.titleInclude}>todos los planes incluyen</h3>
          <div className={styles.containIncludePlanGrid}>
            <div className={styles.containIncludeIntern}>
              <ul className={styles.containListInclude}>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Sin contratos vinculantes
                </li>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Sin necesidad de instalar software
                </li>
              </ul>
            </div>
            <div className={styles.containIncludeIntern}>
              <ul className={styles.containListInclude}>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Integración con sitios web
                </li>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Garantizamos la protección de datos
                </li>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Actualizaciones automáticas
                </li>
              </ul>
            </div>
            <div className={styles.containIncludeIntern}>
              <ul className={styles.containListInclude}>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Soporte técnico gratuito
                </li>
                <li className={styles.listInclude}>
                  <FontAwesomeIcon
                    className={styles.iconCheck}
                    icon={faSquareCheck}
                  />
                  Acceso disponible en todo momento y desde cualquier lugar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precio;
