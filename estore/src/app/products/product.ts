
export interface Product {
    id?: number
    title: string
    price: number
    stock: number
    features: Array<Feature>
}


export interface Feature {
    id: number
    description: string
}