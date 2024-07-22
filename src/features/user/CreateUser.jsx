import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
        autoCapitalize={true}
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
