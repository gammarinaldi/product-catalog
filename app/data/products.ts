export interface Product {
  id: string
  name: string
  material: string
  dimensions: string
  finish: string
  weight: string
  price: number
  image: string
  colors: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lynette Armchair",
    material: "Leather",
    dimensions: "31 x 29 x 28 cm",
    finish: "Oil Finish",
    weight: "6.2 Kilograms",
    price: 340,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/926e479a2e375e683d96671d84fc2d27-g7NL2n8vzoBbbdemXDVaed7BAGdjwJ.webp",
    colors: ["#E6B17E", "#9CA365", "#2C2C2C"],
  },
  {
    id: "2",
    name: "Monet Armchair",
    material: "Velvet",
    dimensions: "32 x 34 x 37 cm",
    finish: "Wood Dye",
    weight: "8.2 Kilograms",
    price: 850,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/926e479a2e375e683d96671d84fc2d27-g7NL2n8vzoBbbdemXDVaed7BAGdjwJ.webp",
    colors: ["#F6A834", "#2C2C2C", "#9A9A9A", "#7CC0D8"],
  },
  {
    id: "3",
    name: "Eclipse Rosto Armchair",
    material: "Cotton",
    dimensions: "29 x 21 x 34 cm",
    finish: "Wax",
    weight: "6.4 Kilograms",
    price: 280,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/926e479a2e375e683d96671d84fc2d27-g7NL2n8vzoBbbdemXDVaed7BAGdjwJ.webp",
    colors: ["#D4A181", "#E6B17E", "#7581CA", "#7CC0D8"],
  },
]

