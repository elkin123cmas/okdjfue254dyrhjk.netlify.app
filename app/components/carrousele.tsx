"use client";

import { FC } from "react";
import Slider from "react-slick";
import styles from "../styles/components/slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import slider1 from "../assets/imagenes/slider1.jpg";
import slider2 from "../assets/imagenes/slider2.jpg";
import sliderBarber from "../assets/imagenes/sliderBarber.jpg";
import sliderOdontology from "../assets/imagenes/sliderOdontology.jpg";
import sliderRestaurant from "../assets/imagenes/sliderRestaurant.jpg";

const Carrousele: FC = () => {
  // ****SLIDER*****
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };
  return (
    <div className={styles.containSlider}>
      <Slider {...settings}>
        <div className={styles.containImgSlider}>
          <Image
            className={styles.imgInternSlider}
            src={slider1}
            alt="Imagen principal"
            priority={true}
          />
          <div className={styles.containTextImgSlider}>
            <h2 className={styles.textInternImgSlider}>
              <span>Transformamos negocios!</span> <br /> con aplicaciones web premium. Somos la
              opción preferida en desarrollo web, destacándonos por soluciones
              innovadoras y eficientes que impulsan el éxito de nuestros
              clientes.
            </h2>
          </div>
        </div>
        <div className={styles.containImgSlider}>
          <Image
            className={styles.imgInternSlider}
            src={slider2}
            alt="Imagen principal"
          />
          <div className={styles.containTextImgSlider}>
            <h2 className={styles.textInternImgSlider}>
              <span>Creamos aplicaciones web!</span> <br /> personalizadas y adaptadas a tus
              necesidades específicas. Diseñamos soluciones a medida que
              impulsan la eficiencia de tu negocio. ¡Explora nuestros sistemas
              desarrollados y descubre cómo podemos ayudarte!
            </h2>
          </div>
        </div>
        <div className={styles.containImgSlider}>
          <Image
            className={styles.imgInternSlider}
            src={sliderBarber}
            alt="Imagen principal"
          />
          <div className={styles.containTextImgSlider}>
            <h2 className={styles.textInternImgSlider}>
              <span>Potencia tu barbería!</span> <br /> con herramientas que facilitan la reserva de
              citas, la gestión de clientes y el seguimiento de servicios,
              ofreciendo un ambiente más profesional y atractivo para tus
              clientes.
            </h2>
          </div>
        </div>
        <div className={styles.containImgSlider}>
          <Image
            className={styles.imgInternSlider}
            src={sliderOdontology}
            alt="Imagen principal"
          />
          <div className={styles.containTextImgSlider}>
            <h2 className={styles.textInternImgSlider1}>
             <span> Simplifica!</span> <br /> la gestión de tu consulta dental, facilitando la
              programación de citas y el seguimiento de historias clínicas,
              garantizando una atención eficiente y organizada para tus
              pacientes.
            </h2>
          </div>
        </div>
        <div className={styles.containImgSlider}>
          <Image
            className={styles.imgInternSlider}
            src={sliderRestaurant}
            alt="Imagen principal"
          />
          <div className={styles.containTextImgSlider}>
            <h2 className={styles.textInternImgSlider}>
              <span>Moderniza tu negocio gastronómico</span> <br /> con una plataforma que optimiza
              la gestión de pedidos, reservas y menús, mejorando la
              productividad y la experiencia del cliente en tu restaurante.
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Carrousele;
