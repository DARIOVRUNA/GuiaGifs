import React from "react";
import Image from "next/image";
import RatingStars from "./components/rating-stars/RatingStars";

export interface GiftItemProps {
  title: string;
  gifImageUrl: string;
  price: number;
}

export const GifItem = ({ title, gifImageUrl, price }: GiftItemProps) => {
  console.log(title, gifImageUrl, price);

  return (
    <div className="  w-full   max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-48">
        <a href="#">
          <Image
            priority={false}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            src={gifImageUrl}
            alt="product image"
          />
        </a>
      </div>
      <div className="px-5 pb-5 ">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <RatingStars />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-red-900 dark:text-white">
            ${price}
          </span>
          <a href="#" className="btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default GifItem;
