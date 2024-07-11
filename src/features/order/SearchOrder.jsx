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
      />
    </form>
  );
}

export default SearchOrder;
