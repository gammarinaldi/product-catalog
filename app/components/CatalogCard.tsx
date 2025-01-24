import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  material: string
  colors: string[]
}

interface CatalogCardProps {
  product: Product
  view: "grid" | "list"
}

export function CatalogCard({ product, view }: CatalogCardProps) {
  if (view === "list") {
    return (
      <Link href={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-4 transition-transform hover:scale-105 flex items-center space-x-4">
          <div className="bg-gray-100 rounded-2xl p-2 flex-shrink-0">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-xl"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.material}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold">${product.price}</span>
              <div className="flex gap-1">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-4 transition-transform hover:scale-105">
        <div className="bg-gray-100 rounded-2xl p-4 mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.material}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

