import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-5 px-20">
      <LinkButton to="/menu">Back to menu</LinkButton>

      <p className="mt-10 text-center text-lg">
        Your cart is empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
