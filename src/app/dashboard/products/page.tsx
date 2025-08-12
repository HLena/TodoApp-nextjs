import { ProductCard } from "@/products/component/ProductCard"
import { products } from "./products"

const ProductsPage = () => {
  
  return (
    <>
      <h1 className="text-2xl font-semibold my-4">Products List</h1>
      <div className="grid grid-cols-4 w-full gap-3">
        {
          products.map(product => (
            <ProductCard key={product.id} {...product}/>
          ))
        }
      </div>
    </>
  )
}

export default ProductsPage