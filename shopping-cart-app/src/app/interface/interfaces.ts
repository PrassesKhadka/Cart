export interface Product
{
    id:number;
    name:string;
    price:number;
    image_path:string;
}

export interface CartItem
{
    product:Product;
    quantity:number;
}
