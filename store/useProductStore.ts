import { create } from 'zustand'
import { Product, products } from '@/app/data/products'

interface Filter {
  priceRange: [number, number]
  materials: string[]
  colors: string[]
}

interface ProductStore {
  products: Product[]
  filteredProducts: Product[]
  filter: Filter
  sortBy: 'price-asc' | 'price-desc' | 'name'
  
  setFilter: (filter: Partial<Filter>) => void
  setSortBy: (sortBy: 'price-asc' | 'price-desc' | 'name') => void
  searchProducts: (query: string) => void
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: products,
  filteredProducts: products,
  filter: {
    priceRange: [0, 1000],
    materials: [],
    colors: [],
  },
  sortBy: 'name',

  setFilter: (newFilter) => {
    set((state) => {
      const filter = { ...state.filter, ...newFilter }
      const filtered = applyFilters(state.products, filter)
      const sorted = applySorting(filtered, state.sortBy)
      return { filter, filteredProducts: sorted }
    })
  },

  setSortBy: (sortBy) => {
    set((state) => ({
      sortBy,
      filteredProducts: applySorting(state.filteredProducts, sortBy),
    }))
  },

  searchProducts: (query) => {
    set((state) => {
      const filtered = state.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      return { filteredProducts: applySorting(filtered, state.sortBy) }
    })
  },
}))

// Helper functions
function applyFilters(products: Product[], filter: Filter): Product[] {
  return products.filter((product) => {
    const priceInRange =
      product.price >= filter.priceRange[0] && product.price <= filter.priceRange[1]
    const materialMatch =
      filter.materials.length === 0 || filter.materials.includes(product.material)
    const colorMatch =
      filter.colors.length === 0 ||
      product.colors.some((color) => filter.colors.includes(color))

    return priceInRange && materialMatch && colorMatch
  })
}

function applySorting(
  products: Product[],
  sortBy: 'price-asc' | 'price-desc' | 'name'
): Product[] {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })
} 