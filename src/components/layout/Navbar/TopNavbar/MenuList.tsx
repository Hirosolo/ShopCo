"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { integralCF } from "@/styles/fonts";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuListData, MenuListSection } from "../navbar.types";

export type MenuListProps = {
  data: MenuListData;
  label: string;
  sections?: MenuListSection[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export function MenuList({ data, label, sections }: MenuListProps) {
  const [activeSection, setActiveSection] = useState<MenuListSection | null>(
    null
  );

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-normal px-3 hover:text-black/60 transition-colors">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {sections && sections.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex min-h-[400px] w-auto rounded-3xl border border-black/5 bg-white/90 backdrop-blur-md p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
          >
            {/* Vertical Group Navbar */}
            <div className="w-[240px] flex flex-col gap-1.5 pr-2 custom-scrollbar">
              <div className="px-4 py-3 mb-2 border-b border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">
                  Select Category
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onMouseEnter={() => setActiveSection(section)}
                    whileHover={{ x: 4 }}
                    className={cn(
                      "group relative w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 text-sm font-semibold overflow-hidden",
                      activeSection?.id === section.id
                        ? "bg-black text-white shadow-xl shadow-black/10"
                        : "text-black/50 hover:bg-black/5 hover:text-black"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {section.title}
                      <span className={cn(
                        "transition-transform duration-300",
                        activeSection?.id === section.id ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                      )}>
                        →
                      </span>
                    </span>
                    {activeSection?.id === section.id && (
                      <motion.div
                        layoutId="active-bg"
                        className="absolute inset-0 bg-black"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Brands Content Area - Only shows when a group is chosen */}
            <AnimatePresence>
              {activeSection && (
                <motion.div
                  initial={{ opacity: 0, width: 0, x: -10 }}
                  animate={{ opacity: 1, width: "600px", x: 0 }}
                  exit={{ opacity: 0, width: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden border-l border-black/5 ml-2"
                >
                  <div className="p-6 max-h-[520px] overflow-y-auto custom-scrollbar">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4">
                        <h3
                          className={cn(
                            integralCF.className,
                            "text-2xl tracking-tight text-black"
                          )}
                        >
                          {activeSection.title}
                        </h3>
                        <div className="h-px flex-1 bg-black/5" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30">
                          {activeSection.items.length} Brands
                        </span>
                      </div>

                      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2">
                        {activeSection.items.map((item, idx) => (
                          <motion.li
                            key={item.id}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: idx * 0.02 }}
                          >
                            <ListItem
                              title={item.label}
                              href={item.url ?? "/shop#brands"}
                              className="hover:shadow-lg hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-black/5"
                            />
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <ul className="w-[280px] rounded-3xl border border-black/5 bg-white/90 backdrop-blur-md p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            {data.map((item) => (
              <ListItem
                key={item.id}
                title={item.label}
                href={item.url ?? "/"}
              />
            ))}
          </ul>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}



const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none rounded-xl px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          {children ? (
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-black/60">
              {children}
            </p>
          ) : null}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
