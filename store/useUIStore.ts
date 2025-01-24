import { create } from 'zustand'

interface UIStore {
  view: 'grid' | 'list'
  isCartOpen: boolean
  isDarkMode: boolean
  setView: (view: 'grid' | 'list') => void
  toggleCart: () => void
  toggleDarkMode: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  view: 'grid',
  isCartOpen: false,
  isDarkMode: false,

  setView: (view) => set({ view }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
})) 