import React from "react";
import Image from "next/image";
import Anillo4 from "@/public/assets/anillo4.png";
import Favoritos from "@/public/assets/favorito.png";
import FavoritosActivo from "@/public/assets/favorito-activo.png";
import Warranty from "@/public/assets/garantia.png";
import SecurePurchase from "@/public/assets/compra-segura.png";
import InterestFreeMonths from "@/public/assets/meses-sin-intereses.png";
import StorePickup from "@/public/assets/store-pickup.png";

 


export default function shoppingCart() {
  // const FavoritosFuntion = () => {
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var favoritosImg = document.querySelector('.favoritos-img');

  //     favoritosImg.addEventListener('click', function() {
  //         if (favoritosImg.src.includes('favorito.png')) {
  //             favoritosImg.src = 'favorito-activo.png';
  //         } else {
  //             favoritosImg.src = 'favorito.png';
  //         }
  //     });
  // });

  //     .favoritos-container {
  //       width: 10%;
  //       height: 57px;
  //       border: 2px solid black;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //   }

  //   .favoritos-img {
  //       width: 20px;
  //       height: 20px;
  //       cursor: pointer;
  //   }

  //   .favoritos-img:hover {
  //       background-color: red;
  //   }

  // }

  return (
    <>
      <div className="main-shop-cart">

        <div className="container-shop-cart">
          <div className="img-shop-cart">
            <Image src={Anillo4} width={450} height={450} />
          </div>

          <div className="section-description-shop">
            <div className="description-shop-cart">
              <h5>YOU SOUL</h5>
              <b>
                Jeulia Anillo Con Rama De Talla Redonda En <br /> Plata De Ley{" "}
              </b>
              <br />
              <p>MODELO: 585726</p>
              <p className="price-prouct-shop">$500</p>
              <p>
                <span>Hasta</span> 12 mensualidades de <span> $50.48 </span>
              </p>

              <hr style={{ marginBottom: "10%", marginTop: ".5%"}} />

              <label for="medidas-select-cart" className="label-medidas-cart">
                Medidas *
              </label>
              <select name="medidas-select-cart" id="medidas-select-cart">
                <option value="none">-- Por favor Seleccione--</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
              </select>

              {/* <div className="container-button-shop-cart">
                <button type="submit">Comprar Ahora</button>
                <div className="favoritos-container">
                  <Image className="favoritos-img" src={Favoritos}/>
                </div>
              </div> */}

              <div className="container-button-shop-cart">
                <button type="submit">Comprar Ahora</button>

                <div class="favoritos-container">
                  <input type="checkbox" id="favorito-toggle" />
                  <label for="favorito-toggle">
                    <Image
                      class="favoritos-img favorito-normal"
                      src={Favoritos}
                    />

                    <Image
                      class="favoritos-img favorito-activo"
                      src={FavoritosActivo}
                    />
                  </label>
                </div>
              </div>

              <p id="product-description">
                Amor pieza a pieza nos enseña que el amor se construye, se
                transforma, se cuida,
                <br /> procura y hasta se combina. Imagina poder portar en tu
                mano una serie de anillos que te
                <br /> recuerden que lo más importante en la vida es el amor.
                Hazlo realidad con esta pieza de
                <br /> oro rosa con 15 puntos de diamante.
              </p>

              <div className="container-items-shop">

                <div className="container-warranty-shop">
                  <Image  src={Warranty} width={40} height={40}/>
                  <span>GARANTIA DE <br /> SATISFACCION</span>
                </div>

                <div className="container-save-shop">
                  <Image  src={SecurePurchase} width={40} height={40} />
                  <span>COMPRA <br /> SEGURA</span>
                </div>

                <div className="container-months-shop">
                  <Image src={InterestFreeMonths} width={40} height={40} />
                  <span>MESES SIN <br /> INTERES</span>
                </div>

                <div className="container-store-shop">
                  <Image src={StorePickup} width={40} height={40} />
                  <span>STORE  <br />PICKUP</span>
                </div>
              </div>

              <p>Tiempos de entrega: 4 a 7 dias hábiles</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
