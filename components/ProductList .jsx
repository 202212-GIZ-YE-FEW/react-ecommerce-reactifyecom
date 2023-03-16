import ProductListItem from "./ProductListItem";

export default function ProductList({ products }) {
  return (
    <div className="grid md:grid-cols-3 md:gap-3">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
}
