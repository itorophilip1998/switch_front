"use client";
import React, { useEffect, useState } from "react";
// import { topProduct } from "@/utils/dummy";
import SideBar from "@/components/categoriesPageComponents/SideBar";
import Faq from "@/components/Faq";
import CategoryProductCard from "@/components/productPageComponents/CategoryProductCard";
import Pagination from "@/components/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
// import Loading from "@/components/Loading";
import { useParams, useSearchParams } from "next/navigation";
import { Skeleton } from "primereact/skeleton";
import { useProductAPI,useIpAddressAPI ,useLocationAPI} from "@/api/products";
import { useCategoriesAPI } from "@/api/categories";

const Page = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 32;
  const data = Array.from({ length: 60 }, (_, i) => `Item ${i + 1}`);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // const dispatch = useDispatch();
  const queryParams = useSearchParams();
  const typeSearch = queryParams.get("type");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const {categoryId} = useParams();
  const { data: categoriesData, isLoading: loadingCategory } =
    useCategoriesAPI();
  const { data:IpAddress} =  useIpAddressAPI();
  const { data:countryLocation} =  useLocationAPI(IpAddress);
 
  const categories = categoriesData?.data;
  const payload = `page=1&limit=${32}&productCategoryType=${typeSearch ?? categoryId}&country=${countryLocation?.country}`;
 
  const { data: productData, isLoading: loadingProduct } =  useProductAPI(payload);
  const products = productData;
 
  // filtered Categories
  const filteredCategories = Array.isArray(categories)
    ? categories?.filter(
        (category: any) =>
          category?.category === categoryId
      )
    : [];
   
  return (
    <div className={"containerLayout "}>
      <div className="categories">
        {loadingCategory ? (
          <Skeleton width="70rem" height="600px" borderRadius=".4rem" />
        ) : (
          <SideBar subCategories={filteredCategories[0]?.subCategories} />
        )}
        <div
          className={`categoriesCustomList ${
            !products?.data?.length && !loadingProduct ? "m-auto" : ""
          }`}
        >
          {loadingProduct ? (
            <MultipleLoader />
          ) : products?.data?.length > 0 ? (
            products?.data.map((item: any, key: number) => (
              <CategoryProductCard key={key} item={item} />
            ))
          ) : (
            <div className="text-center d-flex justify-content-center align-items-center m-auto">
              No Products Found
            </div>
          )}
        </div>
      </div>

      {/* {products?.meta ? (
        <Pagination
          currentPage={products?.meta?.currentPage}
          totalPages={products?.meta?.totalPages}
          onPageChange={handlePageChange}
        />
      ) : (
        ""
      )} */}
      <Faq />
    </div>
  );
};

const MultipleLoader = () => {
  return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className=" mb-4">
          <Skeleton width="100%" height="150px" borderRadius=".4rem" />
          <div className="flex justify-content-between my-3">
            <Skeleton width="13rem" height="1rem" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;
