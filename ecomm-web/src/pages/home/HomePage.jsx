import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({cartItems, loadCart}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData=async ()=>{
      const response = await axios.get("https://ecomm-backend-dm33.onrender.com/api/products");
      setProducts(response.data);
    }
    getData();
  }, []);
  return (
    <>
      <Header cartItems={cartItems}/>
      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
