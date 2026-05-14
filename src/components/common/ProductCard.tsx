import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
      className="flex flex-col items-start aspect-auto"
    >
      <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
        <Image
          src={data.srcUrl}
          width={295}
          height={298}
          className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-indigo-50 text-indigo-700 text-sm font-semibold uppercase px-2 py-0.5 rounded-md">
          {data.brand}
        </span>
        <span className="text-black/30 text-sm">•</span>
        <span className="bg-amber-50 text-amber-700 text-sm font-semibold uppercase px-2 py-0.5 rounded-md">
          {data.category}
        </span>
      </div>
      <strong className="text-black xl:text-xl">{data.title}</strong>
      <div className="flex items-end mb-1 xl:mb-2">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={19}
          readonly
        />
        <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>
      <div className="flex items-center space-x-[5px] xl:space-x-2.5">
        {data.discount.percentage > 0 ? (
          <span className="font-extrabold text-black text-2xl xl:text-3xl">
            {`$${Math.round(
              data.price - (data.price * data.discount.percentage) / 100
            )}`}
          </span>
        ) : data.discount.amount > 0 ? (
          <span className="font-extrabold text-black text-2xl xl:text-3xl">
            {`$${data.price - data.discount.amount}`}
          </span>
        ) : (
          <span className="font-extrabold text-black text-2xl xl:text-3xl">
            ${data.price}
          </span>
        )}
        {data.discount.percentage > 0 && (
          <span className="font-semibold text-black/50 line-through text-sm xl:text-sm ml-3">
            ${data.price}
          </span>
        )}
        {data.discount.amount > 0 && (
          <span className="font-semibold text-black/50 line-through text-sm xl:text-sm ml-3">
            ${data.price}
          </span>
        )}
        {data.discount.percentage > 0 ? (
          <span className="font-semibold text-xs py-1 px-2.5 rounded-md bg-[#FF3333] text-white shadow-sm ml-2">
            {`-${data.discount.percentage}%`}
          </span>
        ) : (
          data.discount.amount > 0 && (
            <span className="font-semibold text-xs py-1 px-2.5 rounded-md bg-[#FF3333] text-white shadow-sm ml-2">
              {`-$${data.discount.amount}`}
            </span>
          )
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
