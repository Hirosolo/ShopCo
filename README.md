# ShopCo

ShopCo is a small Next.js + Tailwind e-commerce starter showcasing a clean product catalog, product pages, and cart flows.

## Features
 - Next.js (App Router) + TypeScript
 - Tailwind CSS for utility-first styling
 - Product grid, product detail pages, cart with quantity controls
 - Simple Redux toolkit slices for products and cart

## Quick start
1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Build

```bash
pnpm build
pnpm start
```

## Project structure (important folders)
 - `src/app` — Next.js app routes and pages
 - `src/components` — UI and page components
 - `src/lib` — Redux slices, store and utility helpers
 - `src/styles` — global styles and Tailwind setup

## Contributing
 - Make changes on a branch, keep commits focused and descriptive.
 - Run the dev server locally to verify visual changes before committing.

## Git
 - Commit message example: `chore: rewrite README`

If you want, I can run the git commit and push the change for you now.
# ShopCo - Modern E-Commerce Template

> A production-ready, fully-featured e-commerce platform built with cutting-edge web technologies. ShopCo combines the power of Next.js 14, TypeScript, Tailwind CSS, and Redux to deliver a seamless shopping experience across all devices.

## ✨ Key Highlights

- 🚀 **Next.js 14 App Router** - Modern React framework with server-side rendering and optimization
- 💪 **TypeScript** - Full type safety for robust, maintainable code
- 🎨 **Tailwind CSS** - Utility-first CSS for rapid, responsive design
- 📦 **Redux State Management** - Centralized cart and global state management
- ✨ **Framer Motion** - Smooth animations and interactive transitions
- 🧩 **ShadCN UI Components** - Accessible, customizable, beautifully designed UI elements
- 📱 **Mobile-First Responsive Design** - Optimized for all screen sizes
- ⚡ **Performance Optimized** - Industry best practices for speed and efficiency
- ♿ **Accessibility First** - WCAG compliant for inclusive user experience

## 🗂️ Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Guide](#development-guide)
- [Key Features Explained](#key-features-explained)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NextJS-Ecommerce-Demo/ShopCo.git
   cd ShopCo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ShopCo/
├── public/                          # Static assets (images, icons)
│   ├── icons/
│   └── images/
├── src/
│   ├── app/                         # Next.js 14 App Router
│   │   ├── cart/                    # Shopping cart page
│   │   ├── shop/                    # Product listing page
│   │   └── product/[...slug]/       # Dynamic product detail page
│   │
│   ├── components/                  # Reusable React components
│   │   ├── cart-page/               # Cart-specific components
│   │   ├── common/                  # Shared components (ProductCard, etc.)
│   │   ├── homepage/                # Homepage sections (Brands, Reviews, etc.)
│   │   ├── layout/                  # Layout components (Navbar, Footer, Banner)
│   │   ├── product-page/            # Product detail components
│   │   ├── shop-page/               # Shop page components
│   │   ├── storage/                 # Storage/persistence components
│   │   └── ui/                      # ShadCN UI components and custom UI
│   │
│   ├── lib/                         # Utilities and configuration
│   │   ├── features/                # Redux slices and logic
│   │   │   ├── carts/               # Shopping cart redux slice
│   │   │   └── products/            # Products redux slice
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── store.ts                 # Redux store configuration
│   │   └── utils.ts                 # Helper utility functions
│   │
│   ├── styles/                      # Global styles and theming
│   │   ├── globals.css              # Global CSS
│   │   └── fonts/                   # Custom font imports
│   │
│   └── types/                       # TypeScript type definitions
│       ├── product.types.ts         # Product-related types
│       └── review.types.ts          # Review-related types
│
├── components.json                  # ShadCN UI component configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS customization
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.mjs               # PostCSS configuration
├── pnpm-lock.yaml                   # Dependency lock file
└── package.json                     # Project dependencies and scripts
```



## Technologies

- **Next.js 14** - A popular React framework with built-in SSR and optimization.
- **TypeScript** - A superset of JavaScript for strong typing and code consistency.
- **Tailwind CSS** - A utility-first CSS framework for fast, responsive design.
- **Redux** - A state management library used for the shopping cart and global app state.
- **Framer Motion** - A library for animations and interactions in React.
- **ShadCN UI** - A collection of beautiful, accessible, and customizable UI components.
- **Figma** - The design tool used as the source of the project’s layout. The [Figma file]

## Installation

To get started with Shopco locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NextJS-Ecommerce-Demo/ShopCo.git
   cd next-ecommerce-shopco
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   ```bash
   yarn dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
ShopCo/
├── public/                          # Static assets (images, icons)
│   ├── icons/
│   └── images/
├── src/
│   ├── app/                         # Next.js 14 App Router
│   │   ├── cart/                    # Shopping cart page
│   │   ├── shop/                    # Product listing page
│   │   └── product/[...slug]/       # Dynamic product detail page
│   │
│   ├── components/                  # Reusable React components
│   │   ├── cart-page/               # Cart-specific components
│   │   ├── common/                  # Shared components (ProductCard, etc.)
│   │   ├── homepage/                # Homepage sections (Brands, Reviews, etc.)
│   │   ├── layout/                  # Layout components (Navbar, Footer, Banner)
│   │   ├── product-page/            # Product detail components
│   │   ├── shop-page/               # Shop page components
│   │   ├── storage/                 # Storage/persistence components
│   │   └── ui/                      # ShadCN UI components and custom UI
│   │
│   ├── lib/                         # Utilities and configuration
│   │   ├── features/                # Redux slices and logic
│   │   │   ├── carts/               # Shopping cart redux slice
│   │   │   └── products/            # Products redux slice
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── store.ts                 # Redux store configuration
│   │   └── utils.ts                 # Helper utility functions
│   │
│   ├── styles/                      # Global styles and theming
│   │   ├── globals.css              # Global CSS
│   │   └── fonts/                   # Custom font imports
│   │
│   └── types/                       # TypeScript type definitions
│       ├── product.types.ts         # Product-related types
│       └── review.types.ts          # Review-related types
│
├── components.json                  # ShadCN UI component configuration
├── next.config.mjs                  # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS customization
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.mjs               # PostCSS configuration
├── pnpm-lock.yaml                   # Dependency lock file
└── package.json                     # Project dependencies and scripts
```

## ✨ Features

### 🛍️ E-Commerce Core Features
- **Product Catalog** - Browse and filter products by category, price, size, color, and style
- **Product Details** - Detailed product pages with images, reviews, and specifications
- **Shopping Cart** - Add/remove items, adjust quantities, persistent cart state
- **Search & Filter** - Advanced filtering system for easy product discovery
- **Product Reviews** - Customer ratings and review system

### 👥 User Experience
- **Responsive Design** - Seamless experience on mobile, tablet, and desktop
- **Fast Performance** - Optimized loading times and smooth interactions
- **Smooth Animations** - Framer Motion animations for engaging UI
- **Accessible UI** - WCAG compliant components for all users
- **Custom Breadcrumbs** - Easy navigation through product hierarchy

### 🎨 Design & Styling
- **Tailwind CSS** - Utility-first CSS for consistent, customizable design
- **ShadCN UI** - Pre-built, accessible component library
- **Responsive Components** - Mobile-first design approach
- **Custom Theming** - Easy color and style customization

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Next.js** | React framework with SSR/SSG | 14+ |
| **TypeScript** | Type safety | 5+ |
| **React** | UI library | 18+ |
| **Tailwind CSS** | Utility-first CSS framework | 3+ |
| **Redux** | State management | Latest |
| **Framer Motion** | Animation library | Latest |
| **ShadCN UI** | Component library | Latest |
| **PostCSS** | CSS processing | Latest |

## 📖 Development Guide

### Redux State Management

The shopping cart and product state are managed using Redux. Key locations:

- **Store Configuration**: `src/lib/store.ts`
- **Cart Logic**: `src/lib/features/carts/cartsSlice.ts`
- **Products Logic**: `src/lib/features/products/productsSlice.ts`
- **Custom Hook**: `src/lib/hooks/redux.tsx`

### Custom Components

ShadCN UI components are installed and customized in `src/components/ui/`. You can:
- Modify existing component styles
- Add new custom variants
- Override default behaviors

### Type Safety

TypeScript types are defined in `src/types/`:
- Product interfaces and types
- Review/rating types
- Custom domain types

### Adding New Pages

Create new routes using Next.js App Router:
```bash
# Creates src/app/new-page/page.tsx
mkdir -p src/app/new-page
touch src/app/new-page/page.tsx
```

## 🚀 Key Features Explained

### Product Filtering
The shop page includes advanced filters for:
- **Categories** - Filter by product category
- **Price Range** - Slider-based price filtering
- **Sizes** - Available size options
- **Colors** - Product color variants
- **Dress Style** - Fashion style categories

### Cart Management
- Redux-based state persistence
- Real-time cart updates
- Product quantity management
- Persistent cart data

### Performance Optimization
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Server-side rendering for SEO
