'use client'
import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface PageProps {
    category: string;
    pos: number;
    name: string;
}

interface SideBarProps {
    subCategories: PageProps[];
}

const SideBar = ({ subCategories }: SideBarProps) => { 
  return (
    <div className="sideBar d-md-block d-none">
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          <SidebarContent subCategories={subCategories} />
        </Suspense>
      </ul>
    </div>
  );
}

const SidebarContent = ({ subCategories }: SideBarProps) => {
  const searchParams = useSearchParams();
  const typeSearch = searchParams.get('type');  
  const router = useRouter();

  const navigate = (type: string) => {
    router.push(`?type=${type}`);  
  };

  return (
    <>
      {subCategories?.map((item, key) => (
        <li
          key={key}
          className={typeSearch === item?.category ? 'sideBar-active' : ''}
          onClick={() => navigate(item?.category)}
        >
          {item?.name}
        </li>
      ))}
    </>
  );
};

export default SideBar;
