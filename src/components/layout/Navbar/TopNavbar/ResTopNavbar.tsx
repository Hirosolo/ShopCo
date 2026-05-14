"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Image
          priority
          src="/icons/menu.svg"
          height={100}
          width={100}
          alt="menu"
          className="max-w-[22px] max-h-[22px]"
        />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto custom-scrollbar">
        <SheetHeader className="mb-10">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/" className={cn([integralCF.className, "text-2xl"])}>
                SHOP.CO
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start w-full">
          {data.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === "MenuItem" && (
                <SheetClose asChild>
                  <Link
                    href={item.url ?? "/"}
                    className="mb-6 text-lg font-semibold hover:text-black/60 transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              )}
              {item.type === "MenuList" && (
                <div className="mb-6 w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.label} className="border-none">
                      <AccordionTrigger className="text-left p-0 py-0.5 font-semibold text-lg hover:no-underline">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 pb-0 border-l-2 border-black/5 ml-1 flex flex-col gap-4">
                        {item.sections && item.sections.length > 0 ? (
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            {item.sections.map((section) => (
                                <AccordionItem
                                  key={section.id}
                                  value={String(section.id)}
                                className="border-b border-black/5 last:border-none"
                              >
                                <AccordionTrigger
                                  className={cn(
                                    "py-4 text-sm font-bold uppercase tracking-[0.2em] text-black/40 hover:no-underline hover:text-black transition-colors"
                                  )}
                                >
                                  {section.title}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col ps-4 pb-4">
                                  {section.items.map((itemChild, idx) => (
                                    <motion.div
                                      key={itemChild.id}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.03 }}
                                    >
                                      <SheetClose
                                        asChild
                                        className="w-full py-2.5 text-base font-medium text-black/70 hover:text-black transition-colors"
                                      >
                                        <Link
                                          href={itemChild.url ?? "/shop#brands"}
                                        >
                                          {itemChild.label}
                                        </Link>
                                      </SheetClose>
                                    </motion.div>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        ) : (
                          item.children.map((itemChild, idx) => (
                            <motion.div
                              key={itemChild.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <SheetClose
                                asChild
                                className="w-full py-2.5 text-base font-medium text-black/70 hover:text-black transition-colors"
                              >
                                <Link href={itemChild.url ?? "/"}>
                                  {itemChild.label}
                                </Link>
                              </SheetClose>
                            </motion.div>
                          ))
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResTopNavbar;

