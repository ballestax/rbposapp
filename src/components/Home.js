import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para cargar los productos desde la API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.bacon57burger.com.co/public/api/products"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los productos.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    // Llama a la función para cargar los productos
    fetchProducts();
  }, []); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez al montar el componente.

  return (
    <div>
      <h1>Listado de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
