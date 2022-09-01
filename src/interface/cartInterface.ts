export interface CartInterface {
  amount: number
  total: number
  cartItems: Product[]
  isLoading: boolean
}

export interface Product {
  id: string
  title: string
  price: string
  img: string
  amount: number
}
export interface Modal{
  isOpen: boolean
}