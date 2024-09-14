'use client';
import React, { useRef, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import CustomImage from '../CustomImage';
import { useRouter } from 'next/navigation';

interface ImageItem {
  imageLink: string;
}

interface ProductsCardProps {
  imageList: ImageItem[];
  location: string;
  slug: string;
  url?: string;
}

const ProductsCard: React.FC<ProductsCardProps> = ({ imageList, location, slug, url }) => {
  const productListRef = useRef<HTMLUListElement>(null);
  const animationFrameRef = useRef<number | null>(null); 
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollProductList = () => {
    if (productListRef.current) {
      const scrollWidth = productListRef.current.scrollWidth;
      const clientWidth = productListRef.current.clientWidth;
      if (productListRef.current.scrollLeft >= (scrollWidth - clientWidth)) {
        productListRef.current.scrollTo({ left: 0 });
      } else {
        productListRef.current.scrollBy({ left: 1, behavior: 'smooth' });
      }
      animationFrameRef.current = requestAnimationFrame(scrollProductList);
    }
  };

  const startAutoScroll = () => {
    scrollProductList();
    scrollIntervalRef.current = setInterval(() => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      pauseIntervalRef.current = setTimeout(() => {
        scrollProductList();
      }, 2000);
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    if (pauseIntervalRef.current) {
      clearTimeout(pauseIntervalRef.current);
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);
  const navigate = useRouter();

  return (
    <div
      className="productContainer px-0 "
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="header">
        <h4>
          {slug} Products in <span className="location_text">{location}</span>
        </h4>
        <div className="d-none d-md-block">
          <button
            className="btn btn-primary shadow-sm px-4"
            onClick={() => navigate.push(`/categories?type=${url}`)}
          >
            View All
          </button>
        </div>
      </div>
      <div className="products">
        <button
          className="btn leftBtn d-none d-lg-block"
          onClick={() => productListRef.current && (productListRef.current.scrollLeft -= 200)}
        >
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList py-4" ref={productListRef}>
          {imageList?.map((item:any, key:number) => (
            <li key={key} className="zoom link" onClick={() => navigate.push(`/categories?type=${item?.slug}`)}>
              <CustomImage src={item?.imageLink} className="productImage" />
            </li>
          ))}
        </ul>
        <button
          className="btn rightBtn d-none d-lg-block"
          onClick={() => productListRef.current && (productListRef.current.scrollLeft += 200)}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
