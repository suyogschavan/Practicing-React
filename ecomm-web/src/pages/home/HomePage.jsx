import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({cartItems}) {
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((res) => {setProducts(res)});
  }, []);
  return (
    <>
      <Header cartItems={cartItems}/>
      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
