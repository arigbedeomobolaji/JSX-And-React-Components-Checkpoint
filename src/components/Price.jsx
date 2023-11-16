import { productJSON } from "../product";
export default function Price() {
  const product = JSON.parse(productJSON);
  const currencyFormat = Intl.NumberFormat("en-US");
  return (
    <h3 className="text-white-emphasis fs-4">
      ₦ {currencyFormat.format(product.productPrice)}
    </h3>
  );
}
