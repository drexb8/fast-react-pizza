import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("./menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-semibold text-stone-500">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-4 mt-4 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="small">Start ordering now!</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
