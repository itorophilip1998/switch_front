"use client";
import React, { useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import CustomImage from '../CustomImage';

interface ImageItem {
  name: string;
  currency: string;
  imageLink: string;
}

interface PromotionsCardProps {
  list: ImageItem[]; // Assuming list is passed as props
}

const PromotionsCard: React.FC<PromotionsCardProps> = ({ list }) => {
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

  return (
    <div className="productContainer">

      <div className="header ">
        <div className="col-md-8 col-xl-6">
          <h3 >
            Switchive
          </h3>
          <h1 >
            Gift Card
          </h1>
          <p className="d-none d-md-block">Purchase the Switchive gift card for instant checkout while shopping, balance top up or gift your loved ones to shop for their desired products on the switchive website.</p>

        </div>
        <div className="d-none d-md-block">
          <button className="btn btn-primary shadow-sm px-3">View All</button>
        </div>
      </div>

      <div className="products">
        <button className="btn leftBtn  d-none d-lg-block" onClick={scrollProductListToLeft}>
          <MdKeyboardArrowLeft />
        </button>
        <ul className="productList" ref={productListRef}>
          {list?.map((item, key) => (
            <li key={key}>
              <CustomImage src={item.imageLink} className="productImage" />
            </li>
          ))}
        </ul>
        <button className="btn rightBtn  d-none d-lg-block" onClick={scrollProductListToRight}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PromotionsCard;
