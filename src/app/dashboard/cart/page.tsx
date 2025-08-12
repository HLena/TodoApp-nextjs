import { ItemCard } from "@/products/component/ItemCard"
import { Product, products } from '../products/products';
import { cookies } from "next/headers"
import { getCookie } from "cookies-next"

export const metadata = {
  title: 'Cart Products',
  description: ''
}

interface ProductInCart {
  product: Product,
  quantity: number
}

const getProductsInCart = (cart: {[id:string]: number}): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];
  for(const id of Object.keys(cart) ){
    const product = products.find(product => product.id === id);
    if(product) productsInCart.push({
      product,
      quantity: cart[id]
    })
  }
  return productsInCart;
}

const CartPage = async() => {

  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}');

  const productInCart = getProductsInCart(cart);

  const calculateTotalPrice = (): string => {
    const total = productInCart.reduce((total, {product, quantity}) => total + (product.price * quantity), 0);
    return total.toString();
  }



  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-3">Shopping Cart</h1>
      <div className="flex flex-col gap-4 p-4 w-full sm:w-8/12">
        {
          productInCart.length > 0 && productInCart.map(({product, quantity}) => 
            <ItemCard key={product.id} product={product} quantity={quantity}/>
          )
        }
      <hr />
      <p className="text-end text-xl font-bold" >Total: $ {calculateTotalPrice()}</p>
      </div>
    </div>
  )
}

export default CartPage