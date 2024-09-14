import CustomImage from '@/components/CustomImage';
import { companyFooter,businessFooter ,exchangeFooter,resourceFooter} from '@/utils/dummy';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

 
const Footer  = () => {
 
  return (
    <footer> 
      <div className="footerList container">
            <div className="logoFooter">
            <CustomImage src={'indexPage/navLogo.svg'} className="footerLogo" />

              <p>
              Lorem Ipsum is simply dummy text of  printing and typesetting industry Lorem Ipsum is simply dummy text of  printing and typesetting industry.
              </p>
              <p className="appStores">
            <CustomImage src={'indexPage/appStore.svg'} className="zoom"  />
            <CustomImage src={'indexPage/googleStore.svg'} className="zoom"   />

              </p>
        </div> 
     <ul>
        <h6>Company</h6>
        {companyFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Businesses</h6>
        {businessFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Exchange</h6>
        {exchangeFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h6>Resources</h6>
        {resourceFooter?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> 
      

     
      </div>

      <div className="container pb-3 mt-0 pt-0 mx-auto">
         <hr/>
         <div className="copyRight p-2">
            <span className="">Copyright 2022, Switchive

            </span>

            <div className='icons mt-3'>
              <button className="btn shadow"><FaFacebookF   /> </button>
              <button className="btn shadow"><FaXTwitter   /> </button>
              <button className="btn shadow"><FaLinkedinIn   /> </button>
              <button className="btn shadow"><RiInstagramFill   /> </button> 

            </div>

         </div>
             {/* <span className="d-block d-md-none">Copyright 2022, Switchive</span> */}
      </div>


     


    </footer>
  );
};

export default Footer;
