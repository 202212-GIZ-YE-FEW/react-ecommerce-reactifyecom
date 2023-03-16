import ProductsList from "../../components/ProductsList";
import { fetchProducts } from "../../lib/api";

const ProductsPage = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
    revalidate: 60, // Re-generate the page every minute (60 seconds)
  };
}

export default ProductsPage;
