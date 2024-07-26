import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getQuantityById(id));
  const isInCart = currentQuantity > 0;
  console.log(currentQuantity);
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-5 py-5">
      <img
        src={imageUrl}
        alt={name}
        className={`w-28 md:w-32 lg:w-44 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm capitalize">
          Ingredients: {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-auto items-center justify-between">
          <p className="text-sm font-bold">{formatCurrency(unitPrice)}</p>
          {soldOut && (
            <Button type="soldOut" disabled={soldOut}>
              Sold Out
            </Button>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
          {!soldOut && isInCart && (
            <>
              <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />{" "}
              <DeleteItem pizzaId={id} />
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
