import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <nav>
      <div className="logo">
        <h1>TCKT</h1>
      </div>

      {!localStorage.getItem("User") ? (
        <ul>
          <li
            onClick={() => {
              nav("/login");
            }}
          >
            Login
          </li>
          <li
            onClick={() => {
              nav("/");
            }}
          >
            Register
          </li>
        </ul>
      ) : (
        <ul>
          <li
            className="logout"
            onClick={() => {
              localStorage.removeItem("User");
              nav("/login");
            }}
          >
            Logout
          </li>
          <li
            className="logout"
            onClick={() => {
              nav("/transactions");
            }}
          >
            Transactions
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
