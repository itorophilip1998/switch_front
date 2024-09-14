'use client'
import React from 'react'
import CustomImage from '../CustomImage'
import { useRouter } from 'next/navigation';

interface ProductsItemsProps{
    item:itemList;
}

interface itemList {
  imageUrl: string;
  name: string;
  id: number;
}

const CategoryProductCard:React.FC<any> =  ({item}) =>{
  const navigate=useRouter();
 const handleNavigation=()=>{ 
    localStorage.setItem(`currentProduct`, JSON.stringify(item));
    navigate.push(`/products/${item?.id}`)
 }
const isValidUrl = (url: string) =>url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/') 
 
 

  return ( 
        <div className={"card"} style={{ width: "18rem" }} onClick={handleNavigation}>
          <CustomImage 
            fullSrc={isValidUrl(item?.imageUrl)? item?.imageUrl : '/images/dummy-product.webp'}   
            className={`card-img-top ${item?.isOutOfStock && 'outOfStockImage'}`} 
          />
             {item?.isOutOfStock && <div className="outOfStockBannerCategories">Out of stock</div>}

          <div className={"card-body px-0"}>
            <p className={"card-text"}>
              {item?.name ?? item?.title}  
            </p>
          </div>
        </div>
     
  )
}

export default CategoryProductCard