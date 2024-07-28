import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients);
  return (
    <li className="space-y-2 py-2 text-sm">
      <div className="flex items-center justify-between px-10 md:px-20">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="px-10 text-xs capitalize italic md:px-20">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
