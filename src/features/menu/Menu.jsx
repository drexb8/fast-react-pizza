import { Link, useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <div className="relative mt-7 flex items-center px-20 py-5 sm:px-20 md:px-[100px]">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 flex-shrink">
          <h1 className="text-center text-4xl md:text-5xl">Menu</h1>
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <ul className="divide-y divide-stone-200 px-6 md:px-24">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
      <Link to="/">Home</Link>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
