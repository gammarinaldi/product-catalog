"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuantitySelector } from "./QuantitySelector"
import { useCartStore } from '@/store/useCartStore'
import { toast } from 'react-hot-toast'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  material: string
  dimensions: string
  finish: string
  weight: string
  colors: string[]
}

export function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor)
    toast.success('Added to cart!')
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-4">
      <div className="bg-gray-100 rounded-2xl p-4 mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto rounded-xl"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="grid grid-cols-2 gap-x-4">
            <span className="font-medium">MATERIAL</span>
            <span>{product.material}</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <span className="font-medium">ITEM DIMENSIONS</span>
            <span>{product.dimensions}</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <span className="font-medium">FURNITURE FINISH</span>
            <span>{product.finish}</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <span className="font-medium">ITEM WEIGHT</span>
            <span>{product.weight}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                selectedColor === color
                  ? "border-white shadow-lg scale-125"
                  : "border-white/50 shadow-sm hover:scale-110"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <QuantitySelector 
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>

        <Button className="w-full bg-[#6366F1] hover:bg-[#5558DD] text-white" onClick={handleAddToCart}>Add to cart</Button>

        <Link href="/" className="block text-center text-sm text-gray-600 hover:text-gray-800">
          Back to Catalog
        </Link>
      </div>
    </div>
  )
}

