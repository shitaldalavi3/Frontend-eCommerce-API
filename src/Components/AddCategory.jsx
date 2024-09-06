import { useState } from "react";
import { addCategory } from "../utils/api";

const AddCategoryForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCategory({ name });
      alert("Category added successfully");
      setName(""); // Clear input after submission
    } catch (error) {
      alert("Failed to add category");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="input input-bordered mb-2"
        required
      />
      <button type="submit" className="btn btn-primary">
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
