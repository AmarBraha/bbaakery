import React, { useState } from "react";
import { X, ShoppingCart, Minus, Plus, Trash2, Heart } from "lucide-react";
import Counter from '../components/Counter';
import "./Products.css";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const products = [
    { id: 1, name: "Sourdough Loaf", price: "$6.50", category: "breads", image: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg", desc: "Naturally leavened with crispy crust and tangy flavor." },
    { id: 2, name: "Whole Wheat", price: "$5.25", category: "breads", image: "https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&", desc: "Hearty whole grain, perfect for sandwiches." },
    { id: 3, name: "Butter Croissant", price: "$3.75", category: "breads", image: "https://sugargeekshow.com/wp-content/uploads/2022/11/croissants_featured.jpg", desc: "Flaky layers made with French butter." },
    { id: 4, name: "Everything Bagel", price: "$2.50", category: "breads", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1OpOHwEeR5q8ZMqRwQv_amSIRn1gtl8DCg&s", desc: "Boiled and baked with sesame, garlic, and onion." },
    { id: 5, name: "Ciabatta", price: "$5.75", category: "breads", image: "https://hostessatheart.com/wp-content/uploads/2025/02/Ciabatta-Bread-Recipe-1.jpg", desc: "Italian bread with airy crumb and olive oil finish." },
    { id: 6, name: "Rye Bread", price: "$6.00", category: "breads", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjMi0hGg3cyKme281lsUF4y4siQZBXNEKUw&s", desc: "Dense and flavorful with caraway seeds." },
    { id: 7, name: "Artisan Coffee", price: "$3.50", category: "beverages", image: "https://artisancoffeeaccess.files.wordpress.com/2015/04/shutterstock_75410191-96-1500-x-790-coffee-bottom.jpg", desc: "Single-origin organic coffee, rich and smooth." },
    { id: 8, name: "Fresh Orange Juice", price: "$4.25", category: "beverages", image: "https://www.knowyourproduce.com/wp-content/uploads/2014/04/fresh-squeezed-orange-juice-6.jpg", desc: "Cold-pressed daily from local oranges." },
    { id: 9, name: "Chai Latte", price: "$4.50", category: "beverages", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chai-latte-4e5fe2f.jpg?quality=90&resize=440,400", desc: "Spiced tea with steamed milk and honey." },
    { id: 10, name: "Herbal Tea", price: "$3.00", category: "beverages", image: "https://ca.brodandtaylor.com/cdn/shop/articles/dehydrated-tea-thumb_1024x.jpg?v=16486570375814-1769d1b1a72d", desc: "Chamomile, peppermint, or green tea." },
    { id: 11, name: "Glazed Donut", price: "$2.75", category: "sweets", image: "https://herbsandflour.com/wp-content/uploads/2020/02/Baked-Old-Fashioned-Glazed-Donuts-1-scaled.jpg", desc: "Classic glazed donut, light and fluffy." },
    { id: 12, name: "Chocolate Donut", price: "$3.00", category: "sweets", image: "https://thefirstyearblog.com/wp-content/uploads/2020/10/chocolate-donuts-Square2.png", desc: "Rich chocolate with sprinkles." },
    { id: 13, name: "Vanilla Cupcake", price: "$3.25", category: "sweets", image: "https://www.mybakingaddiction.com/wp-content/uploads/2011/07/unwrapped-vanilla-cupcake-700x1050.jpg", desc: "Moist vanilla cake with buttercream frosting." },
    { id: 14, name: "Red Velvet Cupcake", price: "$3.50", category: "sweets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Xjhu5NRz6359z4hHlIr1F7db8AlCBR6Ig&s", desc: "Classic red velvet with cream cheese frosting." },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "breads", label: "Breads" },
    { id: "beverages", label: "Beverages" },
    { id: "sweets", label: "Sweets" },
  ];

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  const showNotificationMsg = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const toggleFavorite = (product, e) => {
    if (e) e.stopPropagation();
    const isFav = favorites.some(item => item.id === product.id);
    if (isFav) {
      setFavorites(favorites.filter(item => item.id !== product.id));
      showNotificationMsg("Removed from favorites");
    } else {
      setFavorites([...favorites, product]);
      showNotificationMsg("Added to favorites!");
    }
  };

  const isFavorite = (productId) => favorites.some(item => item.id === productId);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + modalQuantity } : item));
    } else {
      setCart([...cart, { ...product, quantity: modalQuantity }]);
    }
    showNotificationMsg("Added to cart!");
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => setCart(cart.filter(item => item.id !== productId));
  const getCartTotal = () => cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0).toFixed(2);
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
  const closeModal = () => { setSelectedProduct(null); setModalQuantity(1); };
  const increaseModalQuantity = () => setModalQuantity(prev => prev + 1);
  const decreaseModalQuantity = () => setModalQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="bakery-container">
      <div id="topp-section">
        <div className="header-content">
          <h1>Products</h1>
          <div className="breadcrumb">
            <a href="/">Home</a><span>/</span><a href="/products">Products</a>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          {notificationMessage.includes("favorite") ? <Heart size={20} /> : <ShoppingCart size={20} />}
          <span>{notificationMessage}</span>
        </div>
      )}

      <div className="bakery-wrapper">
        <div className="cart-container">
          <div className="favorites-badge-wrapper" onClick={() => setIsFavoritesOpen(true)}>
            <Heart className="favorites-icon" size={28} />
            {favorites.length > 0 && <span className="favorites-count">{favorites.length}</span>}
          </div>
          <div className="cart-badge-wrapper" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="cart-icon" size={28} />
            {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
          </div>
        </div>

        <div className="category-buttons">
          {categories.map((cat) => (
            <button key={cat.id} className={`category-btn ${activeCategory === cat.id ? "active" : ""}`} onClick={() => setActiveCategory(cat.id)}>{cat.label}</button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`} onClick={(e) => toggleFavorite(product, e)}>
                  <Heart size={22} fill={isFavorite(product.id) ? "#dc2626" : "none"} color={isFavorite(product.id) ? "#dc2626" : "#fff"} />
                </button>
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

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-wrapper">
              <button onClick={closeModal} className="modal-close-btn"><X size={24} /></button>
              <button className={`modal-favorite-btn ${isFavorite(selectedProduct.id) ? 'active' : ''}`} onClick={(e) => toggleFavorite(selectedProduct, e)}>
                <Heart size={24} fill={isFavorite(selectedProduct.id) ? "#dc2626" : "none"} color={isFavorite(selectedProduct.id) ? "#dc2626" : "#4b5563"} />
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            </div>
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <span className="modal-price">{selectedProduct.price}</span>
              </div>
              <p className="modal-description">{selectedProduct.desc}</p>
              <div className="modal-category"><span className="category-badge">{selectedProduct.category}</span></div>
              <div className="modal-quantity-section">
                <label className="modal-quantity-label">Quantity:</label>
                <div className="modal-quantity-controls">
                  <button onClick={decreaseModalQuantity} className="modal-quantity-btn"><Minus size={20} /></button>
                  <div className="modal-counter-wrapper">
                    <Counter value={modalQuantity} places={modalQuantity >= 100 ? [100, 10, 1] : modalQuantity >= 10 ? [10, 1] : [1]} fontSize={35} padding={8} gap={5} textColor="#78350f" fontWeight={700} />
                  </div>
                  <button onClick={increaseModalQuantity} className="modal-quantity-btn"><Plus size={20} /></button>
                </div>
              </div>
              <div className="modal-actions">
                <button onClick={() => { handleAddToCart(selectedProduct); closeModal(); }} className="btn-add-to-cart"><ShoppingCart size={20} />Add to Cart</button>
                <button onClick={closeModal} className="btn-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={`favorites-sidebar ${isFavoritesOpen ? 'open' : ''}`}>
        <div className="favorites-sidebar-header">
          <h2>My Favorites</h2>
          <button onClick={() => setIsFavoritesOpen(false)} className="favorites-close-btn"><X size={24} /></button>
        </div>
        <div className="favorites-sidebar-content">
          {favorites.length === 0 ? (
            <div className="favorites-empty"><Heart size={48} /><p>No favorites yet</p><span>Click the heart icon on products to add them here</span></div>
          ) : (
            favorites.map((item) => (
              <div key={item.id} className="favorites-item" onClick={() => { setSelectedProduct(item); setIsFavoritesOpen(false); }}>
                <img src={item.image} alt={item.name} className="favorites-item-image" />
                <div className="favorites-item-details">
                  <h3>{item.name}</h3>
                  <p className="favorites-item-price">{item.price}</p>
                  <span className="favorites-item-category">{item.category}</span>
                </div>
                <button className="favorites-remove-btn" onClick={(e) => { e.stopPropagation(); toggleFavorite(item); }}><Trash2 size={18} /></button>
              </div>
            ))
          )}
        </div>
        {favorites.length > 0 && (
          <div className="favorites-sidebar-footer">
            <p>{favorites.length} item{favorites.length !== 1 ? 's' : ''} in favorites</p>
          </div>
        )}
      </div>

      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h2>Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="cart-close-btn"><X size={24} /></button>
        </div>
        <div className="cart-sidebar-content">
          {cart.length === 0 ? (
            <div className="cart-empty"><ShoppingCart size={48} /><p>Your cart is empty</p></div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{item.price}</p>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn"><Minus size={16} /></button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn"><Plus size={16} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn"><Trash2 size={18} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-total"><span>Total:</span><span className="total-price">${getCartTotal()}</span></div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>

      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
      {isFavoritesOpen && <div className="cart-overlay" onClick={() => setIsFavoritesOpen(false)}></div>}
    </div>
  );
}