import React from 'react';
import Image from 'next/image';
import pulicidadHombre from "@/public/assets/publicidad-hombre.jpg"
import Navbar from '@/components/navbar';
import SectionSearch from '@/components/section-search';
import FiltrosJoyas from '@/components/filtros-joyas';
import CardsSection from '@/components/cards-section';
import Footer from '@/components/footer';


export default function sectionMen() {
  return (
    <>
        <Navbar/>
        <SectionSearch/>
        <Image src={pulicidadHombre} className='img-publi-men'/>
        <FiltrosJoyas/>
        <CardsSection/>
        <Footer/>
    </>
    )
}
