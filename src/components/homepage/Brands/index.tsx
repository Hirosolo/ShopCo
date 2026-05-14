import React from "react";

const brandsData: { id: string; label: string }[] = [
  {
    id: "marvel-avengers-endgame",
    label: "MARVEL | Avengers: Endgame",
  },
  {
    id: "dc-the-dark-knight",
    label: "DC | The Dark Knight",
  },
  {
    id: "marvel-spider-verse",
    label: "MARVEL | Spider-Man: Into the Spider-Verse",
  },
  {
    id: "dc-joker",
    label: "DC | Joker",
  },
  {
    id: "marvel-logan",
    label: "MARVEL | Logan",
  },
  {
    id: "dc-the-batman",
    label: "DC | The Batman",
  },
  {
    id: "marvel-civil-war",
    label: "MARVEL | Captain America: Civil War",
  },
  {
    id: "dc-watchmen",
    label: "DC | Watchmen",
  },
];

const Brands = () => {
  const marqueeData = [...brandsData, ...brandsData];

  return (
    <div className="bg-black overflow-hidden">
      <div className="max-w-frame mx-auto py-5 md:py-7">
        <div className="animate-brands-marquee flex w-max items-center gap-4 sm:gap-6 px-4 xl:px-0">
          {marqueeData.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="rounded-full border border-white/25 bg-white/10 px-4 sm:px-6 py-2.5 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-white whitespace-nowrap"
            >
              {brand.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
