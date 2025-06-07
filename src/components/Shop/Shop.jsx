import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { addToCart, removeFromCart, checkoutCart } from '../AddCart/Cart';

const products = [
  // Kirana (Grocery) items
  {
    name: "Rice (1 kg)",
    price: 80,
    image: require('../Assets/RICE.jpg'),
    description: "High-quality basmati rice.",
    stock: 20,
    category: "Kirana"
  },
  {
    name: "Cooking Oil (1 L)",
    price: 150,
    image: require('../Assets/cookingOil.jpg'),
    description: "Pure vegetable cooking oil.",
    stock: 15,
    category: "Kirana"
  },
  {
    name: "Sugar (1 kg)",
    price: 60,
    image: require('../Assets/Sugar.jpg'),
    description: "Refined white sugar.",
    stock: 25,
    category: "Kirana"
  },
  {
    name: "Salt (500 gm)",
    price: 20,
    image: require('../Assets/Salt.jpg'),
    description: "Iodized table salt.",
    stock: 30,
    category: "Kirana"
  },
  {
    name: "Wheat Flour (1 kg)",
    price: 75,
    image: require('../Assets/wheat.jpg'),
    description: "Fresh wheat flour for everyday use.",
    stock: 18,
    category: "Kirana"
  },
  {
    name: "Tea Powder (250 gm)",
    price: 120,
    image: require('../Assets/teaPowder.jpg'),
    description: "Strong aromatic tea leaves.",
    stock: 10,
    category: "Kirana"
  },
  {
    name: "Instant Noodles",
    price: 35,
    image: require('../Assets/instantNoodles.png'),
    description: "Quick and tasty noodles.",
    stock: 40,
    category: "Kirana"
  },
  {
    name: "Biscuits (Pack)",
    price: 40,
    image: require('../Assets/Biscuits.jpg'),
    description: "Crunchy and sweet biscuits.",
    stock: 35,
    category: "Kirana"
  },
  {
    name: "Honey (250 gm)",
    price: 180,
    image: require('../Assets/Honey.jpg'),
    description: "Pure natural honey.",
    stock: 8,
    category: "Kirana"
  },
  {
    name: "Coffee Powder (100 gm)",
    price: 150,
    image: require('../Assets/coffeePowder.jpg'),
    description: "Rich flavored coffee.",
    stock: 12,
    category: "Kirana"
  },
  {
    name: "Salted Peanuts (100 gm)",
    price: 50,
    image: require('../Assets/peanuts.png'),
    description: "Crunchy salted peanuts snack.",
    stock: 20,
    category: "Kirana"
  },
  {
    name: "Lentils (1 kg)",
    price: 90,
    image: require('../Assets/lentils.jpg'),
    description: "Mixed lentils for cooking.",
    stock: 22,
    category: "Kirana"
  },
  {
    name: "Green Tea (20 bags)",
    price: 200,
    image: require('../Assets/greenTea.jpg'),
    description: "Refreshing green tea bags.",
    stock: 15,
    category: "Kirana"
  },
  {
    name: "Salted Butter (200 gm)",
    price: 120,
    image: require('../Assets/saltedButter.jpg'),
    description: "Creamy salted butter.",
    stock: 10,
    category: "Kirana"
  },
  {
    name: "Peanut Butter (500 gm)",
    price: 250,
    image: require('../Assets/peanutButter.jpg'),
    description: "Smooth and crunchy peanut butter.",
    stock: 12,
    category: "Kirana"
  },

  // Stationery items
  {
    name: "Ballpoint Pen",
    price: 15,
    image: require('../Assets/ballPoint.jpg'),
    description: "Smooth writing ballpoint pen.",
    stock: 100,
    category: "Stationery"
  },
  {
    name: "Notebook (100 pages)",
    price: 50,
    image: require('../Assets/Notebook.jpg'),
    description: "Lined paper notebook for notes.",
    stock: 60,
    category: "Stationery"
  },
  {
    name: "Pencil",
    price: 10,
    image: require('../Assets/pencil.jpg'),
    description: "HB graphite pencil.",
    stock: 90,
    category: "Stationery"
  },
  {
    name: "Eraser",
    price: 5,
    image: require('../Assets/Eraser.jpg'),
    description: "Soft eraser for pencils.",
    stock: 85,
    category: "Stationery"
  },
  {
    name: "Sharpener",
    price: 12,
    image: require('../Assets/sharpener.jpg'),
    description: "Plastic blade sharpener.",
    stock: 70,
    category: "Stationery"
  },
  {
    name: "Highlighter Set (4 colors)",
    price: 120,
    image: require('../Assets/HighlighterSET.jpg'),
    description: "Bright and vibrant highlighters.",
    stock: 30,
    category: "Stationery"
  },
  {
    name: "Glue Stick",
    price: 25,
    image: require('../Assets/glueStick.jpg'),
    description: "Non-toxic glue stick for paper.",
    stock: 40,
    category: "Stationery"
  },
  {
    name: "Scissors",
    price: 80,
    image: require('../Assets/Scissors.jpg'),
    description: "Sharp stainless steel scissors.",
    stock: 25,
    category: "Stationery"
  },
  {
    name: "Ruler (30 cm)",
    price: 20,
    image: require('../Assets/ruler(30cm).jpg'),
    description: "Transparent plastic ruler.",
    stock: 50,
    category: "Stationery"
  },
  {
    name: "Sticky Notes (Pack)",
    price: 45,
    image: require('../Assets/StickyNotes.jpg'),
    description: "Colorful sticky notes for reminders.",
    stock: 35,
    category: "Stationery"
  },
  {
    name: "Marker Pen",
    price: 40,
    image: require('../Assets/marker.jpg'),
    description: "Permanent black marker pen.",
    stock: 40,
    category: "Stationery"
  },
  {
    name: "Drawing Compass",
    price: 150,
    image: require('../Assets/compass.jpg'),
    description: "Precision drawing compass.",
    stock: 15,
    category: "Stationery"
  },
  {
    name: "Stapler",
    price: 100,
    image: require('../Assets/stapler.png'),
    description: "Standard office stapler.",
    stock: 20,
    category: "Stationery"
  },
  {
    name: "Calculator",
    price: 350,
    image: require('../Assets/calculator.jpg'),
    description: "Basic scientific calculator.",
    stock: 18,
    category: "Stationery"
  },
  {
    name: "File Folder (Pack of 5)",
    price: 90,
    image: require('../Assets/FileFolder.jpg'),
    description: "Durable file folders for documents.",
    stock: 45,
    category: "Stationery"
  },
  {
    name: "Paper Clips (Box)",
    price: 30,
    image: require('../Assets/paperclips.jpg'), // Use a relevant image if available
    description: "Box of 100 assorted paper clips.",
    stock: 0,
    category: "Stationery"
  },
  {
    name: "Whiteboard Duster",
    price: 55,
    image: require('../Assets/DUSTer.jpg'), // Use a relevant image if available
    description: "Soft whiteboard duster for clean erasing.",
    stock: 25,
    category: "Stationery"
  },
  {
    name: "Correction Pen",
    price: 35,
    image: require('../Assets/tipex.jpg'), // Use a relevant image if available
    description: "Quick-dry correction pen for neat fixes.",
    stock: 40,
    category: "Stationery"
  },
  {
    name: "Desk Organizer",
    price: 220,
    image: require('../Assets/deskOrganizer.jpg'), // Use a relevant image if available
    description: "Keep your desk tidy with this multi-compartment organizer.",
    stock: 20,
    category: "Stationery"
  },
  {
    name: "Sticky Flags (Pack)",
    price: 60,
    image: require('../Assets/stickyflags.jpg'), // Use a relevant image if available
    description: "Pack of colorful sticky flags for marking pages.",
    stock: 50,
    category: "Stationery"
  },
  {
    name: "Binder Clips (Set of 12)",
    price: 40,
    image: require('../Assets/binderClips.jpg'), // Use a relevant image if available
    description: "Set of 12 strong binder clips for documents.",
    stock: 35,
    category: "Stationery"
  },
];


const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    addToCart(cart, setCart, product);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 1500);
    console.log('Added to cart:', product);
  };

  const handleBuyNow = (product) => {
    // For now, just log it — you can redirect to checkout or show modal here
    console.log('Buying now:', product);
    alert(`Proceeding to buy: ${product.name} for Rs ${product.price}`);
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Products</h1>
      {message && (
        <div className="alert alert-success shadow-lg mb-4 w-fit mx-auto">
          <span>{message}</span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <select
          className="select select-bordered w-full max-w-xs mr-2"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="All">All Products</option>
          <option value="Kirana">Kirana</option>
          <option value="Stationery">Stationery</option>
        </select>
        <button
          className="btn btn-primary"
          onClick={() => {}}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            stock={item.stock}
            category={item.category}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
