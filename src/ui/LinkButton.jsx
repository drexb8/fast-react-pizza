import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "mt-4 rounded-full bg-yellow-400 px-5 py-1";
  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        Go back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
