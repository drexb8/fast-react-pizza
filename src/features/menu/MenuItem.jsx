import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-5 py-5">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm capitalize">
          Ingredients: {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-auto items-center justify-between">
          <p className="text-sm font-bold">{formatCurrency(unitPrice)}</p>
          {soldOut ? (
            <Button type="soldOut" disabled={soldOut}>
              Sold Out
            </Button>
          ) : (
            <Button type="small">Add to cart</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
