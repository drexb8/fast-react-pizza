import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between border-b border-stone-300 bg-yellow-400 px-8 py-4 uppercase">
      <Link to="/" className="font-w text-2xl font-bold tracking-widest">
        <span className="flex flex-row items-center justify-center gap-2">
          <img src="../public/pizza.png" className="h-12" alt="" />
          Pizzaria
        </span>
      </Link>

      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
