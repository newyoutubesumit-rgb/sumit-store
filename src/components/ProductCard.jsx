import "../css/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <h3>{product.price}</h3>

    </div>
  );
}

export default ProductCard;
