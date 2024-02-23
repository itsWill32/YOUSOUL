import React from 'react';
import Image from 'next/image';
import publicidadUnisex from "@/public/assets/publicidad-unisex.jpg"
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
        <Image src={publicidadUnisex} className='img-publi-unisex'/>
        <FiltrosJoyas/>
        <CardsSection/>
        <Footer/>
    </>
    )
}
