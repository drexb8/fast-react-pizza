import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const username = useSelector((state) => state.user.username);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!username) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-10 text-stone-300">
      <p className="space-x-4 font-semibold uppercase">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="rounded-full bg-yellow-400 px-3 py-1 text-stone-700"
      >
        Open cart
      </Link>
    </div>
  );
}

export default CartOverview;
