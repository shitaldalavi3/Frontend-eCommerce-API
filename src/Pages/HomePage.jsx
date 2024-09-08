import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../utils/api";
import ProductCard from "../Components/ProductCard";
import Gallery from "../Components/Gallary";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);

        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* Gallary section */}
      <Gallery />

      {/* Categories Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-secondary">Categories</h2>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category._id}
              className="bg-primary text-white py-2 px-4 rounded-md"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-secondary">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
