import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import anillo from "@/public/assets/anillo1.png";
import anillo2 from '../public/assets/anillo2.png';
import anillo3 from '../public/assets/anillo3.jpeg';
import anillo4 from '../public/assets/anillo4.png';
import anillo5 from '../public/assets/anillo5.png';
import collar1 from '../public/assets/collar1.png';
import collar2 from '../public/assets/collar2.png';
import collar3 from '../public/assets/collar3.png';
import Link from "next/link";

export default function cards() {
  return (
    <>
      <div className="main-cards-section">

        <div className="card-container-section">
          <Image src={anillo} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={anillo2} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={anillo2} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={anillo4} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>


      </div>

    <div className="main-cards-section-2">

        <div className="card-container-section">
          <Image src={anillo5} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={collar1} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={collar2} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>

        <div className="card-container-section">
          <Image src={collar3} className="card-img-section" width={200} height={180} />
          <h2 >Anillo oro amarillo 6mm</h2>
          <span className="price-joyas">$500</span>
          <div className="card-container-section-span">
            <Link href="./addToCart" className="card-shop-add"><span >Agregar al carrito</span></Link>
          </div>
        </div>


      </div>



    </>
  );
}
