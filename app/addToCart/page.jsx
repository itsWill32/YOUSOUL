import React from 'react';
import Navbar from '@/components/navbar';
import SectionSearch from '@/components/section-search';
import ShoppingCart from '@/components/shopping-cart';
import Footer from '@/components/footer';

export default function addToCart() {
  return (
        <>
            <Navbar/>
            <SectionSearch/>
            <ShoppingCart/>
            <Footer/>
        </>    
)
}
