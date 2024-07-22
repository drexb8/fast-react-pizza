import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-yellow-100 px-4 py-2 text-sm text-neutral-500 transition-all duration-300 placeholder:text-neutral-500 focus:w-72 focus:outline-none md:w-64"
      />
    </form>
  );
}

export default SearchOrder;
