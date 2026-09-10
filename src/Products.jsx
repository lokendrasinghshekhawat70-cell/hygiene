import "./Products.css";

const products = [
  {
    name: "Sanitary Pads",
    image: "/products/pads.png",
  },
  {
    name: "Baby Diapers",
    image: "/products/diapers.png",
  },
  {
    name: "Wet Wipes",
    image: "/products/wipes.png",
  },
  {
    name: "Period Pain Relief Roll On",
    image: "/products/rollon.png",
  },
];

function Products() {

  const sendProductQuery = (productName, phone = "918800570023") => {

    const message = `Hello Deevora Hygiene,

I am interested in your "${productName}".

Please share:
• Product details
• Price
• Available sizes
• Quantity
• Delivery information

Thank you.`;

    const whatsappURL =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <section className="products" id="product-queries">

      <h2>Our Products</h2>

      <div className="product-grid">

        {products.map((product) => (

          <div className="product-card" key={product.name}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <button
              onClick={() => sendProductQuery(product.name, "918800570023")}
            >
              💬 Send Product Query
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;
