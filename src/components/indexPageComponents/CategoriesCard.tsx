'use client';
import React, { useRef, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';
import { useRouter } from 'next/navigation';

interface ImageItem {
  name: string;
  imageLink: string;
}

interface PromotionsCardProps {
  list: ImageItem[];
}

const CategoriesCard: React.FC<PromotionsCardProps> = ({ list }) => {
  const productListRef = useRef<HTMLUListElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useRouter();

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
      }, 1000);
    }, 5000);
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

  return (
    <div
      className="productContainer categoresCardList"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >      
      <div className="products">
        <button className="btn leftBtn d-none d-lg-block" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key} className="zoom py-4" onClick={() => navigate.push(`/categories/${item?.name}`)}>
              <CustomImage src={item.imageLink} className="productImage link" />
            </li>
          ))}
        </ul>
        <button className="btn rightBtn d-none d-lg-block" onClick={scrollProductListToRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
