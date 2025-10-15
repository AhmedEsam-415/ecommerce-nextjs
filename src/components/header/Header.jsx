import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header id="headerElement" className="flex">
      <div className="logo">
        <FontAwesomeIcon
          style={{ width: "1.5rem", marginRight: "0.3rem" }}
          icon={faBagShopping}
        />

        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>

      <nav className="links">
        <Link className="cart" href="/" style={{ position: "relative" }}>
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            icon={faCartShopping}
          />
          Home
        </Link>

        <Link
          className="sign-in"
          href="./cart"
          style={{ position: "relative" }}
        >
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0" }}
            icon={faCartShopping}
          />
          $0.00
          <span className="products-number">2</span>
        </Link>

        <Link className="sign-in" href="./sinein">
          <FontAwesomeIcon
            style={{
              width: "0.8rem",
              marginRight: "0.4rem",
            }}
            icon={faRightToBracket}
          />
          Sign in
        </Link>

        <Link className="register" href="./register">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            icon={faUserPlus}
          />
          Register
        </Link>
      </nav>
    </header>
  );
}
