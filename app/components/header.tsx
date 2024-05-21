"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/header.module.css";
import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollServices, setIsScrollServices] = useState(false);
  const [isSublist, setISublist] = useState(false);
  // const [currentPath, setCurrentPath] = useState("");
  ///////////////////////
  const contentRef = useRef<HTMLDivElement>(null);

  /////////////////////////

  const handleEnter = () => {
    setISublist(true);
  };
  const handleLeave = () => {
    setISublist(false);
  };

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

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // setCurrentPath(window.location.pathname);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   setCurrentPath(window.location.pathname);
  // }, [currentPath]);

  return (
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
          style={{ height: isVisible ? "25vh" : "0" }}
        >
          <div className={styles.containMenu}>
            <Link
              className={
                styles.listIntern
                // (window.location.pathname === "/"
                //   ? ` ${styles.listInternUnderline}`
                //   : "")
              }
              href={"/"}
            >
              {" "}
              <li>Empresas</li>
            </Link>
            <Link
              className={
                styles.listIntern
                // (window.location.pathname === "/dashboard"
                //   ? ` ${styles.listInternUnderline}`
                //   : "")
              }
              href="/functionality"
            >
              <li>
                {" "}
                Funciones
                {/* {isSublist && (
                <div className={`${styles.containIndustries} ${isSublist ? styles.show : ""}`}>
                  <ul className={styles.containSubList}>
                    <li className={styles.subListIntern}>Belleza & Bienestar</li>
                    <li className={styles.subListIntern}>Deportes & Fitness</li>
                    <li className={styles.subListIntern}>Tattoo & Diseño</li>
                  </ul>
                </div>
              )} */}
              </li>
            </Link>

            <Link
              className={
                styles.listIntern
                // (window.location.pathname === "/dashboard"
                //   ? ` ${styles.listInternUnderline}`
                //   : "")
              }
              href="/dashboard"
            >
              {" "}
              <li>Precio</li>
            </Link>
            <Link
              className={
                styles.listIntern
                // (window.location.pathname === "/dashboard"
                //   ? ` ${styles.listInternUnderline}`
                //   : "")
              }
              href="/contact"
            >
              <li>Contacto</li>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <button className={styles.btnContactIntern}>Contactáctanos</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
