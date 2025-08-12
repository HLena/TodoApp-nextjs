'use client';

import Image from "next/image"

import { IoAddCircleOutline, IoRemoveCircle, IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5"

import Stars from "./Stars"

import { Product } from "@/app/dashboard/products/products"
import { addProductToCart, removeProductFromCart } from "@/shopping-cart/actions/actions"
import { useRouter } from "next/navigation";

export const ProductCard = ({ image, rating, price, name, id }: Product) => {

  const router = useRouter();

  const updateQuantityOfAProduct = ( count:number = 1) => {
    (count > 0) ? addProductToCart(id) : removeProductFromCart(id);
    router.refresh();
  }

  return (
    <div className="bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100">
      
      {/* Product Image */}
      <div className="p-2">
        <Image
            width={500}
            height={500}
            className="rounded" 
            src={image} 
            alt={name} />
      </div>
      
      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {
            Array(rating).fill(0).map((x, i) => <Stars key={i}/>)
          }

          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            { rating.toFixed(1) }
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          
          <div className="flex gap-2">
            <button
              onClick={() => updateQuantityOfAProduct(-1)}
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoRemoveCircleOutline size={20} />
            </button>
            <button
              onClick={() => updateQuantityOfAProduct()}
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoAddCircleOutline size={25} />
            </button>
          </div>
          
        </div>

      </div>
    </div>
  )
}