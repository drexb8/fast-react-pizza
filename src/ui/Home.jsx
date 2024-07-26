import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-5xl font-bold text-stone-900 sm:text-6xl">
        The Best Pizza.
      </h1>
      <h1 className="mb-10 text-3xl font-bold text-yellow-600 sm:text-4xl">
        Straight out of the oven, straight to you.
      </h1>
      {username !== "" ? (
        <Button to="/menu" type="primary">
          Continue ordering here, {username}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
