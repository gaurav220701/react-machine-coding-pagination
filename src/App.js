import { useEffect, useState } from "react";
import "./styles.css";
import React from "react";
import ProductCard from "./Components/ProductCard";
import Paginations from "./Components/Paginations";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const jsonData = await data.json();
    setProducts(jsonData.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const PAGE_SIZE = 10;
  const numOfPages = Math.ceil(products.length / PAGE_SIZE);
  const start = currentPage * 10;
  const end = start + PAGE_SIZE;

  const handleClick = (pageNumber) => {
    setCurrentPage((prev) => pageNumber);
  };
  return (
    <div className="App">
      <Paginations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numOfPages={numOfPages}
        handleClick={handleClick}
      />

      <div className="products">
        {products.slice(start, end).map((el) => {
          return <ProductCard key={el.id} image={el.images} title={el.title} />;
        })}
      </div>
    </div>
  );
}
