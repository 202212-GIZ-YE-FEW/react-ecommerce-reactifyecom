import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
        <Image
          className="h-64 w-full object-cover"
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <div className="text-gray-700 mb-4">${product.price}</div>
          <div className="flex items-center">
            <div className="text-yellow-500">
              {Array.from(
                { length: Math.floor(product.rating.rate) },
                (_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                )
              )}
            </div>
            <div className="text-gray-500 ml-2">
              {product.rating.count} reviews
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
