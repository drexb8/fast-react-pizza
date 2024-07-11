import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast react pizza</Link>;
      <SearchOrder />
    </div>
  );
}

export default Header;
