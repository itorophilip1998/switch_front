"use client";
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';
import {useRouter} from 'next/navigation';

interface ImageItem { 
  imageLink: string;
  title:string;
}

interface BlogCardsProps {
  list: ImageItem[]; // Assuming list is passed as props
}

const BlogCards: React.FC<BlogCardsProps> = ({ list }) => {
  const productListRef = useRef<HTMLUListElement>(null);

  const scrollProductListToLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollProductListToRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
 const navigate =useRouter()

  return (
    <div className="productContainer BlogCards">  
    <div className="blogTxt mb-4">
      <div></div>
      <div>---- Blog ----</div>
      <div></div>
    </div>
    {/* <h1 className="font-weight-bold  text-center mb-4">Supported Blockchains</h1> */}
      <div className="products">
        <button className="btn leftBtn  d-none d-lg-block" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList py-4" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key} className="zoom link">
               <div className="card mx-1" style={{width: "375px"}}>
             <CustomImage src={item?.imageLink} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title text-bold ">{item?.title}</h5>
                <p className="card-text">Some quick example text to build on the card.</p>
                
            </div>
            </div> 
            </li>
          ))}
        </ul>
        <button className="btn rightBtn  d-none d-lg-block" onClick={scrollProductListToRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
      <div className="text-center mt-4">
      <button className="btn btn-primary shadow-sm px-3 ">Show More</button>

      </div>
    </div>
  );
};

export default BlogCards;
