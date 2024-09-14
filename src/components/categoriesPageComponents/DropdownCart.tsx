import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CustomImage from '@/components/CustomImage';
import {useRouter} from 'next/navigation';
import { removeItem } from "@/store/products/cartSlice";
import {  useDispatch } from "react-redux";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageUrl?: string;
  quantity?: number;
  productImage?:string;
}

interface EachProductProps {
    item: CartItemProps;
} 

const EachProduct: React.FC<EachProductProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(item?.quantity || 0);
  const dispatch = useDispatch();
  // console.debug(item)
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (quantity===1){
      // console.debug(quantity)
      dispatch(removeItem({id:item?.id}))   

    }
  };

  return (
    <li className="cartItemCollection my-3">
      <CustomImage fullSrc={item.productImage} />
      <div className="cartProductInfo ">
        <small className="text-bold d-block">
          {item?.name.slice(0, 12)}
          {item?.name?.length >= 12 && "..."}
        </small>
        <small>${item?.amount || 0}</small>
      </div>
      <div className="cartProductQuantity  cartOption">
        <button
          className="btn btn-sm"
          onClick={decrementQuantity}
          type="button"
        >
          {"-"}
        </button>
        <input
          className="form-control border-0 shadow-none"
          style={{ width: "30px" }}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
          type="text"
          inputMode="numeric"
        />
        <button
          className="btn btn-sm"
          onClick={incrementQuantity}
          type="button"
        >
          {"+"}
        </button>
      </div>
    </li>
  );
};

const DropdownCart  = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [isToggle, setToggle] = useState<boolean>(false); 
   const navigate=useRouter();
  //  if (!cartItems?.length) return
    return (
        <div className={`cartDropDown  shadow ${cartItems?.length ? '':'d-none'}`} >
            <ul className={`dropdown-menu p-3 shadow  ${isToggle ? 'show' : ''}`}>
                {/* <li className='closeCart' >
                    <button className="btn border btn-sm" type="button"   >
                        <RiCloseFill />
                    </button>
                </li> */}
                {cartItems?.slice(0,10)?.map((item: CartItemProps, key: number) => (
                    <EachProduct item={item} key={key} />
                ))}
     
            <li className="d-flex justify-content-around">
              <button className="btn primary-bg shadow text-white btn-sm" type="button" onClick={() => navigate.push('/categories/giftcard')} >
                Keep Shopping
              </button>
              <button className="btn muted-bg text-white shadow px-4 btn-sm" onClick={() => location.href = '/payment/checkout'} type="button">
                Checkout
              </button>
            </li> 

            </ul>
        </div>
    );
}

export default DropdownCart;
