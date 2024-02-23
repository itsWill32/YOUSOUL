import Link from "next/link";
import React from "react";

export default function sectionSearch() {
  return (
    <>
      <div className="main-section">

        <div className="container-options">

          <span className="options-nav" >  
            <Link href="./woman-section" className="link-section-mujer">
              JOYERIA MUJER
            </Link>
            <div className="dropdown">
              <Link href="./woman-section" className="dropdown-link">Anillos</Link>
              <hr />
              <Link href="./woman-section"  className="dropdown-link">Cadenas</Link>
            </div>
          </span>

          <span className="options-nav">  
            <Link href="./men-section" className="link-section-hombre">
              JOYERIA HOMBRE
            </Link>
            <div className="dropdown">
              <Link href="./men-section" className="dropdown-link">Anillos</Link>
              <hr />
              <Link href="./men-section"  className="dropdown-link">Cadenas</Link>
            </div>
          </span>

          <span className="options-nav">
            <Link href="./unisex-section" className="link-section-unisex">
              JOYERIA UNISEX
            </Link>
            <div className="dropdown">
              <Link href="./unisex-section" className="dropdown-link">Anillos</Link>
              <hr />
              <Link href="./unisex-section"  className="dropdown-link">Cadenas</Link>
            </div>
          </span>

        </div>

        <div>

          <span className="container-input-search">
            <input type="text" placeholder="Search" />
          </span>
        </div>

      </div>
    </>
  );
}
