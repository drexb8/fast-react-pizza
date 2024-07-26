import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-7 py-4 lg:px-20">
      <LinkButton to="/menu">Back to menu</LinkButton>
      <div className="mt-7">
        <h2 className="mb-3 text-lg font-semibold">Your cart, {username}</h2>
        <ul className="divide-y border-b border-t">
          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
        <div className="mt-4 space-x-2">
          <Button to="/order/new">Order pizzas</Button>
          <Button type="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
