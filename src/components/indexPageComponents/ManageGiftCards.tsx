import React from 'react'
import CustomImage from '../CustomImage'

function ManageGiftCards() {
  return (
    <div className=" my-0  ManageGiftCards">
        <div className="row m-0 align-items-center">
      <div className="col-md-6">
        <h1>
        Manage from <br/> anywhere

        </h1>
        <p>
        Save your gift cards in your Switchive Wallet to access them easily from your computer or smartphone.

        </p>
        <button className="btn btn-primary shadow-sm px-3 ">Check Wallet</button>

      </div>
      <div className="col-md-6  d-none d-lg-block">
      <CustomImage src={'indexPage/manageCards.svg'} />

      </div>
        </div>
    </div>
  )
}

export default ManageGiftCards