import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-color-300 focus:outline-none";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-base",
    round: base + " px-2 py-1 md:px-3 md:py-1 text-sm md:text-base",
    soldOut:
      " rounded-full px-3 py-2 text-xs bg-stone-200 md:text-base uppercase hover:cursor-not-allowed",
    secondary:
      " inline-block rounded-full hover:bg-stone-200 py-3.5 border border-stone-300 px-4 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 focus:outline-none",
  };

  if (to)
    return (
      <Link to={to} className={styles.small}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
