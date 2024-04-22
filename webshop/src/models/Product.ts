export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  active: boolean
}

type Rating = {
  rate: number
  count: number
}