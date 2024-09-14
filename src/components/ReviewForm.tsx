"use client";
import React, { useState } from "react";
import ReactStars from "react-stars";

export default function ReviewForm({ productId }: { productId: string }) {
  const [ratings, setRatings] = useState<number>(0);
  const [review, setReviews] = useState<string>();
  const [name, setName] = useState<string>();

  const handleSubmit = () => {
    const formData = {
      ratings,
      review,
      name,
    };
    // sendTo API
  };

  return (
    <div className="ReviewForm ">
      <ReactStars
        count={5}
        value={ratings}
        size={26}
        color1={"rgb(177 175 175)"} 
        color2={"#ffd333"} 
        className="starsBox text-center mt-4 mb-3"
        edit={true}
      />
      <p>Click the stars to rate this product</p>
      <input
        type="text"
        placeholder="Name (required)"
        onChange={(e) => setName(e.target.value)}
        className="form-control shadow my-4"
      />
      <textarea
        cols={30}
        rows={6}
        onChange={(e) => setReviews(e.target.value)}
        placeholder="Write your review"
        className="form-control shadow"
      ></textarea>
      <button className="btn btn-primary px-5 mt-4" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
