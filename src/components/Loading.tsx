 import React from 'react'; 
import CustomImage from "@/components/CustomImage"
export default function Loading() {
  return (
    <div className={'loadingOverlay'}>
      <div className={'wavingText'}>
        <span>
            <CustomImage src="logo.svg"/>
        </span>
        <span>w</span>
        <span>i</span>
        <span>c</span>
        <span>t</span>
        <span>h</span>
        <span>i</span>
        <span>v</span>
        <span>e</span>
      </div>
    </div>
  );
}
