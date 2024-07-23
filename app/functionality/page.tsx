"use client";

import { FC, useEffect, useState } from "react";
import styles from "../styles/functionality/functionality.module.css";
import Image from "next/image";
import calendar1 from "../assets/imagenes/imgCalendar.png";
import web from "../assets/imagenes/imagen-webg.png";
import celulares from "../assets/imagenes/imagenCelulares.png";
import ventas from "../assets/imagenes/imagenesVenta.png";
import analitics from "../assets/imagenes/imgAnalitics.jpg";
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
    "Acepta reservas y gestiona tu horario en tiempo real con Q-Booker.io. Obtén reservas y procesa pagos de forma ágil, evitando anotaciones confusas, reservas duplicadas y llamadas innecesarias.",
  img: calendar1,
};
const integration = {
  title: "Integración fluida con tu sitio web",
  description:
    "Facilita que tus clientes reserven directamente en tu página web sin costos adicionales. La integración perfecta en tu sitio web está incluida en la asequible cuota mensual de Q-Booker.io.",
  img: web,
};
const programte = {
  title: "La programación de citas nunca antes fue tan sencilla",
  description:
    " Di adiós a las interminables listas y a las complicadas hojas de cálculo. Con la avanzada programación de citas de Bookeo, mantente siempre organizado y actualizado en tiempo real, tanto tú como tus profesores.",
  img: celulares,
};
const commerce = {
  title: "Incrementa las ventas. Fácilmente",
  description:
    "Conviértete en un auténtico profesional del marketing de forma instantánea y haz crecer tu negocio fácilmente con las herramientas de marketing de vanguardia perfectamente integradas.Todo esto está incluido en la pequeña cuota de suscripción mensual.",
  img: ventas,
};
const analitic = {
  title: "Obtén información con las estadísticas",
  description:
    "Analiza tu negocio como todo un profesional con las estadísticas de Bookeo. Compara datos de las reservas y los ingresos para ver cómo va tu negocio y céntrate en lo que funciona mejor.",
  img: analitics,
};
const hosting = {
  title: " Hosting y seguridad avanzados",
  description:
    "Confía en la arquitectura del sistema de nuestra plataforma, que cumple con la normativa ISO 27001 y está basada en la nube, así como en su infraestructura redundante de servidores distribuidos globalmente para garantizar que tu aplicación siga funcionando sin problemas ante cualquier eventualidad.",
  img: web,
};

const Precio: FC = () => {
  // const [calendar1, setCalendar1] = useState(true);
  // const [web, setWeb] = useState(false);
  // const [programation, setProgramation] = useState(false);
  // const [commerce, setCommerce] = useState(false);
  // const [analitic, setAnalitic] = useState(false);
  // const [hosting, seHhosting] = useState(false);

  // const handleClick = () => {
  //   setCalendar1(false);
  //   setWeb(true);
  // };
  // const handleClickCalendar = () => {
  //   setCalendar1(true);
  //   setWeb(false);
  // };
  const [activeSection, setActiveSection] = useState("calendar");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  // useEffect(()=>{
  //   setCalendar1(calendar1);
  //   setWeb(web);
  // }[])
  return (
    <div className={styles.containGeneral}>
      <div className={styles.containFunctionsGrid}>
        <div
          onClick={() => handleClick("calendar")}
          className={
            activeSection === "calendar"
              ? styles.functionsInternGrid
              : styles.foundColor
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faCalendarDays}
            />
          </div>
          <h3 className={styles.textFunction}>Calendario web</h3>
        </div>
        <div
          onClick={() => handleClick("web")}
          className={
            activeSection === "web"
              ? styles.addColor
              : styles.functionsInternGrid
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faGlobe} />
          </div>
          <h3 className={styles.textFunction}>Integración en sitio web</h3>
        </div>
        <div
          onClick={() => handleClick("programation")}
          className={
            activeSection === "programation"
              ? styles.addColor
              : styles.functionsInternGrid
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faCodeBranch}
            />
          </div>
          <h3 className={styles.textFunction}>Programación avanzada</h3>
        </div>
        <div
          onClick={() => handleClick("commerce")}
          className={
            activeSection === "commerce"
              ? styles.addColor
              : styles.functionsInternGrid
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faChartLine} />
          </div>
          <h3 className={styles.textFunction}>Aumenta las ventas</h3>
        </div>
        <div
          onClick={() => handleClick("analitic")}
          className={
            activeSection === "analitic"
              ? styles.addColor
              : styles.functionsInternGrid
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon
              className={styles.iconIntern}
              icon={faMagnifyingGlassDollar}
            />
          </div>
          <h3 className={styles.textFunction}>Analiza tu negocio</h3>
        </div>
        <div
          onClick={() => handleClick("hosting")}
          className={
            activeSection === "hosting"
              ? styles.addColor
              : styles.functionsInternGrid
          }
        >
          <div className={styles.containIconIntern}>
            <FontAwesomeIcon className={styles.iconIntern} icon={faServer} />
          </div>
          <h3 className={styles.textFunction}>Hosting y seguridad</h3>
        </div>
      </div>

      {/* ************CONTAIN CALENDAR*********** */}
      {activeSection === "calendar" && (
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
              src={calendar.img}
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
                  Accede las 24 horas del día, los 7 días de la semana para ti y
                  tus colaboradores
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Accede a tu agenda de Q-Booker.io desde cualquier ubicación
                  y en cualquier momento. Consulta las inscripciones en los
                  cursos, las listas de clases y los pagos actualizados al
                  instante. Configura de manera sencilla los permisos de acceso
                  para cada profesor y miembro del equipo.
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
                  Elige dispositivos móviles para acceder a tu sistema de
                  programación de clases
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Visualiza y gestiona tu calendario en línea desde cualquier
                  dispositivo móvil. Q-Booker.io se adapta automáticamente al
                  tamaño y formato de pantalla de cualquier dispositivo, tanto
                  para ti como para tus alumnos. Todo esto está incluido en la
                  pequeña tarifa de suscripción mensual.
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
                  Evita las ausencias sin previo aviso con notificaciones y
                  recordatorios automáticos. Q-Booker.io enviará
                  automáticamente correos electrónicos o mensajes de texto
                  recordando a tus alumnos sobre sus reservas, ayudando a
                  reducir costosos olvidos.
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
                  Gracias a las notificaciones automáticas por correo
                  electrónico y SMS de Q-Booker.io, tu equipo y los
                  profesores estarán siempre informados sobre cursos nuevos,
                  reprogramados o cancelados, incluso fuera del horario laboral.
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
                  Con Q-Booker.io, puedes imprimir fácilmente listas de clase
                  que incluyan datos de los participantes, pagos realizados y
                  pendientes, así como cualquier otra información adicional
                  seleccionada durante la inscripción. Tus profesores lo
                  encontrarán muy útil.
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
                  Con Q-Booker.io, recibirás actualizaciones instantáneas
                  sobre reservas nuevas, reprogramadas o canceladas, y podrás
                  consultar quién las realizó y cuándo. Además, controla
                  automáticamente el uso de cupones de regalo, créditos de
                  prepago y descuentos promocionales para un mejor seguimiento y
                  control de tus operaciones..
                </p>
              </div>
            </div>
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************CONTAIN WEB*********** */}
      {activeSection === "web" && (
        <div className={styles.containGeneralCalendar}>
          <div className={styles.containInfoIconsClick}>
            <div className={styles.containInfoIntern}>
              <h3 className={styles.textTitle}>{integration.title}</h3>
              <p className={styles.textDescription}>
                {integration.description}
              </p>
            </div>
          </div>
          <div className={styles.containImgCalendar}>
            <Image
              className={styles.imgCalendar}
              src={integration.img}
              alt="Web"
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
                  Integración perfecta en cualquier sitio web
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Ofrece a tus clientes una excelente experiencia de reserva de
                  citas en tu sitio web. El widget de Bookeo se integra sin
                  problemas en cualquier sitio HTML, incluidos WordPress.
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
                  Personalización avanzada del diseño
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Personaliza fácilmente el diseño del widget de tu calendario
                  de citas para que combine perfectamente con el diseño de tu
                  sitio web. Todo esto está incluido en la asequible cuota
                  mensual de Q-Booker.io.
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
                  Carrito de reservas y paquetes de ofertas
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Vende varios servicios con el carrito de reservas integrado.
                  Mejora tus ofertas de servicios y talleres ofreciendo extras y
                  opciones adicionales.
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
                  Personalización de la navegación de tus clientes
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Mantén a tus clientes concentrados en lo que les interesa
                  mediante enlaces directos, botones y widgets. Por ejemplo,
                  muestra solo servicios o categorías específicos en ciertas
                  páginas de tu sitio web.
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
                  Reservas a través de Facebook
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Acepta reservas de citas en línea desde tu página de Facebook
                  con la aplicación de Facebook de Bookeo, sin coste adicional.
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
                  Bienvenida a tus clientes con imágenes y vídeos
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Da la bienvenida a tus clientes con fotos y vídeos
                  impactantes. Permite que vean tus servicios a través de
                  imágenes, galerías de fotos y vídeos, junto con descripciones
                  de servicios y biografías de tus asesores.
                </p>
              </div>
            </div>
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************FINISH CONTAIN WEB*********** */}
      {/* ************CONTAIN WEB*********** */}
      {activeSection === "programation" && (
        <div className={styles.containGeneralCalendar}>
          <div className={styles.containInfoIconsClick}>
            <div className={styles.containInfoIntern}>
              <h3 className={styles.textTitle}>{programte.title}</h3>
              <p className={styles.textDescription}>{programte.description}</p>
            </div>
          </div>
          <div className={styles.containImgCalendar}>
            <Image
              className={styles.imgCalendar}
              src={programte.img}
              alt="programese"
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
                  Programación de citas flexible y completa
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Establece fácilmente tus propias reglas de reserva de citas y
                  talleres. Crea una experiencia de reserva personalizada para
                  que tus clientes puedan elegir a su empleado preferido y solo
                  vean las franjas horarias disponibles, no todo su horario.
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
                  Reserva y reprogramación sencilla
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Reserva y reprogramación de citas con un solo clic (para ti y
                  para tus clientes). Cálculo de precios en tiempo real,
                  reflejando promociones especiales, códigos y cupones
                  promocionales. Bookeo lo controla todo por ti.
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
                  Lista sencilla de personal y ubicaciones
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Asignar varios proveedores de servicio y ubicaciones ya no es
                  un trabajo de chinos. Asigna fácilmente a tu personal
                  servicios y ubicaciones específicas con el calendario de citas
                  en línea de Q-Booker.io.
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
                  Aceptar o rechazar las solicitudes de reserva manualmente
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Si lo prefieres, puedes desactivar la aceptación automática de
                  citas en línea y talleres, para así poder revisar todas las
                  solicitudes de reserva y decidir si quieres aceptarlas o no.
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
                  Personal flexible y disponibilidad de ubicaciones
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Configura fácilmente el horario de las diferentes ubicaciones,
                  además del horario de trabajo específico de cada empleado,
                  incluyendo días festivos y bajas por enfermedad. Asigna un
                  intervalo de tiempo automático entre citas para que tengáis
                  tiempo para prepararos para el siguiente cliente.
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
                  Reservas periódicas sencillas, con un solo clic
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Olvídate de las molestas entradas de reservas duplicadas.
                  Ahora, tú y tus clientes podéis hacer reservas de citas
                  periódicas fácilmente (para el mismo día, o para distintos
                  días y horas de la semana).
                </p>
              </div>
            </div>
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************FINISH CONTAIN WEB*********** */}
      {/* ************CONTAIN WEB*********** */}
      {activeSection === "commerce" && (
        <div className={styles.containGeneralCalendar}>
          <div className={styles.containInfoIconsClick}>
            <div className={styles.containInfoIntern}>
              <h3 className={styles.textTitle}>{commerce.title}</h3>
              <p className={styles.textDescription}>{commerce.description}</p>
            </div>
          </div>
          <div className={styles.containImgCalendar}>
            <Image
              className={styles.imgCalendar}
              src={commerce.img}
              alt="aumenta las ventas"
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
                  Estimula las ventas con promociones específicas
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Aumenta las ventas durante los períodos de menos movimiento, o
                  al introducir un nuevo servicio o taller. Configura fácilmente
                  los servicios que quieres promocionar y en qué días. Y después
                  publícalo en Facebook o Twitter con un solo clic.
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
                  Ahorra tiempo en promociones de sitios de ofertas diarias
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Importa fácilmente códigos de cupón de sitios web de ofertas
                  diarias, como GroupOn. ¡Olvídate de los fraudes y ahorra
                  tiempo! Una vez hechas las reservas, los cupones se validan y
                  comprueban automáticamente.
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
                  Consigue que tus clientes vuelvan con los paquetes prepago
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Consolida la fidelidad de tus clientes con paquetes prepago
                  (tarjetas perforadas virtuales). Configura fácilmente el
                  número de visitas, la validez y la política de reembolso. Los
                  créditos se deducen y rastrean automáticamente.
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
                  Remarketing automáticpRemarketing automáticp
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Intenta que los clientes que no terminan el proceso de pago
                  regresen y hagan una reserva (con correos automáticos
                  temporizados y personalizados por ti).
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
                  Aumenta los ingresos con los cupones de regalo
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Consigue nuevos clientes e incrementa las ventas con cupones
                  de regalo (que puedes vender en línea o en persona, ¡y sin
                  coste adicional!). Configura fácilmente la política de
                  reembolso y la validez de los cupones.
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
                  Envía campañas de marketing personalizadas
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Mantén el contacto con tus clientes con campañas de marketing
                  profesionales y totalmente personalizables. Envía campañas a
                  todos los clientes o grupos objetivo sin esfuerzo (y fomenta
                  la retención).
                </p>
              </div>
            </div>
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************FINISH CONTAIN WEB*********** */}
      {/* ************CONTAIN WEB*********** */}
      {activeSection === "analitic" && (
        <div className={styles.containGeneralCalendar}>
          <div className={styles.containInfoIconsClick}>
            <div className={styles.containInfoIntern}>
              <h3 className={styles.textTitle}>{analitic.title}</h3>
              <p className={styles.textDescription}>{analitic.description}</p>
            </div>
          </div>
          <div className={styles.containImgCalendar}>
            <Image
              className={styles.imgCalendar}
              style={{ borderRadius: '10px' }}
              src={analitic.img}
              alt="Analiza tu servicio"
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
                  Análisis detallado de rendimiento
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Obtén informes exhaustivos sobre el desempeño de tu negocio,
                  desde ingresos y clientes hasta preferencias y utilización de
                  recursos.
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
                  Visualización gráfica del negocio
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Observa fácilmente el rendimiento actualizado de tu negocio
                  con gráficos claros y concisos proporcionados por Bookeo.
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
                  Integración con Google Analytics
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Descubre el origen de tus clientes y evalúa el impacto de tus
                  campañas de marketing gracias a la integración con Google
                  Analytics/Adwords de Bookeo.
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
                  Reportes personalizados
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Crea informes adaptados a tus necesidades, ya sea para cumplir
                  con regulaciones o para análisis internos.
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
                  Seguimiento personalizado de campañas
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Integra tus propias herramientas de análisis para monitorear
                  el tráfico, las fuentes de ingresos y las conversiones de
                  manera específica y detallada.
                </p>
              </div>
            </div>
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************FINISH CONTAIN WEB*********** */}
      {/* ************CONTAIN WEB*********** */}
      {activeSection === "hosting" && (
        <div className={styles.containGeneralCalendar}>
          <div className={styles.containInfoIconsClick}>
            <div className={styles.containInfoIntern}>
              <h3 className={styles.textTitle}>{hosting.title}</h3>
              <p className={styles.textDescription}>{hosting.description}</p>
            </div>
          </div>
          <div className={styles.containImgCalendar}>
            <Image
              className={styles.imgCalendar}
              src={hosting.img}
              alt="hosting"
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
                  Hosting fiable en la nube
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Arquitectura avanzada: La arquitectura de hosting avanzada de
                  Bookeo mantiene tu negocio funcionando a la perfección y de
                  forma continua. Resiliencia ante desastres: Incluso en el caso
                  de que se produzcan desastres naturales imprevistos, fallos de
                  hardware o problemas importantes en el centro de datos.
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
                  Copias de seguridad continuas
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Copia de seguridad en tiempo real: Se realiza una copia de
                  seguridad de todos los datos continuamente y en tiempo real en
                  dos servidores de réplica independientes. Almacenamiento
                  redundante: Además, se almacenan 4 instantáneas de copia de
                  seguridad diarias en servidores redundantes.
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
                  El mismo nivel de encriptación utilizado por los bancos
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Cifrado SSL/TLS: Como parte de nuestro cumplimiento de la
                  normativa PCI-DSS, todas las comunicaciones de Bookeo con
                  nuestros clientes comerciales se cifran utilizando el cifrado
                  SSL/TLS (128 o 256 bits). Nivel bancario de seguridad: Este es
                  el mismo nivel de cifrado utilizado por los bancos.
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
                  Cobertura mundial de los centros de datos
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Respuesta rápida: El tiempo de respuesta de tu página web es
                  más rápido cuando tu centro de datos se encuentra cerca.
                  Centros de datos globales: Es por eso que Bookeo tiene
                  múltiples centros de datos en tres zonas geográficas
                  diferentes: Estados Unidos, Europa y Asia/Pacífico.
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
                  Réplica automática de servidores
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Réplica idéntica: Cada uno de nuestros servidores tiene 2
                  réplicas idénticas. Cambio automático: Bookeo cambia
                  automáticamente a un centro de datos diferente cuando es
                  necesario para garantizar que tu negocio sigue funcionando sin
                  interrupciones.
                </p>
              </div>
            </div>
            {/* <div className={styles.containInternGridCalendar}>
              <div className={styles.containIconGrid}>
                <FontAwesomeIcon
                  className={styles.iconGridIntern}
                  icon={faLocationDot}
                />
              </div>

              <div className={styles.containDescriptionGrid}>
                <h3 className={styles.titleCalendarGrid}>
                  Bienvenida a tus clientes con imágenes y vídeos
                </h3>
                <p className={styles.descriptionGridIntern}>
                  Da la bienvenida a tus clientes con fotos y vídeos
                  impactantes. Permite que vean tus servicios a través de
                  imágenes, galerías de fotos y vídeos, junto con descripciones
                  de servicios y biografías de tus asesores.
                </p>
              </div>
            </div> */}
          </div>
          {/* ************FINISH CONTAIN CALENDAR*********** */}
        </div>
      )}

      {/* ************FINISH CONTAIN WEB*********** */}
    </div>
  );
};

export default Precio;
