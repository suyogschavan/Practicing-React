import { LoadingProduct } from "./LoadingProduct";
import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {products.length > 2 ? (
        products.map((product) => (
          <Product key={product.id} product={product} loadCart={loadCart} />
        ))
      ) : (
        Array.from({ length: 50 }).map((_, index) => (
          <LoadingProduct key={index} />
        ))
      )}
    </div>
  );
}
