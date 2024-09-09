import Footer from "../Components/Footer";
import { useCart } from "../contex/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <table className="min-w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 py-2 px-4 text-left">
              Product
            </th>
            <th className="border border-gray-300 py-2 px-4 text-left">
              Quantity
            </th>
            <th className="border border-gray-300 py-2 px-4 text-left">
              Price
            </th>
            <th className="border border-gray-300 py-2 px-4 text-left">
              Total
            </th>
            <th className="border border-gray-300 py-2 px-4 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 py-2 px-4">{item.name}</td>
              <td className="border border-gray-300 py-2 px-4">
                {item.quantity}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                €{item.price.toFixed(2)}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                €{(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <div className="flex space-x-2">
                  <button
                    className="btn bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                  <button
                    className="btn bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        <h2 className="text-2xl">Total: €{total}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;