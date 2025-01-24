"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { CatalogCard } from "./CatalogCard"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  material: string
  colors: string[]
}

interface CatalogViewProps {
  initialProducts: Product[]
}

export function CatalogView({ initialProducts }: CatalogViewProps) {
  const searchParams = useSearchParams()
  const [view, setView] = useState<"grid" | "list">("grid")
  const [products, setProducts] = useState<Product[]>(initialProducts)

  useEffect(() => {
    const viewParam = searchParams.get("view")
    if (viewParam === "grid" || viewParam === "list") {
      setView(viewParam)
    }
  }, [searchParams])

  useEffect(() => {
    // Fetch products on the client-side to get any updates
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  return (
    <div className={view === "grid" ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" : "space-y-6"}>
      {products.map((product) => (
        <CatalogCard key={product.id} product={product} view={view} />
      ))}
    </div>
  )
}

