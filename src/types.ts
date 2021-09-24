export type DataType = {
  title: string
  taste: string
  amount: number
  promotion: number
  weight: number
  description: string
  rating?: string
  available: boolean
}
export type ContextType = {
  data:DataType[]
}
