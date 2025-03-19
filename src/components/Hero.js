import { useState, useEffect } from 'react';
import countNumber from '../functions';

const Hero = ({ text, backdrop }) => {
   let [num, setNum] = useState(0);
   countNumber(num, setNum);
   return (
      <>
         <header className='bg-dark text-white p-5 fs-1 hero-container'>
            <h1 className='hero-text'>{text}</h1>
            { backdrop && 
               <div className='hero-backdrop' style={{backgroundImage: `url(${backdrop})`}}></div>
            }
         </header>
         <p className='d-inline-block fs-5 ms-5'>{num}</p>
      </>
   );
}

export default Hero;