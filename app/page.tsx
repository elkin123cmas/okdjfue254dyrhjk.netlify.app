"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
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
import { FC, useEffect, useRef, useState } from "react";
import Carrousele from "./components/carrousele";
import DesignerLot from "./components/designerLottie";
import seo from "../app/assets/imagenes/imgSeo (1).jpg";
import web from "../app/assets/imagenes/imgWeb (1).jpg";
import crm from "../app/assets/imagenes/imgCrm (1).jpg";
import change from "../app/assets/imagenes/imgChange (1).jpg";
import reservs from "../app/assets/imagenes/imgReservs.jpg";
import geolocalitaton from "../app/assets/imagenes/imgPhone.png";
import imgMaps from "../app/assets/imagenes/imgMap.png";
import SectionDescription from "./components/sectionDescription";
import OfferEnterprises from "./components/offerEnterprises";
import Footer from "./components/footer";
import Link from "next/link";
import Header from "./components/header";

const Mockup = [
  {
    img: seo,
    title: "posicionamiento web",
    description:
      "Ofrecemos servicios de posicionamiento web diseñados para mejorar la visibilidad y el tráfico orgánico de tu sitio en los motores de búsqueda. Nuestro enfoque incluye optimización on-page, creación de contenido estratégico y técnicas de SEO avanzadas para alcanzar resultados sólidos. Confía en nosotros para impulsar tu presencia en línea y destacarte en el mundo digital.",
  },
  {
    img: web,
    title: "diseño de páginas web",
    description:
      "Creamos páginas web cautivadoras y funcionales que reflejan la identidad única de tu marca. Nuestros servicios de diseño web incluyen diseño responsivo, navegación intuitiva y atención al detalle en cada elemento visual. Confía en nosotros para transformar tu visión en una experiencia web excepcional y atractiva.",
  },
  {
    img: crm,
    title: "software crm web",
    description:
      "Desarrollamos sistemas CRM web personalizados para potenciar la gestión eficiente de tus relaciones con clientes. Nuestra solución integra herramientas avanzadas de seguimiento, automatización de procesos y análisis de datos para optimizar la interacción con tus clientes. Confía en nosotros para fortalecer tu estrategia de CRM y mejorar la satisfacción de tus clientes.",
  },
  {
    img: change,
    title: "software exchangeMaster",
    description:
      "Presentamos una solución especializada en cambios de divisas con integración directa a la DIAN. Nuestro software facilita la gestión de transacciones, asegurando el cumplimiento normativo y mejorando la eficiencia operativa en el ámbito cambiario. Confía en nosotros para optimizar tus procesos financieros de manera segura y conforme a las regulaciones vigentes.",
  },
];

const Page: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollServices, setIsScrollServices] = useState(false);

  ///////////////////////
  const contentRef = useRef<HTMLDivElement>(null);

  /////////////////////////

  const handelVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const revealPosition =
      document.getElementById("revealText")?.offsetTop || 0;

    const revealPositionServices =
      document.getElementById("revealServices")?.offsetTop || 0;

    if (scrollPosition > revealPosition) {
      setIsScroll(true);
    }
    if (scrollPosition > revealPositionServices) {
      setIsScrollServices(true);
    }
  };

  // const handleClickDash = () => {
  // 	router.push(
  // 		'/facebook.com/'
  // 	)
  // }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      {/* ********SLIDER******* */}
      <Carrousele />
      <div className={styles.containOurEnterprisesFlex}>
        <div className={styles.containImgEnterprises}>
          <DesignerLot />
        </div>
        <div className={styles.containTextOur5Enterprises}>
          <h3 className={styles.textTitle}>Nuestra Empresa</h3>
          <p id="revealText" className={styles.textInterEnterprises}>
            En InDeveloper.co, estamos dedicados a la creación de aplicativos
            web innovadores que impulsan el éxito y la transformación digital.
            Nos especializamos en el desarrollo ágil y personalizado de
            soluciones web adaptadas a las necesidades únicas de nuestros
            clientes.
          </p>
        </div>
      </div>
      <div className={styles.containTitlePrincipal}>
        <h3 className={styles.titlePrincipal}>
          InDeveloper.co-Posicionamiento
        </h3>
        <p className={styles.subtitlePrincipal}>
          Presentamos a usted nuestra gama de servicios.
        </p>
      </div>
      <div className={styles.containServices} id="revealServices">
        {Mockup.map((item, key) => (
          <div
            key={key}
            className={`${styles.servicesIntern} ${
              isScrollServices ? styles.visible : ""
            }`}
          >
            <div className={styles.containImgServices}>
              <Image
                className={styles.imgServicesInter}
                src={item.img}
                alt=""
              />
            </div>
            <div className={styles.titleIntern}>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            <div className={styles.containDescriptionServices}>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.containBtnVewServices}>
              <button className={styles.btnServices}>Ver Servicios</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.containReservSectionFlex}>
        <div className={styles.containReservsMotor}>
          <h3 className={styles.titleText}>
            <span className={styles.spanTtileInternMotor}>
              {" "}
              Motor de reservas
            </span>{" "}
            <br />{" "}
            <span className={styles.textSpanEnterprises}>
              empresariales
            </span>{" "}
            <br /> con gestión de citas online <br /> que aporta la solución
            para satisfacer sus exigentes necesidades
          </h3>
          <p className={styles.testDescriptionReservs}>
            Se adapta a diferentes modelos de negocios y a sus diferentes
            configuraciones y procesos. Esta es la solución para hacer crecer su
            negocio aumentando el compromiso del cliente desde todos sus canales
            de venta.
          </p>

          <div className={styles.containBtnContact}>
            <button className={styles.btnContact}>Contáctanos</button>
          </div>
        </div>
        <div className={styles.containImgReservs}>
          <Image className={styles.imgReservs} src={reservs} alt="Software" />
        </div>
      </div>
      <SectionDescription />

      <div className={styles.titleOfferContain}>
        <h3 className={styles.titleOffer}>
          Qué ofrece InDeveloper.co a las <span>empresas</span>
        </h3>
      </div>
      <OfferEnterprises />
      {/* * **********FUNCTIONS ENTERPRISES******** *  */}
      <div className={styles.titleFunctionContain}>
        <h3 className={styles.titleFunction}>
          Aspectos esenciales para la solución <span>empresarial</span>
        </h3>
      </div>
      <div className={styles.containImgFunctionsTextFlex}>
        <div className={styles.containImgGeo}>
          <Image
            className={styles.imgGeolocalization}
            src={geolocalitaton}
            alt="Geolocalización"
          />
        </div>
        <div className={styles.descriptionRightFlex}>
          <div className={styles.controlContainTextFlex}>
            <div className={styles.containIconControl}>
              <FontAwesomeIcon
                className={styles.iconControl}
                icon={faChartColumn}
              />
            </div>
            <div className={styles.containDescriptionControl}>
              <div className={styles.containTitleControl}>
                <h3 className={styles.titleControl}>
                  Panel de control central
                </h3>
              </div>
              <p className={styles.descriptionControl}>
                Supervise todas las sucursales desde un nivel ejecutivo,
                mientras que los directores regionales/locales gestionan
                sistemas específicos y visualizan KPIs relevantes. Controle su
                negocio viendo el rendimiento de cada sucursal, proveedor
                destacado y reseñas importantes. Acceda fácilmente a los
                subsistemas para realizar ajustes de configuración según sea
                necesario.
              </p>
            </div>
          </div>
          <div className={styles.controlContainTextFlex}>
            <div className={styles.containIconControl}>
              <FontAwesomeIcon
                className={styles.iconControl}
                icon={faChartGantt}
              />
            </div>
            <div className={styles.containDescriptionControl}>
              <div className={styles.containTitleControl}>
                <h3 className={styles.titleControl}>
                  Gestión simple por secciones
                </h3>
              </div>
              <p className={styles.descriptionControl}>
                Administre y pague de manera eficiente por todas las sucursales
                o subsistemas de su empresa desde una sola interfaz
                centralizada. Controle las suscripciones, SMS, reservas y
                créditos para recibos desde el panel de control central. Cada
                departamento puede tener requisitos únicos en funciones y
                reservas, determinando la suscripción correspondiente. Añadir o
                eliminar sucursales de la suscripción es simple y rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION GRID 4 */}
      <div className={styles.containGridFunctionDown}>
        <div className={styles.containInternGridFunction}>
          <div className={styles.containIconControl}>
            <FontAwesomeIcon
              className={styles.iconControl}
              icon={faMapLocationDot}
            />
          </div>
          <div className={styles.containDescriptionControl}>
            <div className={styles.containTitleControl}>
              <h3 className={styles.titleControl}>
                Complemento geolocalizador
              </h3>
            </div>
            <p className={styles.descriptionControl}>
              Si cuenta con múltiples sucursales distribuidas en una ciudad,
              país o en todo el mundo, nuestro servicio de geolocalización es
              perfecto para usted. Integre un mapa interactivo con las
              ubicaciones de sus sucursales en su página web para que sus
              clientes puedan localizar la más cercana y reservar una cita con
              facilidad.
            </p>
          </div>
        </div>
        <div className={styles.containInternGridFunction}>
          <div className={styles.containIconControl}>
            <FontAwesomeIcon className={styles.iconControl} icon={faLockOpen} />
          </div>
          <div className={styles.containDescriptionControl}>
            <div className={styles.containTitleControl}>
              <h3 className={styles.titleControl}>
                Niveles de acceso e inicio de sesión único (SSO)
              </h3>
            </div>
            <p className={styles.descriptionControl}>
              Si cuenta con múltiples sucursales en una ciudad, país o a nivel
              global, nuestro servicio de geolocalización es perfecto para
              usted. Incorpore un mapa interactivo con las ubicaciones de sus
              sucursales en su sitio web para que los clientes encuentren
              fácilmente la más cercana y puedan reservar citas directamente.
            </p>
          </div>
        </div>
        <div className={styles.containInternGridFunction}>
          <div className={styles.containIconControl}>
            <FontAwesomeIcon className={styles.iconControl} icon={faTicket} />
          </div>
          <div className={styles.containDescriptionControl}>
            <div className={styles.containTitleControl}>
              <h3 className={styles.titleControl}>Solución para recibos</h3>
            </div>
            <p className={styles.descriptionControl}>
              La función de recibos le permite enviar recibos automáticamente al
              reservar una cita. Después de la reserva, el cliente recibe su
              recibo por correo electrónico. Con nuestra aplicación de
              administrador o interfaz web, puede escanear el recibo cuando el
              cliente llegue. Utilice esta función para notificar a otros
              sistemas sobre la llegada del cliente.
            </p>
          </div>
        </div>
        <div className={styles.containInternGridFunction}>
          <div className={styles.containIconControl}>
            <FontAwesomeIcon className={styles.iconControl} icon={faGears} />
          </div>
          <div className={styles.containDescriptionControl}>
            <div className={styles.containTitleControl}>
              <h3 className={styles.titleControl}>Personalización</h3>
            </div>
            <p className={styles.descriptionControl}>
              Contamos con más de 60 funciones personalizadas diseñadas para
              optimizar su sistema de programación en línea según sus
              necesidades. Ya sea que necesite que sus clientes proporcionen
              información previa a la cita, acepten pagos al reservar o más,
              ofrecemos una variedad de opciones. Consulte con nuestros gestores
              de cuentas para descubrir qué funciones se adaptarán mejor a sus
              requerimientos.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.containImgAndText}>
        <div className={styles.containImgMap}>
          <Image className={styles.imgMaps} src={imgMaps} alt="Imagen Global" />
        </div>
        <div className={styles.textImgMpas}>
          <h3 className={styles.textMapsTitle}>
            <FontAwesomeIcon className={styles.iconMaps} icon={faLocationDot} />{" "}
            Global
          </h3>
          <p className={styles.textLocation}>
            Para empresas con presencia nacional e internacional, nuestra
            plataforma de programación ofrece la solución perfecta.
          </p>
        </div>
      </div>
      <div className={styles.containFinishContac}>
        <h3 className={styles.titleFinishContact}>
          ¡<span className={styles.textBlueInternFinish}>Incrementa </span> la
          tasa <br />{" "}
          <span className={styles.textBlueIntern2}>
            {" "}
            de conversión al facilitar la reserva de citas para tus clientes!
          </span>
        </h3>
        <p className={styles.descriptionFinishContac}>
          Contacta a nuestros expertos y descubre cómo InDeveloper.co puede
          optimizar la eficiencia de tu sitio web empresarial.
        </p>
        <div className={styles.containBtnContact}>
          <button className={styles.btnContact}>Contáctanos</button>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};
// https://simplybook.me/es/software-de-reservas-empresariales
export default Page;
