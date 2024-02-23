import React from "react";
import logo from "@/public/assets/craneo.png";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <>
      <header class="main-nav">

        <div class="container-nav">

          <nav class="nav-header">
            <span>
              <Image src={logo} alt="logo" width={80} height={80} />
            </span>
            <a href="./" class="nav-header-title">
              YOU SOUL
            </a>

            <div className="nav-select">
              <Link  href="#" class="nav-link-header">
                Cuenta
              </Link>
              <Link href="#" class="nav-link-header">
                Carrito
              </Link>
            </div>

          </nav>

        </div>

      </header>
    </>
  );
}
