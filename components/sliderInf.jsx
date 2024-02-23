import React from 'react';
import Image from 'next/image';
import anillo from '../public/assets/anillo1.png';
import anillo2 from '../public/assets/anillo2.png';
import anillo4 from '../public/assets/anillo4.png';
import anillo5 from '../public/assets/anillo5.png';
import collar1 from '../public/assets/collar1.png';
import collar2 from '../public/assets/collar2.png';
import collar3 from '../public/assets/collar3.png';

export default function sliderInf() {
    return (
    <>
    <div className='slider-main'>
        <div className='slider-container'>
            <div className='slide'><span><Image src={anillo} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo2} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo2} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo4} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo5} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar1} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar2} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar3} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo4} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={anillo5} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar1} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar2} width={300} height={300}/></span></div>
            <div className='slide'><span><Image src={collar3} width={300} height={300}/></span></div>
        </div>
        <div className='fade'></div>
    </div>
</>
);
}
