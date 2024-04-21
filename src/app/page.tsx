"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import person from "../app/assets/imagenes/imgPrincipal.jpg";
import back from "../app/assets/imagenes/img-back.jpg";
import enterprises from "../app/assets/imagenes/img-empresa.jpg";
import styles from "./styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect, useRef, useState } from "react";
import Carrousele from "./components/carrousele";
import DesignerLot from "./components/designerLottie";
import seo from "../app/assets/imagenes/imgSeo (1).jpg";
import web from "../app/assets/imagenes/imgWeb (1).jpg";
import crm from "../app/assets/imagenes/imgCrm (1).jpg";
import change from "../app/assets/imagenes/imgChange (1).jpg";
import reservs from "../app/assets/imagenes/imgReservs.jpg";
import SectionDescription from "./components/sectionDescription";
import OfferEnterprises from "./components/offerEnterprises";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.containHeader}>
        <div className={styles.containInternHeaderFlex}>
          <div className={styles.ensayo}>
            <div className={styles.containLogo}>
              <h2 className={styles.logoIntern}>Logo</h2>
            </div>
            <div onClick={handelVisible} className={styles.containIconHamburg}>
              <FontAwesomeIcon className={styles.iconHamburg} icon={faBurger} />
            </div>
          </div>

          <div
            className={styles.containAddMenuinternNone}
            style={{ height: isVisible ? "20vh" : "0" }}
          >
            <div className={styles.containMenu}>
              <li className={styles.listIntern}>Inicio</li>
              <li className={styles.listIntern}>Trabajos</li>
              <li className={styles.listIntern}>Contacto</li>
              <li className={styles.listIntern}>Latinoamerica</li>
            </div>
          </div>

          <button className={styles.btnContactIntern}>Contactáctanos</button>
        </div>
      </div>
      {/* ********SLIDER******* */}
      <div>
        <Carrousele />
      </div>
      <div className={styles.containOurEnterprisesFlex}>
        <div className={styles.containImgEnterprises}>
          <DesignerLot />
        </div>
        <div className={styles.containTextOur5Enterprises}>
          <h3 className={styles.textTitle}>Nuestra Empresa</h3>
          <p id="revealText" className={styles.textInterEnterprises}>
            En InDeveloper, estamos dedicados a la creación de aplicativos web
            innovadores que impulsan el éxito y la transformación digital. Nos
            especializamos en el desarrollo ágil y personalizado de soluciones
            web adaptadas a las necesidades únicas de nuestros clientes.
          </p>
        </div>
      </div>
      <div className={styles.containTitlePrincipal}>
        <h3 className={styles.titlePrincipal}>InDeveloper-Posicionamiento</h3>
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
      <div>
        <SectionDescription />
      </div>
      <div className={styles.titleOfferContain}>
        <h3 className={styles.titleOffer}>
          Qué ofrece InDeveloper a las <span>empresas</span> 
        </h3>
      </div>
      <div>
        <OfferEnterprises/>
      </div>
    </div>
  );
};
// https://simplybook.me/es/software-de-reservas-empresariales
export default Page;
