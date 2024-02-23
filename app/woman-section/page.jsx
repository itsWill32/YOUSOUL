import React from 'react';
import Image from 'next/image';
import pulicidadMujer from "@/public/assets/publicidad-mujer.jpg"
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
        <Image src={pulicidadMujer} className='img-publi-woman'/>
        <FiltrosJoyas/>
        <CardsSection/>
        <Footer/>
    </>
    )
}
