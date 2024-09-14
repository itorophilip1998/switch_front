'use client' 
import React  from 'react'; 
import {useRouter, useSearchParams } from 'next/navigation';  


const DescriptionSVG = ({name,id}:{name:string,id:number}) => { 

const  active="rgba(236, 32, 39, 0.5)";
const initial="#EC2027";
  const searchParams = useSearchParams(); 
  const router = useRouter();

  const l = searchParams.get('l') || 1;  

  const navigate = () => {
    router.push(`?l=${id}`);  
  };

  return (
    <svg width="259" className="link zoom"  onClick={() => navigate()}  height="57" viewBox="0 0 259 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M182.855 0.125732L216.681 27.5146L182.855 56.0773H0.717346L34.5429 27.5146L0.717346 0.125732H182.855Z" fill={l==id?initial:active}  />
      <path d="M224.486 0.125732L258.312 27.5146L224.486 56.0773H42.3489L76.1744 27.5146L42.3489 0.125732H224.486Z" fill="#214293" />
      <text x="58%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="17" fontWeight="normal">
        {name}
      </text>
    </svg>
  );
};

export default DescriptionSVG;
