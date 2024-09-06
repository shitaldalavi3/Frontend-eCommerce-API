const API_BASE_URL = "http://localhost:8080"; // Backend API URL

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?categoryId=${categoryId}`);
    if (!response.ok) throw new Error("Failed to fetch products by category");
    return response.json();
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

// Add new category
export const addCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    if (!response.ok) throw new Error("Failed to add category");
    return response.json();
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

// Add new product
export const addProduct = async (product) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to add product");
    return response.json();
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
