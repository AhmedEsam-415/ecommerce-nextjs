const Products = ({ posts }) => {
  return (
    <section className="products flex">
      {posts.map((item, index) => {
        return (
          <article title={item.title} key={index} className="card">
            <a href="/pages/product-details.html">
              <img width={266} height={270} src={item.productImg} />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">{item.title.slice(0, 14)}...</h1>
              <p className="description">{item.description.slice(0, 120)}...</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">{item.price}</div>
                <button className="add-to-cart flex">
                  <i className="fa-solid fa-cart-plus" />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
