import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = ():{ [id:string]: number } => {

  if(hasCookie('cart')){
    const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')
    return cookieCart;
  }
  return {};
}


export const addProductToCart = (id: string) => {
  const shoppingCart = getCookieCart();

  if(shoppingCart[id]){
    shoppingCart[id] = shoppingCart[id] + 1;
  } else {
    shoppingCart[id] = 1;
  }
  setCookie('cart', JSON.stringify(shoppingCart));
}

export const removeProductFromCart = (id: string) => {
  const shoppingCart = getCookieCart();
  if(!shoppingCart[id]) return;
  
  const itemsInCart = shoppingCart[id] - 1;
 
  if(shoppingCart[id] <= 0) {
    delete shoppingCart[id];
  } else {
    shoppingCart[id] = itemsInCart;
  }
  
  console.log(shoppingCart)
  setCookie('cart', JSON.stringify(shoppingCart));

}