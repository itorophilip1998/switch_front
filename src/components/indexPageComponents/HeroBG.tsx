 "use client"
import React, { useEffect, useState } from 'react'
import CustomImage from '../CustomImage'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import Typical from 'react-typical';


function HeroBG() {
  const texts = ["Doge", "Tron", "Tether", "Litecoin", "Solana", "Bitcoin", "Ethereum", "Polygon"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts?.length]);
  return ( 
      <div className='heroBg'> 
      
        <div className="bgHeroContainer ">
        <CustomImage src={"indexPage/heroBG.png"} />
        </div>
 
           <div className="textHeroBg container ">
            <div className="d-flex ">
               <div className=" first-bg-class    pt-4 ">
                     <CustomImage src={"indexPage/illustration.svg"} className={'topImage'}  />

                  <h1 >
                  Shop with  
                     <Typical steps={[texts[index], 2000]} loop={1} wrapper="p" className="Typical" /> <br/>
                  {/* and Earn Points */}
                  </h1>
            <p>Make mobile top-ups, buy gift cards and pay bills with crypto for more than 14,000 products in over 170 countries.
                    {/* and earn points. */}
                  </p>
                  <Link className='link zoom linkText text-white d-block md-w-50 shadow-none pl-0 mt-5' href="/categories">Explore more
                  <FaLongArrowAltRight  className='mx-5'/>

                  </Link>
                </div> 
                <div className="   d-none d-xl-block imgherobg">
                <CustomImage src={"indexPage/sideHeroBg.svg"}  />
                    
                </div>
            </div>
        </div>
      </div> 
  )
}

export default HeroBG