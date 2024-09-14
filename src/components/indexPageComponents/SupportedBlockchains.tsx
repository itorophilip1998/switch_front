'use client';
import React, { useRef, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';

interface ImageItem {
  imageLink: string;
}

interface SupportedBlockchainsProps {
  list: ImageItem[];
}

const SupportedBlockchains: React.FC<SupportedBlockchainsProps> = ({ list }) => {
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
      className="productContainer SupportedBlockchains"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <h1 className="font-weight-bold text-center mb-4">Supported Blockchains</h1>
      <div className="products">
        <button className="btn leftBtn d-none d-lg-block" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item.imageLink} />
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

export default SupportedBlockchains;
