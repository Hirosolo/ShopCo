import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Brand = {
  title: string;
  slug: string;
};

const brandsData: Brand[] = [
  {
    title: "Budweiser",
    slug: "/shop?brand=budweiser",
  },
  {
    title: "Chevrolet",
    slug: "/shop?brand=chevrolet",
  },
  {
    title: "Coca-Cola",
    slug: "/shop?brand=coca-cola",
  },
  {
    title: "Ducati",
    slug: "/shop?brand=ducati",
  },
  {
    title: "Grey Goose",
    slug: "/shop?brand=grey-goose",
  },
];

const BrandsSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      <h3 className="text-black font-bold text-lg mb-2">Brands</h3>
      {brandsData.map((brand, idx) => (
        <Link
          key={idx}
          href={brand.slug}
          className="flex items-center justify-between py-2 hover:text-black transition-colors"
        >
          {brand.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default BrandsSection;
