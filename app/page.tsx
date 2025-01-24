import { Suspense } from "react"
import { CatalogView } from "./components/CatalogView"
import { ViewToggle } from "./components/ViewToggle"
import { products } from "./lib/mockData"

export default function CatalogPage() {
  return (
    <div className="gradient-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-white">Product Catalog</h1>
          <ViewToggle />
        </div>
        <Suspense fallback={<div className="text-white">Loading products...</div>}>
          <CatalogView initialProducts={products} />
        </Suspense>
      </div>
    </div>
  )
}

