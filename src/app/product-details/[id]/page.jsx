import Header from "components/header/Header";
import "../../../components/header/header.css";

import Footer from "components/footer/Footer";
import "../../../components/footer/footer.css";

import "../productDetails.css";
import "../../globals.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { notFound } from "next/navigation";

//# Generate metadata for each product details page dynamically based on product data
//# fetched using the product ID from the route parameters.
//# This function is called by Next.js to set the page title.
export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await fetch(`http://localhost:4000/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
  };
}

const Page = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:4000/products/${id}`);
  if (!data.ok) {
    notFound();
  }
  const posts = await data.json();

  return (
    <>
      <Header />

      <main style={{ textAlign: "center" }} className="flex">
        <img src={`http://localhost:4000/${posts.productImg}`} alt="" />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{posts.title}</h2>
            <p className="price">${posts.price}</p>
          </div>
          <p className="description">{posts.description} </p>
          <button className="flex add-to-cart">
            <i className="fa-solid fa-cart-plus" />
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;
