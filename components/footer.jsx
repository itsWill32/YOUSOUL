import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "@/public/assets/instagram-footer.png";
import facebook from "@/public/assets/facebook-footer.png";
import youtube from "@/public/assets/youtube-footer.png";
import tiktok from "@/public/assets/tik-tok-footer.png";
import twitter from "@/public/assets/twitter-footer.png";
import pinterest from "@/public/assets/pinterest-footer.png";

export default function footer() {
  return (
    <>
      <footer className="main-footer">
        
        <div className="container-footer">
          <div className="section-acerca-footer">
            <h5>ACERCA DE YOU SOUL</h5>
            <br/>
            <p>Nosotros</p>
            <p>Sucursales</p>
            <p>Promociones en Sucursales</p>
            <p>Circulo YOU SOUL</p>
          </div>
          <div className="section-legales-footer">
            <h5>LEGALES</h5>
            <br />
            <p>Terminos y Condiciones</p>
            <p>Aviso de Privacidad</p>
            <p>Promocion Restricciones Vigentes</p>
            <p>Beneficios Online YOU SOUL</p>
          </div>
          <div className="section-ayuda-footer">
            <h5>AYUDA</h5>
            <br />
            <p>Preguntas Frecuentes</p>
            <p>¿Como Comprar?</p>
            <p>Metodos de Pago</p>
            <p>Facturacion en Linea</p>
          </div>
          <div className="section-contactos-footer">
            <h5>CONTACTANOS</h5>
            <br />
            <p>Horarios: L-V 8:00 a 20:00 hrs</p>
            <p>Festivos de 12:00 a 17:00 hrs</p>
            <p>
              Correo <br /> <Link href="#" className="link-correo-footer"> yousoul@gmail.com </Link>
            </p>
            <p>
              Telefono <br /> <Link href="#" className="link-numero-footer" > 967 166 4639 </Link>
            </p>
          </div>
        </div>
        <hr className="divisor-footer"/>
        <div className="redes-footer-container">
            <p>Copyright © 2024 YOU SOUL</p>
            <div className="img-redes-footer">
                <Link href="#"><Image src={instagram}  width={30} height={30}></Image> </Link>
                <Link href="#"><Image src={facebook}   width={30} height={30}></Image> </Link>
                <Link href="#"><Image src={youtube}  width={30} height={30}></Image> </Link>
                <Link href="#"><Image src={twitter}  width={30} height={30}></Image> </Link>
                <Link href="#"><Image src={tiktok}  width={30} height={30}></Image> </Link>
                <Link href="#"><Image src={pinterest}  width={30} height={30}></Image> </Link>
            </div>
        </div>
      </footer>

    </>
  );
}
