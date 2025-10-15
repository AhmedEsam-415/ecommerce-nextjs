import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import "./cart.css";
import "../globals.css";
import "../../components/header/header.css";
import "../../components/footer/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Card Page",
  description: "description For Home Page",
};

const page = () => {
  return (
    <>
      <Header />

      <main style={{ textAlign: "center" }} className="">
        <section className="cart">
          <article className="product flex">
            <button>
              <FontAwesomeIcon style={{ width: "1rem" }} icon={faTrashCan} />
            </button>
            <p className="price">$133</p>
            <div className="flex" style={{ marginRight: "1rem" }}>
              <button className="decrease">-</button>
              <div className="quantity flex">3</div>
              <button className="increase">+</button>
            </div>
            <p className="title">Product Title</p>
            <img
              style={{ borderRadius: "0.22rem" }}
              width={70}
              height={70}
              alt=""
              src="../images/4.webp"
            />
          </article>

          <article className="product flex">
            <button>
              <FontAwesomeIcon style={{ width: "1rem" }} icon={faTrashCan} />
            </button>
            <p className="price">$133</p>
            <div className="flex" style={{ marginRight: "1rem" }}>
              <button className="decrease">-</button>
              <div className="quantity flex">3</div>
              <button className="increase">+</button>
            </div>
            <p className="title">Product Title</p>
            <img
              style={{ borderRadius: "0.22rem" }}
              width={70}
              height={70}
              alt=""
              src="../images/6.webp"
            />
          </article>

          <article className="product flex">
            <button>
              <FontAwesomeIcon style={{ width: "1rem" }} icon={faTrashCan} />
            </button>
            <p className="price">$133</p>
            <div className="flex" style={{ marginRight: "1rem" }}>
              <button className="decrease">-</button>
              <div className="quantity flex">3</div>
              <button className="increase">+</button>
            </div>
            <p className="title">Product Title</p>
            <img
              style={{ borderRadius: "0.22rem" }}
              width={70}
              height={70}
              alt=""
              src="../images/5.webp"
            />
          </article>
        </section>

        <button className="clear">
          <FontAwesomeIcon
            style={{ width: "0.8rem", marginRight: "0.6rem" }}
            icon={faTrashCan}
          />
          Clear Cart
        </button>

        <section className="summary">
          <h1>Cart Summary</h1>
          <div className="flex">
            <p className="Subtotal">Subtotal</p>
            <p>$1999</p>
          </div>
          <button className="checkout">CHECKOUT</button>
          <a href="./signin.html"> Please Sign in to continue. </a>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default page;
