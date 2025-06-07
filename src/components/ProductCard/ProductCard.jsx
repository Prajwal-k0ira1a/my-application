import React from 'react';

const ProductCard = ({ name, price, image, description, stock, category, onAddToCart, onBuyNow }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full h-40 object-contain bg-white rounded-t-xl p-2" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-sm mt-2 text-gray-500">
          <p><strong>Price:</strong> Rs&nbsp;{price}</p>
          <p><strong>Stock:</strong> {stock}</p>
          <p><strong>Category:</strong> {category}</p>
        </div>
        <div className="card-actions justify-between mt-4">
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart({ name, price, image, description })}
            disabled={stock <= 0}
          >
            {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onBuyNow({ name, price, image, description })}
            disabled={stock <= 0}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
