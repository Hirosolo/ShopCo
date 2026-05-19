import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const brandSections = [
  {
    id: "business",
    title: "Business",
    items: [
      { id: 101, label: "Budweiser", url: "/shop#brands" },
      { id: 102, label: "Chevrolet", url: "/shop#brands" },
      { id: 103, label: "Coca-Cola", url: "/shop#brands" },
      { id: 104, label: "Ducati", url: "/shop#brands" },
      { id: 105, label: "Grey Goose", url: "/shop#brands" },
      { id: 106, label: "Guinness", url: "/shop#brands" },
      { id: 107, label: "Harley-Davidson", url: "/shop#brands" },
      { id: 108, label: "Indian Motorcycle", url: "/shop#brands" },
      { id: 109, label: "Jack Daniel's", url: "/shop#brands" },
      { id: 110, label: "Jeep", url: "/shop#brands" },
      { id: 111, label: "Marlboro", url: "/shop#brands" },
      { id: 112, label: "Monster Energy", url: "/shop#brands" },
      { id: 113, label: "Starbucks", url: "/shop#brands" },
      { id: 114, label: "The Famous Grouse", url: "/shop#brands" },
      { id: 115, label: "The Kraken", url: "/shop#brands" },
    ],
  },
  {
    id: "culture",
    title: "Culture",
    items: [
      { id: 201, label: "Alpha Kappa Alpha", url: "/shop#brands" },
      { id: 202, label: "America", url: "/shop#brands" },
      { id: 203, label: "Bob Kevoian", url: "/shop#brands" },
      { id: 204, label: "Calvin and Hobbes", url: "/shop#brands" },
      { id: 205, label: "Captain Morgan", url: "/shop#brands" },
      { id: 206, label: "Father's Day", url: "/shop#brands" },
      { id: 207, label: "Independence Hall", url: "/shop#brands" },
      { id: 208, label: "Mother's Day", url: "/shop#brands" },
      { id: 209, label: "Peanuts", url: "/shop#brands" },
      { id: 210, label: "Route 66", url: "/shop#brands" },
      { id: 211, label: "Royal Navy", url: "/shop#brands" },
      { id: 212, label: "Smokey Bear", url: "/shop#brands" },
      { id: 213, label: "US Marine Corps", url: "/shop#brands" },
      { id: 214, label: "US Navy", url: "/shop#brands" },
      { id: 215, label: "USA", url: "/shop#brands" },
      { id: 216, label: "Veteran Day", url: "/shop#brands" },
    ],
  },
  {
    id: "k-pop",
    title: "K-Pop",
    items: [
      { id: 301, label: "Aespa", url: "/shop#brands" },
      { id: 302, label: "BTS", url: "/shop#brands" },
      { id: 303, label: "G-Dragon", url: "/shop#brands" },
    ],
  },
  {
    id: "movie",
    title: "Movie",
    items: [
      { id: 401, label: "Avatar", url: "/shop#brands" },
      { id: 402, label: "Batman", url: "/shop#brands" },
      { id: 403, label: "Dragon Ball", url: "/shop#brands" },
      { id: 404, label: "Godzilla", url: "/shop#brands" },
      { id: 405, label: "Harry Potter", url: "/shop#brands" },
      { id: 406, label: "James Bond 007", url: "/shop#brands" },
      { id: 407, label: "Marty Supreme", url: "/shop#brands" },
      { id: 408, label: "Naruto", url: "/shop#brands" },
      { id: 409, label: "One Piece", url: "/shop#brands" },
      { id: 410, label: "Peanut", url: "/shop#brands" },
      { id: 411, label: "Pokémon", url: "/shop#brands" },
      { id: 412, label: "Scream", url: "/shop#brands" },
      { id: 413, label: "Star Trek", url: "/shop#brands" },
      { id: 414, label: "Star Wars", url: "/shop#brands" },
      { id: 415, label: "Stranger Things", url: "/shop#brands" },
      { id: 416, label: "The Lord of the Rings", url: "/shop#brands" },
      { id: 417, label: "The Muppet Show", url: "/shop#brands" },
      { id: 418, label: "The Simpsons", url: "/shop#brands" },
      { id: 419, label: "Top Gun", url: "/shop#brands" },
      { id: 420, label: "Winnie the Pooh", url: "/shop#brands" },
      { id: 421, label: "Zootopia", url: "/shop#brands" },
    ],
  },
  {
    id: "music",
    title: "Music",
    items: [
      { id: 501, label: "Bruce Springsteen", url: "/shop#brands" },
      { id: 502, label: "Clint Black", url: "/shop#brands" },
      { id: 503, label: "Dolly Parton", url: "/shop#brands" },
      { id: 504, label: "Elvis Presley", url: "/shop#brands" },
      { id: 505, label: "Freddie Mercury", url: "/shop#brands" },
      { id: 506, label: "Jimmy Buffett", url: "/shop#brands" },
      { id: 507, label: "Kenny Chesney", url: "/shop#brands" },
      { id: 508, label: "Michael Jackson", url: "/shop#brands" },
      { id: 509, label: "Prince", url: "/shop#brands" },
      { id: 510, label: "Rock the Country", url: "/shop#brands" },
      { id: 511, label: "Westlife", url: "/shop#brands" },
      { id: 512, label: "Willie Nelson", url: "/shop#brands" },
    ],
  },
  {
    id: "other",
    title: "Other",
    items: [
      { id: 601, label: "Animals", url: "/shop#brands" },
      { id: 602, label: "Bad Omens", url: "/shop#brands" },
      { id: 603, label: "Charlie Puth", url: "/shop#brands" },
      { id: 604, label: "Chris Brown", url: "/shop#brands" },
      { id: 605, label: "DC", url: "/shop#brands" },
      { id: 606, label: "DMX", url: "/shop#brands" },
      { id: 607, label: "Doctor Who", url: "/shop#brands" },
      { id: 608, label: "Five Finger Death Punch", url: "/shop#brands" },
      { id: 609, label: "Foo Fighters", url: "/shop#brands" },
      { id: 610, label: "Friday The 13th", url: "/shop#brands" },
      { id: 611, label: "G.I. Joe", url: "/shop#brands" },
      { id: 612, label: "Game of Thrones", url: "/shop#brands" },
      { id: 613, label: "Gundam", url: "/shop#brands" },
      { id: 614, label: "House of the Dragon", url: "/shop#brands" },
      { id: 615, label: "Jujutsu Kaisen", url: "/shop#brands" },
      { id: 616, label: "Justin Bieber", url: "/shop#brands" },
      { id: 617, label: "La La Land", url: "/shop#brands" },
      { id: 618, label: "Magic The Gathering", url: "/shop#brands" },
      { id: 619, label: "Marvel", url: "/shop#brands" },
      { id: 620, label: "Mission Impossible", url: "/shop#brands" },
      { id: 621, label: "My Hero Academia", url: "/shop#brands" },
      { id: 622, label: "Noah Kahan", url: "/shop#brands" },
      { id: 623, label: "Pepe Aguilar", url: "/shop#brands" },
      { id: 624, label: "Phil Campbell", url: "/shop#brands" },
      { id: 625, label: "Pirates of the Caribbean", url: "/shop#brands" },
      { id: 626, label: "Predator", url: "/shop#brands" },
      { id: 627, label: "Rat Fink", url: "/shop#brands" },
      { id: 628, label: "Slash", url: "/shop#brands" },
      { id: 629, label: "Snoop Dogg", url: "/shop#brands" },
      { id: 630, label: "Taxi Driver", url: "/shop#brands" },
      { id: 631, label: "The Texas Chainsaw Massacre", url: "/shop#brands" },
    ],
  },
  {
    id: "rock-band",
    title: "Rock Band",
    items: [
      { id: 701, label: "AC/DC", url: "/shop#brands" },
      { id: 702, label: "Aerosmith", url: "/shop#brands" },
      { id: 703, label: "Black Stone Cherry", url: "/shop#brands" },
      { id: 704, label: "Guns N' Roses", url: "/shop#brands" },
      { id: 705, label: "Iron Maiden", url: "/shop#brands" },
      { id: 706, label: "KISS", url: "/shop#brands" },
      { id: 707, label: "Led Zeppelin", url: "/shop#brands" },
      { id: 708, label: "Megadeth", url: "/shop#brands" },
      { id: 709, label: "Metallica", url: "/shop#brands" },
      { id: 710, label: "Pink Floyd", url: "/shop#brands" },
      { id: 711, label: "Queen", url: "/shop#brands" },
      { id: 712, label: "RUSH", url: "/shop#brands" },
      { id: 713, label: "Sleep Token", url: "/shop#brands" },
      { id: 714, label: "The Beatles", url: "/shop#brands" },
      { id: 715, label: "The Eagles", url: "/shop#brands" },
      { id: 716, label: "The Rolling Stones", url: "/shop#brands" },
      { id: 717, label: "Thirty Seconds to Mars", url: "/shop#brands" },
      { id: 718, label: "Van Halen", url: "/shop#brands" },
      { id: 719, label: "Wu-Tang Clan", url: "/shop#brands" },
    ],
  },
  {
    id: "sport",
    title: "Sport",
    items: [
      { id: 801, label: "MLB", url: "/shop#brands" },
      { id: 802, label: "NBA", url: "/shop#brands" },
      { id: 803, label: "NCAA", url: "/shop#brands" },
      { id: 804, label: "NFL", url: "/shop#brands" },
      { id: 805, label: "NHL", url: "/shop#brands" },
      { id: 806, label: "Other Sport", url: "/shop#brands" },
      { id: 807, label: "Soccer", url: "/shop#brands" },
    ],
  },
  {
    id: "tabletop",
    title: "Tabletop",
    items: [{ id: 901, label: "Dungeons & Dragons", url: "/shop#brands" }],
  },
  {
    id: "video-game",
    title: "Video Game",
    items: [
      { id: 1001, label: "Fallout", url: "/shop#brands" },
      { id: 1002, label: "Sonic The Hedgehog", url: "/shop#brands" },
      { id: 1003, label: "World of Warcraft", url: "/shop#brands" },
      { id: 1004, label: "Zelda", url: "/shop#brands" },
    ],
  },
];

const data: NavMenu = [
  {
    id: 1,
    label: "Categories",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Accessories",
        url: "/shop#accessories",
      },
      {
        id: 12,
        label: "Clothing",
        url: "/shop#clothing",
      },
      {
        id: 13,
        label: "Footwear",
        url: "/shop#footwear",
      },
      {
        id: 14,
        label: "Home Decor",
        url: "/shop#home-decor",
      },
      {
        id: 15,
        label: "Sale",
        url: "/shop#sale",
      },
    ],
  },
  {
    id: 2,
    type: "MenuList",
    label: "Brands",
    sections: brandSections,
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "About Us",
    url: "/shop#about-us",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Contact Us",
    url: "/shop#contact",
    children: [],
  },
];

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            SHOP.CO
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList
                    data={item.children}
                    sections={item.sections}
                    label={item.label}
                  />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
