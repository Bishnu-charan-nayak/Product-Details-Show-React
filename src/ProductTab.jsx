import "./Product.css";
import Product from "./Product";
import Price from "./Price";

function ProductTab({ title, features, oldPrice, newPrice }) {
  return (
    <div className="product">
      <h3>{title}</h3>
      <Product features={features} />
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default ProductTab;