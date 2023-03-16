import Link from "next/link";

export default function ProductListItem({ product }) {
  return (
    <div className="card p-5">
      <div className="mb-2">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="mb-2">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Link href={`/product/${product.slug}`}>
          <a className="primary-button">View Product</a>
        </Link>
      </div>
    </div>
  );
}
