"use client";
import React, { useEffect, useState } from "react";
import { reviewsListdummy, topProduct, desText } from "@/utils/dummy";
import CategoryProductCard from "@/components/productPageComponents/CategoryProductCard";
import CustomImage from "@/components/CustomImage";
import PayBox from "@/components/productPageComponents/PayBox";
import Reviews from "@/components/Reviews";
import ReactStars from "react-stars";
import DescriptionSVG from "@/components/productPageComponents/DescriptionSVG";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useSingleProductAPI } from "@/api/products";
import { Skeleton } from "primereact/skeleton";
interface ItemList {
  imageLink: string;
  title: string;
  id: number;
}

interface PageProps {
  params: { productId: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const l = searchParams.get("l") || "1";
  const textKey = `text${l}` as keyof typeof desText;
  const text = desText[textKey] || desText.text1;
  const { data } = useSingleProductAPI(params.productId);
  const product = data?.data?.data;

  if (!data) {
    return (
      <div className="container py-4  ">
        <div className="row">
          <Skeleton width="100%" height="3vh" className="mb-3"></Skeleton>

          <div className="col-md-4 p-0">
            <Skeleton width="20rem" height="30vh" className="mb-3"></Skeleton>
            <Skeleton width="20rem" height="10vh" className="mb-3"></Skeleton>
            <Skeleton width="20rem" height="34vh"></Skeleton>
          </div>
          <div className="col-md-8 p-0">
            <Skeleton width="100%" height="10vh" className="mb-4"></Skeleton>
            <Skeleton width="100%" height="10vh" className="mb-4"></Skeleton>
            <Skeleton width="100%" height="10vh" className="mb-4"></Skeleton>
            <Skeleton width="100%" height="40vh" className="mb-3"></Skeleton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product container">
      <div className="productDetails">
        <div className="header-Details px-4">
          <h4 className="title-text text-bold">{product?.name}</h4>
          <p>
            Pay with crypto, hassle-free. Buy {product?.name} with multiple
            cryptocurrencies, including Bitcoin, USDT, and more. Enjoy immediate
            delivery with no need for account setup.
          </p>
        </div>
        <div className="d-flex justify-content-between mx-0 desInfo">
          <div className="col-md-4 px-4">
            <div className="productsPageCard">
              <CustomImage fullSrc={product?.imageUrl} className={product?.isOutOfStock && 'outOfStockImage'} />
           
             {product?.isOutOfStock && <div className="outOfStockBanner">Out of stock</div>}
              <h4 className="text-bold text-uppercase">
                {product?.currency} {product?.maxAmountForDeduction} -{" "}
                {product?.minAmountForDeduction}
              </h4>
            </div>
            <div className="rBox mt-4">
              <h6 className="text-bold d-flex justify-content-between align-items-center">
                Reviews (12)
                <ReactStars
                  count={5}
                  value={4}
                  size={20}
                  color2={"#ffd333"}
                  className="stars d-inline-block"
                  edit={false}
                />
              </h6>
              <div className="reviewList">
                {reviewsListdummy?.map((item, key) => (
                  <Reviews item={item} key={key} />
                ))}
              </div>
            </div>
            <div className="watchList">
              <ul>
                <li>
                  <CustomImage src={"product/h1.svg"} /> Instant delivery
                </li>
                <li>
                  <CustomImage src={"product/h3.svg"} /> Lower network fees
                </li>
                <li>
                  <CustomImage src={"product/h2.svg"} /> Private and safe
                  payment
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 px-3">
            <div className={"desList"}>
              <DescriptionSVG name={"Description"} id={1} />
              <DescriptionSVG name={"How To Redeem"} id={2} />
              <DescriptionSVG name={"T&C"} id={3} />
            </div>
            <div className="descriptionList">
              {l === "1" && <p>{product?.desc}</p>}
              {l === "2" && <p>{product?.howToRedeem}</p>}
              {l === "3" && <p>{product?.termsAndCondition}</p>}
            </div>
            <PayBox product={product} />
          </div>
        </div>
      </div>
      {/* <div className="mt-5 container">
        <h1 className="otherProducth1">Other products</h1>
        <div className="categoriesCustomList otherproductList p-0">
          {topProduct?.slice(0, 12)?.map((item: ItemList, key: number) => (
            <CategoryProductCard key={key} item={item} />
          ))}
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/categories")}
          >
            See All
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
