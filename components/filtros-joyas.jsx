import React from 'react';

export default function filtrosJoyas() {
  return (
    <>
        <div className='main-filtros'>
            <div className='container-filtros'>
                <h5>Filtrar Por</h5>

                <label for="ancho-select" className='label-ancho'>ANCHO (MM)</label>
                <select name="ancho-select" id="ancho-select" >
                    <option value="none"></option>
                    <option value="0.8"> 0.8 mm</option>
                    <option value="1">1 mm</option>
                    <option value="1.5">1.5 mm</option>
                </select>
                <hr />


                <label for="largo-select">LARGO (CM)</label>
                <select name="largo-select" id="largo-select">
                <option value="none"></option>
                    <option value="12">12 cm</option>
                    <option value="14">14 cm</option>
                    <option value="18">18 cm</option>
                </select>
                <hr />

                <label for="puntosDiamante-select">PUNTOS DIAMANTE</label>
                <select name="puntosDiamante-select" id="puntosDiamante-select">
                <option value="none"></option>
                    <option value="0-5"> 0-5</option>
                    <option value="5.1-10">5.1-10</option>
                    <option value="10.1-20">10.1-20</option>
                </select>
                <hr />
                
                <label for="quilataje-select">QUILATAJE</label>
                <select name="quilataje-select" id="quilataje-select">
                <option value="none"></option>
                    <option value="14"> 14k</option>

                </select>
                <hr />

                <label for="tipoPiedra-select">TIPO DE PIEDRA</label>
                <select name="tipoPiedra-select" id="tipoPiedra-select">
                <option value="none"></option>
                    <option value="Diamate">Diamante</option>
                    <option value="Zirconia">Zirconia</option>
                    <option value="Multiples Piedras">Multiples Piedras</option>
                </select>
                <hr />
            </div>
        </div>
    </>
  )
}
