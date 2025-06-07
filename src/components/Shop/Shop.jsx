import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

 const products = [
  // Kirana (Grocery) items
  {
    name: "Rice (1 kg)",
    price: 80,
    image: "https://via.placeholder.com/200",
    description: "High-quality basmati rice.",
    stock: 20,
    category: "Kirana"
  },
  {
    name: "Cooking Oil (1 L)",
    price: 150,
    image: "https://via.placeholder.com/200",
    description: "Pure vegetable cooking oil.",
    stock: 15,
    category: "Kirana"
  },
  {
    name: "Sugar (1 kg)",
    price: 60,
    image: "https://via.placeholder.com/200",
    description: "Refined white sugar.",
    stock: 25,
    category: "Kirana"
  },
  {
    name: "Salt (500 gm)",
    price: 20,
    image: "https://via.placeholder.com/200",
    description: "Iodized table salt.",
    stock: 30,
    category: "Kirana"
  },
  {
    name: "Wheat Flour (1 kg)",
    price: 75,
    image: "https://via.placeholder.com/200",
    description: "Fresh wheat flour for everyday use.",
    stock: 18,
    category: "Kirana"
  },
  {
    name: "Tea Powder (250 gm)",
    price: 120,
    image: "https://via.placeholder.com/200",
    description: "Strong aromatic tea leaves.",
    stock: 10,
    category: "Kirana"
  },
  {
    name: "Instant Noodles",
    price: 35,
    image: "https://via.placeholder.com/200",
    description: "Quick and tasty noodles.",
    stock: 40,
    category: "Kirana"
  },
  {
    name: "Biscuits (Pack)",
    price: 40,
    image: "https://via.placeholder.com/200",
    description: "Crunchy and sweet biscuits.",
    stock: 35,
    category: "Kirana"
  },
  {
    name: "Honey (250 gm)",
    price: 180,
    image: "https://via.placeholder.com/200",
    description: "Pure natural honey.",
    stock: 8,
    category: "Kirana"
  },
  {
    name: "Coffee Powder (100 gm)",
    price: 150,
    image: "https://via.placeholder.com/200",
    description: "Rich flavored coffee.",
    stock: 12,
    category: "Kirana"
  },
  {
    name: "Salted Peanuts (100 gm)",
    price: 50,
    image: "https://via.placeholder.com/200",
    description: "Crunchy salted peanuts snack.",
    stock: 20,
    category: "Kirana"
  },
  {
    name: "Lentils (1 kg)",
    price: 90,
    image: "https://via.placeholder.com/200",
    description: "Mixed lentils for cooking.",
    stock: 22,
    category: "Kirana"
  },
  {
    name: "Green Tea (20 bags)",
    price: 200,
    image: "https://via.placeholder.com/200",
    description: "Refreshing green tea bags.",
    stock: 15,
    category: "Kirana"
  },
  {
    name: "Salted Butter (200 gm)",
    price: 120,
    image: "https://via.placeholder.com/200",
    description: "Creamy salted butter.",
    stock: 10,
    category: "Kirana"
  },
  {
    name: "Peanut Butter (500 gm)",
    price: 250,
    image: "https://via.placeholder.com/200",
    description: "Smooth and crunchy peanut butter.",
    stock: 12,
    category: "Kirana"
  },

  // Stationery items
  {
    name: "Ballpoint Pen",
    price: 15,
    image: "https://via.placeholder.com/200",
    description: "Smooth writing ballpoint pen.",
    stock: 100,
    category: "Stationery"
  },
  {
    name: "Notebook (100 pages)",
    price: 50,
    image: "https://via.placeholder.com/200",
    description: "Lined paper notebook for notes.",
    stock: 60,
    category: "Stationery"
  },
  {
    name: "Pencil",
    price: 10,
    image: "https://via.placeholder.com/200",
    description: "HB graphite pencil.",
    stock: 90,
    category: "Stationery"
  },
  {
    name: "Eraser",
    price: 5,
    image: "https://via.placeholder.com/200",
    description: "Soft eraser for pencils.",
    stock: 85,
    category: "Stationery"
  },
  {
    name: "Sharpener",
    price: 12,
    image: "https://via.placeholder.com/200",
    description: "Plastic blade sharpener.",
    stock: 70,
    category: "Stationery"
  },
  {
    name: "Highlighter Set (4 colors)",
    price: 120,
    image: "https://via.placeholder.com/200",
    description: "Bright and vibrant highlighters.",
    stock: 30,
    category: "Stationery"
  },
  {
    name: "Glue Stick",
    price: 25,
    image: "https://via.placeholder.com/200",
    description: "Non-toxic glue stick for paper.",
    stock: 40,
    category: "Stationery"
  },
  {
    name: "Scissors",
    price: 80,
    image: "https://via.placeholder.com/200",
    description: "Sharp stainless steel scissors.",
    stock: 25,
    category: "Stationery"
  },
  {
    name: "Ruler (30 cm)",
    price: 20,
    image: "https://via.placeholder.com/200",
    description: "Transparent plastic ruler.",
    stock: 50,
    category: "Stationery"
  },
  {
    name: "Sticky Notes (Pack)",
    price: 45,
    image: "https://via.placeholder.com/200",
    description: "Colorful sticky notes for reminders.",
    stock: 35,
    category: "Stationery"
  },
  {
    name: "Marker Pen",
    price: 40,
    image: "https://via.placeholder.com/200",
    description: "Permanent black marker pen.",
    stock: 40,
    category: "Stationery"
  },
  {
    name: "Drawing Compass",
    price: 150,
    image: "https://via.placeholder.com/200",
    description: "Precision drawing compass.",
    stock: 15,
    category: "Stationery"
  },
  {
    name: "Stapler",
    price: 100,
    image: "https://via.placeholder.com/200",
    description: "Standard office stapler.",
    stock: 20,
    category: "Stationery"
  },
  {
    name: "Calculator",
    price: 350,
    image: "https://via.placeholder.com/200",
    description: "Basic scientific calculator.",
    stock: 18,
    category: "Stationery"
  },
  {
    name: "File Folder (Pack of 5)",
    price: 90,
    image: "https://via.placeholder.com/200",
    description: "Durable file folders for documents.",
    stock: 45,
    category: "Stationery"
  }
];


const Shop = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    console.log('Added to cart:', product);
  };

  const handleBuyNow = (product) => {
    // For now, just log it — you can redirect to checkout or show modal here
    console.log('Buying now:', product);
    alert(`Proceeding to buy: ${product.name} for Rs ${product.price}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((item, index) => (
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
