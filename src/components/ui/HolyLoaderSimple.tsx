"use client";

import React from "react";

type Props = {
  color?: string;
};

const HolyLoaderSimple = ({ color = "#868686" }: Props) => {
  return (
    <div aria-hidden className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div
        style={{ borderColor: color, borderTopColor: "transparent" }}
        className="h-6 w-6 rounded-full border-2 animate-spin"
      />
    </div>
  );
};

export default HolyLoaderSimple;
