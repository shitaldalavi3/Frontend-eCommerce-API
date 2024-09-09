import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories, fetchProducts } from "../utils/api";
import ProductCard from "../Components/ProductCard";
import Gallery from "../Components/Gallary";
import Footer from "../Components/Footer";
import ProductSection from "../Components/ProductSection";
import Advertise from "../Components/Advertise";


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


      {/* Product Section with Tabs */}
      <div style={{ backgroundColor: "rgb(241, 241, 241)" }}className="container mx-auto p-16 mt-12">
        <h2 className="text-3xl font-serif font-bold mb-8 text-secondary text-center">
          MOST POPULAR PRODUCT
        </h2>

        {/* Tabs and Product Section */}
        <ProductSection products={products} />
      </div>


      {/* Advertise Component */}
      <div className="container mx-auto ">
        <Advertise /> {/* Add the Advertise component here */}
      </div>


      <div className="container mx-auto p-16">
      <h1 className="text-4xl font-bold mb-6 font-serif  text-secondary">Categories</h1>
      <div className="flex flex-wrap ">
        {categories.map((category) => (
          <Link
            to={`/category/${category._id}`} // Use the category ID in the link
            key={category._id}
            className="btn btn-outline m-2"
          >
            {category.name}
          </Link>
        ))}
      </div>
      </div>



      {/* Products Section */}
      <div className="container mx-auto p-16">
        <h2 className="text-4xl font-bold mb-6 font-serif  text-secondary">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
