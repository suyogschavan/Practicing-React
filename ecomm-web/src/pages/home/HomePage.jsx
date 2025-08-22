import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({cartItems}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData=async ()=>{
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    }
    getData();
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
