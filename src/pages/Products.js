import React, { useState } from 'react';
import './Products.css'; // import CSS

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    { id: 1, name: 'Sourdough Loaf', price: '$6.50', category: 'breads', image: 'https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg', desc: 'Naturally leavened with crispy crust and tangy flavor.' },
    { id: 2, name: 'Whole Wheat', price: '$5.25', category: 'breads', image: 'https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&', desc: 'Hearty whole grain, perfect for sandwiches.' },
    { id: 3, name: 'Butter Croissant', price: '$3.75', category: 'breads', image: 'https://sugargeekshow.com/wp-content/uploads/2022/11/croissants_featured.jpg', desc: 'Flaky layers made with French butter.' },
    { id: 4, name: 'Everything Bagel', price: '$2.50', category: 'breads', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1OpOHwEeR5q8ZMqRwQv_amSIRn1gtl8DCg&s', desc: 'Boiled and baked with sesame, garlic, and onion.' },
    { id: 5, name: 'Ciabatta', price: '$5.75', category: 'breads', image: 'https://hostessatheart.com/wp-content/uploads/2025/02/Ciabatta-Bread-Recipe-1.jpg', desc: 'Italian bread with airy crumb and olive oil finish.' },
    { id: 6, name: 'Rye Bread', price: '$6.00', category: 'breads', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjMi0hGg3cyKme281lsUF4y4siQZBXNEKUw&s', desc: 'Dense and flavorful with caraway seeds.' },
    { id: 7, name: 'Artisan Coffee', price: '$3.50', category: 'beverages', image: 'https://artisancoffeeaccess.files.wordpress.com/2015/04/shutterstock_75410191-96-1500-x-790-coffee-bottom.jpg', desc: 'Single-origin organic coffee, rich and smooth.' },
    { id: 8, name: 'Fresh Orange Juice', price: '$4.25', category: 'beverages', image: 'https://www.knowyourproduce.com/wp-content/uploads/2014/04/fresh-squeezed-orange-juice-6.jpg', desc: 'Cold-pressed daily from local oranges.' },
    { id: 9, name: 'Chai Latte', price: '$4.50', category: 'beverages', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chai-latte-4e5fe2f.jpg?quality=90&resize=440,400', desc: 'Spiced tea with steamed milk and honey.' },
    { id: 10, name: 'Herbal Tea', price: '$3.00', category: 'beverages', image: 'https://ca.brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=16486570375814-1769d1b1a72d', desc: 'Chamomile, peppermint, or green tea.' },
    { id: 11, name: 'Glazed Donut', price: '$2.75', category: 'sweets', image: 'https://herbsandflour.com/wp-content/uploads/2020/02/Baked-Old-Fashioned-Glazed-Donuts-1-scaled.jpg', desc: 'Classic glazed donut, light and fluffy.' },
    { id: 12, name: 'Chocolate Donut', price: '$3.00', category: 'sweets', image: 'https://thefirstyearblog.com/wp-content/uploads/2020/10/chocolate-donuts-Square2.png', desc: 'Rich chocolate with sprinkles.' },
    { id: 13, name: 'Vanilla Cupcake', price: '$3.25', category: 'sweets', image: 'https://www.mybakingaddiction.com/wp-content/uploads/2011/07/unwrapped-vanilla-cupcake-700x1050.jpg', desc: 'Moist vanilla cake with buttercream frosting.' },
    { id: 14, name: 'Red Velvet Cupcake', price: '$3.50', category: 'sweets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Xjhu5NRz6359z4hHlIr1F7db8AlCBR6Ig&s', desc: 'Classic red velvet with cream cheese frosting.' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'breads', label: 'Breads' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'sweets', label: 'Sweets' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bakery-container">
       <div id="topp-section">
        <div style={{alignItems: "center", justifyContent: "center",textAlign: "center"}}>
        <h1 style={{ color: "white" }}>Products</h1>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home/<span><a href="/products" style={{ color: "white", textDecoration: "none" }}> Products </a></span></a>
        </div>
      </div>

      <div className="bakery-wrapper">
        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="price">{product.price}</span>
                </div>
                <p className="product-description">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
