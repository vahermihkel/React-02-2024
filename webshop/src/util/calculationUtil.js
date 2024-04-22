export const calculateTotal = (cart) => {
  console.log("arvutan uuesti kogusummat")
  let sum = 0;
  cart.forEach(cp => sum = sum + cp.product.price * cp.quantity)
  return sum.toFixed(2);
}