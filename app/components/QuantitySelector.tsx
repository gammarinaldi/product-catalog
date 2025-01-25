"use client"

import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function QuantitySelector({ quantity, onQuantityChange }: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-8 text-center">{quantity}</span>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={() => onQuantityChange(quantity + 1)}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}

