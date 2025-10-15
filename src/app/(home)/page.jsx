import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import "./home.css";
import Products from "./Products";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");
  const posts = await data.json();
  return (
    <>
      <div className="top-img">
        <Header />

        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main className="">
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>

        <Products posts={posts} />
      </main>

      <Footer />
    </>
  );
}
