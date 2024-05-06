"use client";

import { FC, useEffect, useState } from "react";
import styles from "../styles/functionality/functionality.module.css";
import Image from "next/image";
import calendar1 from "../assets/imagenes/imgCalendar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCodeBranch,
  faMagnifyingGlassDollar,
  faServer,
  faChartLine,
  faClock,
  faBell,
  faPrint,
  faEnvelope,
  faMobileScreenButton,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
// *********calendario web************

const calendar = {
  title: "Llena el aforo de tus clases con facilidad",
  description:
    "Acepta reservas y gestiona tu horario en tiempo real con InDeveloper.co. Obtén reservas y procesa pagos de forma ágil, evitando anotaciones confusas, reservas duplicadas y llamadas innecesarias.",
};

const Precio: FC = () => {
  const [web, setCalendar1] = useState(true);

  const handleClick = () => {
    setCalendar1(true);
  };

  return (
    <div className={styles.containGeneral}>
      <div className={styles.containFunctionsGrid}>
        <div className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faCalendarDays}
            />
          </div>
          <h3 className={styles.textFunction}>Calendario web</h3>
        </div>
        <div onClick={handleClick} className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faGlobe} />
          </div>
          <h3 className={styles.textFunction}>Integración en sitio web</h3>
        </div>
        <div className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faCodeBranch}
            />
          </div>
          <h3 className={styles.textFunction}>Programación avanzada</h3>
        </div>
        <div className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faChartLine} />
          </div>
          <h3 className={styles.textFunction}>Aumenta las ventas</h3>
        </div>
        <div className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faMagnifyingGlassDollar}
            />
          </div>
          <h3 className={styles.textFunction}>Analiza tu negocio</h3>
        </div>
        <div className={styles.functionsInternGrid}>
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faServer} />
          </div>
          <h3 className={styles.textFunction}>Hosting y seguridad</h3>
        </div>
      </div>
      <div className={styles.containGeneralCalendar}>
        <div className={styles.containInfoIconsClick}>
          <div className={styles.containInfoIntern}>
            <h3 className={styles.textTitle}>{calendar.title}</h3>
            <p className={styles.textDescription}>{calendar.description}</p>
          </div>
        </div>
        <div className={styles.containImgCalendar}>
          <Image
            className={styles.imgCalendar}
            src={calendar1}
            alt="Calendario"
          />
        </div>
        <div className={styles.containGridCalendar}>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faClock}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Accede las 24 horas del día, los 7 días de la semana para ti y tus colaboradores
              </h3>
              <p className={styles.descriptionGridIntern}>
              Accede a tu agenda de InDeveloper.co desde cualquier ubicación y en cualquier momento. Consulta las inscripciones en los cursos, las listas de clases y los pagos actualizados al instante. Configura de manera sencilla los permisos de acceso para cada profesor y miembro del equipo.
              </p>
            </div>
          </div>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faMobileScreenButton}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Elige dispositivos móviles para acceder a tu sistema de programación de clases
              </h3>
              <p className={styles.descriptionGridIntern}>
              Visualiza y gestiona tu calendario en línea desde cualquier dispositivo móvil. InDeveloper.co se adapta automáticamente al tamaño y formato de pantalla de cualquier dispositivo, tanto para ti como para tus alumnos. Todo esto está incluido en la pequeña tarifa de suscripción mensual.
              </p>
            </div>
          </div>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faBell}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Envía notificaciones y recordatorios automáticos
              </h3>
              <p className={styles.descriptionGridIntern}>
              Evita las ausencias sin previo aviso con notificaciones y recordatorios automáticos. InDeveloper.co enviará automáticamente correos electrónicos o mensajes de texto recordando a tus alumnos sobre sus reservas, ayudando a reducir costosos olvidos.
              </p>
            </div>
          </div>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faEnvelope}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Mantente actualizado por correo electrónico/SMS
              </h3>
              <p className={styles.descriptionGridIntern}>
              Gracias a las notificaciones automáticas por correo electrónico y SMS de InDeveloper.co, tu equipo y los profesores estarán siempre informados sobre cursos nuevos, reprogramados o cancelados, incluso fuera del horario laboral.
              </p>
            </div>
          </div>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faPrint}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Genera listas de clase detalladas fácilmente
              </h3>
              <p className={styles.descriptionGridIntern}>
              Con InDeveloper.co, puedes imprimir fácilmente listas de clase que incluyan datos de los participantes, pagos realizados y pendientes, así como cualquier otra información adicional seleccionada durante la inscripción. Tus profesores lo encontrarán muy útil.
              </p>
            </div>
          </div>
          <div className={styles.containInternGridCalendar}>
            <div className={styles.containIconGrid}>
              <FontAwesomeIcon
                className={styles.iconGridIntern}
                icon={faLocationDot}
              />
            </div>

            <div className={styles.containDescriptionGrid}>
              <h3 className={styles.titleCalendarGrid}>
              Realiza un seguimiento detallado de cada inscripción
              </h3>
              <p className={styles.descriptionGridIntern}>
              Con InDeveloper.co, recibirás actualizaciones instantáneas sobre reservas nuevas, reprogramadas o canceladas, y podrás consultar quién las realizó y cuándo. Además, controla automáticamente el uso de cupones de regalo, créditos de prepago y descuentos promocionales para un mejor seguimiento y control de tus operaciones..
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {web === true && (
        <div className={styles.containInfoIconsClick}>
          <div className={styles.containInfoIntern}>
            <h3 className={styles.textTitle}>{calendar.title}</h3>
            <p className={styles.textDescription}>{calendar.description}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Precio;
