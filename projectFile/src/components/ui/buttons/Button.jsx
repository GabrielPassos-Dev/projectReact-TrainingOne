import { Link } from "react-router-dom";

export function Button({
  children,
  onClick,
  to,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const classBase =
    "font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-center flex items-center justify-center";

  const focus = "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400 ${focus}`,
    danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 ${focus}`,
    ghost: "bg-transparent text-blue-600 border-2 border-blue-600  hover:bg-blue-800 hover:text-white focus:ring-blue-400",
    light:
      "w-full px-3 py-1 bg-blue-400 text-white font-semibold hover:bg-blue-500 ",
  };

  const sizes = {
    sm: "px-2 py-2 text-sm",
    md: "px-7 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  const classes = `${classBase} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={`${classes}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${classes}`} {...props}>
      {children}
    </button>
  );
}
