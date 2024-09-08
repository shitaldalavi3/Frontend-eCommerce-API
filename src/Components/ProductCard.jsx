import { useCart } from "../contex/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart } = useCart();
  const productInCart = cart.find((item) => item._id === product._id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="relative card w-72 bg-white shadow-md m-4 border group rounded-xl overflow-hidden">
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

      {/* New Label - Top Right */}
      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
        New
      </div>

      {/* Product Image */}
      <figure className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-40"
        />
        
        {/* Hover Action Buttons */}
        <div className="absolute bottom-2 right-0 flex flex-col space-y-2 transform translate-x-full group-hover:translate-x-0 transition-transform  duration-500 p-3">
          {/* Favorite Button - Heart Icon Turns Red on Hover */}
          <div className="flex items-end justify-end">
            <button className="bg-white w-10 h-10 flex items-center justify-center rounded-md shadow-md transition-colors">
              <i className="fa fa-heart text-black hover:text-red-600 transition-colors text-lg"></i>
            </button>
          </div>
          {/* Add to Cart Button */}
          <button
            className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-red-500 hover:text-white transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </figure>

      {/* Product Details with Black Background */}
      <div className="p-4 bg-black text-white flex flex-col items-start">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <div className="text-lg font-semibold mt-2">
          {/* Display only the current product price */}
          <span className="text-red-500">€{product.price}</span>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;