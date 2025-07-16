import React, { useState } from 'react';
import { ShoppingCart, Download, MessageCircle, Plus, Minus, Play, Shield, Truck, Award, CheckCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Enhanced Mock Data - Eco Crackers Products (100 products)
const categories = [
  { id: 'all', name: 'All Products', icon: '🎆', count: 100 },
  { id: 'kids', name: 'Kids Crackers', icon: '🎨', count: 15 },
  { id: 'gift', name: 'Gift Boxes', icon: '🎁', count: 12 },
  { id: 'fancy', name: 'Fancy Fireworks', icon: '✨', count: 20 },
  { id: 'sound', name: 'Sound Crackers', icon: '💥', count: 15 },
  { id: 'color', name: 'Color Crackers', icon: '🌈', count: 18 },
  { id: 'rockets', name: 'Rockets', icon: '🚀', count: 12 },
  { id: 'sparklers', name: 'Sparklers', icon: '✨', count: 8 }
];

// Generate 100 products
const generateProducts = () => {
  const baseProducts = [
    {
      name: 'Electric Sparkler',
      tamilName: 'எலெக்ட்ரிக் ஸ்பார்க்லர்',
      category: 'sparklers',
      description: 'Premium electric sparklers perfect for celebrations',
      basePrice: 45,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Colour Sparkler',
      tamilName: 'கலர் ஸ்பார்க்லர்',
      category: 'sparklers',
      description: 'Colorful sparklers with vibrant display',
      basePrice: 50,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Premium Gift Box',
      tamilName: 'ப்ரீமியம் கிஃப்ட் பாக்ஸ்',
      category: 'gift',
      description: 'Complete assorted cracker gift collection',
      basePrice: 850,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Flower Pot',
      tamilName: 'ஃப்ளவர் பாட்',
      category: 'fancy',
      description: 'Beautiful ground flower pot with colorful sparks',
      basePrice: 35,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Thunder Bomb',
      tamilName: 'தண்டர் பாம்ப்',
      category: 'sound',
      description: 'High-impact sound cracker',
      basePrice: 25,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Color Smoke Bomb',
      tamilName: 'கலர் ஸ்மோக் பாம்ப்',
      category: 'color',
      description: 'Vibrant colored smoke effects',
      basePrice: 65,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Sky Rocket',
      tamilName: 'ஸ்கை ராக்கெட்',
      category: 'rockets',
      description: 'High-altitude rocket with spectacular burst',
      basePrice: 180,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Kids Safe Cracker',
      tamilName: 'கிட்ஸ் சேஃப் கிராக்கர்',
      category: 'kids',
      description: 'Child-safe crackers for family fun',
      basePrice: 120,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Fancy Chakkar',
      tamilName: 'ஃபான்ஸி சக்கர்',
      category: 'fancy',
      description: 'Traditional spinning firework',
      basePrice: 15,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Ground Spinner',
      tamilName: 'கிரவுண்ட் ஸ்பின்னர்',
      category: 'fancy',
      description: 'Colorful ground spinning firework',
      basePrice: 20,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const sizes = ['Small', 'Medium', 'Large', 'Extra Large', 'Deluxe', 'Premium', 'Special', 'Super'];
  const variations = ['Standard', 'Deluxe', 'Premium', 'Special', 'Super', 'Mega', 'Ultra', 'Max'];
  const contents = ['5 BOX', '10 BOX', 'SINGLE', 'SET', 'PAIR', '3 PACK', 'BUNDLE', 'KIT'];
  
  const images = [
    'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=120&h=90&fit=crop',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=120&h=90&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=90&fit=crop',
    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=120&h=90&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=120&h=90&fit=crop',
    'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=120&h=90&fit=crop'
  ];

  const products = [];
  
  for (let i = 0; i < 100; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const variation = variations[Math.floor(Math.random() * variations.length)];
    const content = contents[Math.floor(Math.random() * contents.length)];
    
    const priceVariation = 0.8 + Math.random() * 0.4;
    const price = Math.round(baseProduct.basePrice * priceVariation);
    const originalPrice = Math.round(price * (1.1 + Math.random() * 0.3));
    
    products.push({
      id: i + 1,
      name: `${size} ${baseProduct.name} ${variation}`,
      tamilName: `${baseProduct.tamilName} ${variation}`,
      content: content,
      price: price,
      originalPrice: originalPrice,
      image: images[Math.floor(Math.random() * images.length)],
      category: baseProduct.category,
      inStock: Math.random() > 0.1,
      stockCount: Math.floor(Math.random() * 100) + 10,
      description: baseProduct.description,
      videoUrl: baseProduct.videoUrl
    });
  }
  
  return products;
};

const products = generateProducts();

const HomePage = ({ 
  navigateTo, 
  addToCart, 
  productQuantities, 
  setProductQuantities, 
  searchQuery, 
  openVideo 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tamilName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Update quantity for a product
  const updateQuantity = (productId, change) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  // Check if product is selected
  const isProductSelected = (productId) => {
    return (productQuantities[productId] || 0) > 0;
  };

  // Hero Banner Component
  const HeroBanner = () => (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Eco Crackers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            India's No.1 Online Crackers Store - Premium Quality, Safe & Certified
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-2 text-yellow-300" />
              <span className="font-semibold">100% Safe</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="h-12 w-12 mb-2 text-yellow-300" />
              <span className="font-semibold">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 mb-2 text-yellow-300" />
              <span className="font-semibold">Premium Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 mb-2 text-yellow-300" />
              <span className="font-semibold">Certified Products</span>
            </div>
          </div>

          {/* Promotional Offers */}
          <div className="bg-yellow-400 text-black py-4 px-8 rounded-lg inline-block mb-8">
            <div className="flex items-center justify-center space-x-8">
              <span className="font-bold text-lg">🎯 FLAT 20% OFF on orders above ₹1000</span>
              <span className="font-bold text-lg">🚚 FREE DELIVERY within 10km</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold">
              <Download className="mr-2 h-5 w-5" />
              Download Price List
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Category Filter Component
  const CategoryFilter = () => (
    <div className="bg-white border-b sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <div className="flex items-center space-x-4">
            <span className="text-lg text-gray-600">
              Showing {filteredProducts.length} products
            </span>
          </div>
        </div>
        
        <div className="mt-6 overflow-x-auto">
          <div className="flex space-x-3 pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap ${
                  selectedCategory === category.id 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-700 hover:bg-red-50'
                }`}
              >
                {category.icon} {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Product List Component
  const ProductList = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 px-8 py-6 border-b">
          <div className="grid grid-cols-12 gap-6 items-center font-semibold text-gray-700">
            <div className="col-span-2 text-center">
              Product
            </div>
            <div className="col-span-4">
              <span className="text-green-600 text-lg">Name</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-red-600 text-lg">Content</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-blue-600 text-lg">Sales Price</span>
            </div>
            <div className="col-span-2 text-center text-lg">
              Quantity
            </div>
          </div>
        </div>

        {/* Product Rows */}
        <div className="divide-y divide-gray-200">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`px-8 py-6 transition-all duration-200 ${
                isProductSelected(product.id) 
                  ? 'bg-red-50 border-l-4 border-red-500' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Product Image and Video Button */}
                <div className="col-span-2">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-16 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                          <span className="text-white text-xs font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 rounded-full p-0 bg-red-500 hover:bg-red-600 text-white border-red-500 shadow-lg"
                      onClick={() => openVideo(product.videoUrl)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Name */}
                <div className="col-span-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-3 font-medium">{index + 1}.</span>
                    <div>
                      <h3 className={`font-semibold text-base ${
                        isProductSelected(product.id) ? 'text-red-700' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </h3>
                      <p className="text-sm text-red-600 mt-1">
                        {product.tamilName}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-2 text-center">
                  <span className="text-red-600 font-semibold text-base">
                    {product.content}
                  </span>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center">
                  <div>
                    <span className="font-bold text-gray-900 text-lg">Rs. {product.price.toFixed(2)}</span>
                    {product.originalPrice > product.price && (
                      <div className="text-sm text-gray-500 line-through">
                        Rs. {product.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-2">
                  <div className="flex items-center justify-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 rounded-full p-0 border-gray-300 hover:bg-red-50 hover:border-red-300"
                      onClick={() => updateQuantity(product.id, -1)}
                      disabled={!product.inStock}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <div className="text-center min-w-[60px]">
                      <span className={`font-bold text-lg ${
                        isProductSelected(product.id) ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {productQuantities[product.id] || 0}
                      </span>
                      {isProductSelected(product.id) && (
                        <div className="text-sm text-red-600 font-semibold">
                          Rs. {((productQuantities[product.id] || 0) * product.price).toFixed(0)}
                        </div>
                      )}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 rounded-full p-0 border-gray-300 hover:bg-red-50 hover:border-red-300"
                      onClick={() => updateQuantity(product.id, 1)}
                      disabled={!product.inStock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Sticky Selected Items Section
  const StickySelectedItems = () => {
    const hasSelectedItems = Object.values(productQuantities).some(qty => qty > 0);
    
    if (!hasSelectedItems) return null;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-red-200 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-xl">Selected Items</h3>
              <p className="text-gray-600">
                {Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0)} items selected
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-600">
                ₹{Object.entries(productQuantities).reduce((total, [productId, qty]) => {
                  const product = products.find(p => p.id === parseInt(productId));
                  return total + (product ? product.price * qty : 0);
                }, 0).toFixed(0)}
              </div>
              <Button 
                size="lg"
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                onClick={() => {
                  Object.entries(productQuantities).forEach(([productId, qty]) => {
                    if (qty > 0) {
                      const product = products.find(p => p.id === parseInt(productId));
                      if (product) addToCart(product, qty);
                    }
                  });
                  setProductQuantities({});
                  navigateTo('cart');
                }}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart ({Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0)})
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HeroBanner />
      <CategoryFilter />
      <ProductList />
      <StickySelectedItems />
    </div>
  );
};

export default HomePage;