import React from "react";

export type MenuListData = (Omit<MenuItem, "children" | "type"> & {
  description?: string | React.ReactNode;
})[];

export type MenuListSection = {
  id: string | number;
  title: string;
  items: MenuListData;
};

export type MenuItem = {
  id: number;
  type: "MenuItem" | "MenuList";
  label: string;
  url?: string;
  sections?: MenuListSection[];
  children:
    | MenuListData
    | [];
};

export type NavMenu = MenuItem[];
