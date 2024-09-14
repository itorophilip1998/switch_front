 
import {ProductsCard,HeroBG,GiftCard, Promotions,ManageGiftCards,CategoriesCard,SupportedBlockchains,BlogCards} from '@/components/indexPageComponents';
import { giftCard, newProducts, popularProducts,promotionsDetails,categoryCards ,blockChainList,blogCard} from '@/utils/dummy'
import React from 'react'

function page() {
  return (
    <div className="indexPage">
      <HeroBG/> 
       {/* Popular/New products */}
      <div className="container  ">
      <ProductsCard imageList={popularProducts} location={"USA"} slug={"Popular"} url={"top-product"}/> 
      <ProductsCard imageList={newProducts} location={"USA"} slug={"New"} url={"new-product"}/>  
      <GiftCard list={giftCard} />   
      <Promotions list={promotionsDetails} />   
      <ManageGiftCards   />   
      <CategoriesCard list={categoryCards} />   
      <SupportedBlockchains list={blockChainList} />   
      <BlogCards list={blogCard} />   
      </div>
    </div>
  )
}

export default page