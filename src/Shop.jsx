import React from 'react';
import Card from './Card';

const products = [
  {
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    title: 'Cool Shoes',
    description: 'Stylish and comfortable sneakers.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1609940144067-1e6d51e93b19.webp',
    title: 'Winter Jacket',
    description: 'Keep yourself warm and cozy.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    title: 'Smart Watch',
    description: 'Track your fitness and get notified instantly.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    title: 'Bluetooth Speaker',
    description: 'Portable and powerful sound.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1542291026-7eec264c27ff.webp',
    title: 'Travel Backpack',
    description: 'Perfect for your outdoor adventures.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1532980400858-1cffa6c35bc3.webp',
    title: 'Sunglasses',
    description: 'Stylish shades for sunny days.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1503602642458-232111445657.webp',
    title: 'Wireless Headphones',
    description: 'Noise cancelling and long battery life.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1580894894513-fdb4c7e3a6b3.webp',
    title: 'Running Shoes',
    description: 'Lightweight and durable.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1526178613445-1ed28f6940e9.webp',
    title: 'Graphic T-Shirt',
    description: 'Bold and trendy graphic design.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1572635148608-d3dfdc3b96c0.webp',
    title: 'Fitness Tracker',
    description: 'Monitor heart rate and calories.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1520880867055-1e30d1cb001c.webp',
    title: 'Laptop Stand',
    description: 'Ergonomic and portable.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1560347876-aeef00ee58a1.webp',
    title: 'Desk Lamp',
    description: 'LED lamp with touch control.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1611095564988-f4b0f3ec4c94.webp',
    title: 'Camera Lens',
    description: 'Zoom lens for photography lovers.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1535916707207-35f97e715e2c.webp',
    title: 'Gaming Mouse',
    description: 'High precision and RGB lighting.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1595433562696-4e5f5e5f6f67.webp',
    title: 'Coffee Maker',
    description: 'Brew the perfect cup every morning.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1586262685434-2e47f113204d.webp',
    title: 'Tablet',
    description: 'Compact and powerful tablet.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1617396900888-b66d342a5a63.webp',
    title: 'Men’s Wallet',
    description: 'Leather wallet with multiple compartments.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1583224700202-285ceba1e32b.webp',
    title: 'Wireless Charger',
    description: 'Fast and convenient charging.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1512496015851-a90fb38ba796.webp',
    title: 'Water Bottle',
    description: 'Keep your drinks hot or cold.',
  },
  {
    image: 'https://img.daisyui.com/images/stock/photo-1526170375885-4d8ecf77b99f.webp',
    title: 'Desk Organizer',
    description: 'Declutter your workspace.',
  },
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
