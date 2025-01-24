import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/app/data/products'

interface CartItem {
  product: Product
  quantity: number
  selectedColor: string
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity: number, selectedColor: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity, selectedColor) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id && item.selectedColor === selectedColor
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id && item.selectedColor === selectedColor
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }

          return {
            items: [...state.items, { product, quantity, selectedColor }],
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: Math.max(0, quantity) }
              : item
          ),
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotal: () => {
        const state = get()
        return state.items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'cart-storage',
    }
  )
) 