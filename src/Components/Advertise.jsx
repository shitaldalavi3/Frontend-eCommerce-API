import backgroundImage from '../assets/image/snowy-mountain-landscape-wallpaper-1400x817.jpg';
import Designer9 from "../assets/image/9.jpg";

const Advertise = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay with opacity */}

      {/* Container for the card */}
      <div className="relative flex text-black rounded-lg overflow-hidden shadow-lg max-w-4xl p-8">
        {/* Left side: Image */}
        <div className="w-1/2 pr-8"> {/* Added pr-8 for right padding */}
          <img 
            src={Designer9} 
            alt="Product" 
            className="object-cover w-full h-full" 
          />
        </div>

        {/* Right side: Product Information */}
        <div className="w-1/2 pl-8"> {/* Added pl-8 for left padding */}
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 text-white">Classic Crew Neck Tee</h1> 
          
          {/* Product description */}
          <p className="text-gray-300 mb-6"> 
          The perfect essential for every wardrobe, this Classic White Crew Neck Tee combines style and comfort effortlessly. Made from premium soft cotton, it’s breathable, lightweight, and designed for everyday wear. The timeless crew neck cut makes it ideal for layering or wearing solo, making it a versatile piece for any occasion.
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 text-center text-white mb-6">
            <div className="bg-blue-900 p-4 rounded-lg">
              <p className="text-2xl">3</p>
              <p className="text-sm">DAYS</p>
            </div>
            <div className="bg-blue-900 p-4 rounded-lg">
              <p className="text-2xl">2</p>
              <p className="text-sm">HOUR</p>
            </div>
            <div className="bg-blue-900 p-4 rounded-lg">
              <p className="text-2xl">5</p>
              <p className="text-sm">MIN</p>
            </div>
            <div className="bg-blue-900 p-4 rounded-lg">
              <p className="text-2xl">09</p>
              <p className="text-sm">SEC</p>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <p className="text-4xl font-bold text-white ">€80.00</p>
            <p className="text-gray-500 line-through text-lg">€90.11</p>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;