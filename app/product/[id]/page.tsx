import { notFound } from "next/navigation"
import { ProductCard } from "../../components/ProductCard"
import { products } from "../../lib/mockData"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="gradient-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  )
}

