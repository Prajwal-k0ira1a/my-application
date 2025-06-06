import React from 'react';
import Card from './Card';

const products = [
  { image: 'https://via.placeholder.com/300x200?text=Cool+Shoes', title: 'Cool Shoes', description: 'Stylish and comfortable sneakers.' },
  { image: 'https://via.placeholder.com/300x200?text=Winter+Jacket', title: 'Winter Jacket', description: 'Keep yourself warm and cozy.' },
  { image: 'https://via.placeholder.com/300x200?text=Smart+Watch', title: 'Smart Watch', description: 'Track your fitness and get notified instantly.' },
  { image: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker', title: 'Bluetooth Speaker', description: 'Portable and powerful sound.' },
  { image: 'https://via.placeholder.com/300x200?text=Travel+Backpack', title: 'Travel Backpack', description: 'Perfect for your outdoor adventures.' },
  { image: 'https://via.placeholder.com/300x200?text=Sunglasses', title: 'Sunglasses', description: 'Stylish shades for sunny days.' },
  { image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones', title: 'Wireless Headphones', description: 'Noise cancelling and long battery life.' },
  { image: 'https://via.placeholder.com/300x200?text=Running+Shoes', title: 'Running Shoes', description: 'Lightweight and durable.' },
  { image: 'https://via.placeholder.com/300x200?text=Graphic+T-Shirt', title: 'Graphic T-Shirt', description: 'Bold and trendy graphic design.' },
  { image: 'https://via.placeholder.com/300x200?text=Fitness+Tracker', title: 'Fitness Tracker', description: 'Monitor heart rate and calories.' },
  { image: 'https://via.placeholder.com/300x200?text=Laptop+Stand', title: 'Laptop Stand', description: 'Ergonomic and portable.' },
  { image: 'https://via.placeholder.com/300x200?text=Desk+Lamp', title: 'Desk Lamp', description: 'LED lamp with touch control.' },
  { image: 'https://via.placeholder.com/300x200?text=Camera+Lens', title: 'Camera Lens', description: 'Zoom lens for photography lovers.' },
  { image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse', title: 'Gaming Mouse', description: 'High precision and RGB lighting.' },
  { image: 'https://via.placeholder.com/300x200?text=Coffee+Maker', title: 'Coffee Maker', description: 'Brew the perfect cup every morning.' },
  { image: 'https://via.placeholder.com/300x200?text=Tablet', title: 'Tablet', description: 'Compact and powerful tablet.' },
  { image: 'https://via.placeholder.com/300x200?text=Men%27s+Wallet', title: 'Men’s Wallet', description: 'Leather wallet with multiple compartments.' },
  { image: 'https://via.placeholder.com/300x200?text=Wireless+Charger', title: 'Wireless Charger', description: 'Fast and convenient charging.' },
  { image: 'https://via.placeholder.com/300x200?text=Water+Bottle', title: 'Water Bottle', description: 'Keep your drinks hot or cold.' },
  { image: 'https://via.placeholder.com/300x200?text=Desk+Organizer', title: 'Desk Organizer', description: 'Declutter your workspace.' },
];

const Shop = () => {
  const handleBuy = (title) => {
    alert(`Buying ${title}!`);
  };

  const handleAddToCart = (title) => {
    alert(`Added ${title} to cart!`);
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          onBuy={() => handleBuy(product.title)}
          onAddToCart={() => handleAddToCart(product.title)}
        />
      ))}
    </div>
  );
};

export default Shop;
