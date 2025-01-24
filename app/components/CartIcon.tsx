"use client"

import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import { useUIStore } from "@/store/useUIStore"
import { Button } from "@/components/ui/button"

export function CartIcon() {
  const items = useCartStore((state) => state.items)
  const toggleCart = useUIStore((state) => state.toggleCart)
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleCart}
      className="relative"
    >
      <ShoppingCart className="h-4 w-4" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  )
} 