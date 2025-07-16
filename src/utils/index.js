// Price formatting utilities
export const formatPrice = (price, currency = '₹') => {
  return `${currency}${price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
};

export const formatPriceCompact = (price, currency = '₹') => {
  if (price >= 10000000) {
    return `${currency}${(price / 10000000).toFixed(1)}Cr`;
  } else if (price >= 100000) {
    return `${currency}${(price / 100000).toFixed(1)}L`;
  } else if (price >= 1000) {
    return `${currency}${(price / 1000).toFixed(1)}K`;
  }
  return `${currency}${price.toLocaleString('en-IN')}`;
};

// Date formatting utilities
export const formatDate = (date, format = 'short') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  switch (format) {
    case 'long':
      return dateObj.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    case 'time':
      return dateObj.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      });
    default:
      return dateObj.toLocaleDateString('en-IN');
  }
};

export const getRelativeTime = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return formatDate(dateObj);
};

// Cart utilities
export const calculateCartTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateCartSubtotal = (items) => {
  return items.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
};

export const calculateCartDiscount = (items) => {
  return items.reduce((discount, item) => {
    const itemDiscount = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return discount + itemDiscount;
  }, 0);
};

export const getCartItemCount = (items) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Product utilities
export const calculateDiscountPercentage = (originalPrice, salePrice) => {
  if (originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

export const isProductInStock = (product) => {
  return product.inStock && product.quantity > 0;
};

export const getProductAvailabilityText = (product) => {
  if (!product.inStock) return 'Out of Stock';
  if (product.quantity <= 5) return 'Only few left';
  return 'In Stock';
};

export const filterProducts = (products, searchQuery, category, minPrice, maxPrice) => {
  return products.filter((product) => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = !category || product.category === category;
    
    const matchesPrice = (!minPrice || product.price >= minPrice) && 
                        (!maxPrice || product.price <= maxPrice);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
};

// Order utilities
export const getOrderStatusColor = (status) => {
  const colors = {
    pending: 'text-yellow-600 bg-yellow-100',
    confirmed: 'text-blue-600 bg-blue-100',
    processing: 'text-purple-600 bg-purple-100',
    shipped: 'text-indigo-600 bg-indigo-100',
    delivered: 'text-green-600 bg-green-100',
    cancelled: 'text-red-600 bg-red-100',
    refunded: 'text-gray-600 bg-gray-100'
  };
  return colors[status] || 'text-gray-600 bg-gray-100';
};

export const getPaymentStatusColor = (status) => {
  const colors = {
    pending: 'text-yellow-600 bg-yellow-100',
    processing: 'text-blue-600 bg-blue-100',
    completed: 'text-green-600 bg-green-100',
    failed: 'text-red-600 bg-red-100',
    refunded: 'text-purple-600 bg-purple-100',
    partially_refunded: 'text-orange-600 bg-orange-100'
  };
  return colors[status] || 'text-gray-600 bg-gray-100';
};

export const getOrderStatusText = (status) => {
  const statusTexts = {
    pending: 'Pending',
    confirmed: 'Confirmed',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
    refunded: 'Refunded'
  };
  return statusTexts[status] || 'Unknown';
};

// ID generation utilities
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const generateOrderNumber = () => {
  const date = new Date();
  const year = date.getFullYear().toString().substr(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `ECO${year}${month}${day}${random}`;
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[+]?[\d\s-()]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validatePincode = (pincode) => {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  return pincodeRegex.test(pincode);
};

// Form utilities
export const createFormState = (initialValues) => {
  const touchedState = Object.keys(initialValues).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});

  return {
    values: initialValues,
    errors: [],
    touched: touchedState,
    isValid: true,
    isSubmitting: false
  };
};

export const updateFormField = (formState, field, value) => {
  return {
    ...formState,
    values: {
      ...formState.values,
      [field]: value
    },
    touched: {
      ...formState.touched,
      [field]: true
    }
  };
};

// Number utilities
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export const round = (value, decimals = 2) => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
};

export const formatNumber = (value) => {
  return value.toLocaleString('en-IN');
};

// Array utilities
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {});
};

export const sortBy = (array, key, direction = 'asc') => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const uniqueBy = (array, key) => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

// Local storage utilities
export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getLocalStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// URL utilities
export const createQueryString = (params) => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });
  
  return searchParams.toString();
};

export const parseQueryString = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
};

// Debounce utility
export const debounce = (func, delay) => {
  let timeoutId;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle utility
export const throttle = (func, delay) => {
  let lastCall = 0;
  
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Error handling utilities
export const createError = (code, message, details) => {
  const error = new Error(message);
  error.code = code;
  error.details = details;
  return error;
};

export const isErrorWithCode = (error, code) => {
  return error && error.code === code;
};

// Chart data utilities
export const generateChartData = (data, xKey, yKey) => {
  return data.map(item => ({
    name: String(item[xKey]),
    value: Number(item[yKey])
  }));
};

export const aggregateChartData = (data, aggregationType = 'sum') => {
  const grouped = groupBy(data, 'name');
  
  return Object.entries(grouped).map(([name, items]) => {
    let value;
    
    switch (aggregationType) {
      case 'avg':
        value = items.reduce((sum, item) => sum + item.value, 0) / items.length;
        break;
      case 'count':
        value = items.length;
        break;
      default:
        value = items.reduce((sum, item) => sum + item.value, 0);
    }
    
    return { name, value: round(value, 2) };
  });
};

// Mock data generators
export const generateMockProducts = (count = 10) => {
  const categories = ['Kids Crackers', 'Gift Boxes', 'Fancy Fireworks', 'Sparklers', 'Ground Spinners'];
  const brands = ['Eco Crackers', 'Premium Series', 'Deluxe Collection', 'Royal Edition'];
  
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Premium Cracker ${index + 1}`,
    description: `High-quality firework with amazing colors and effects`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.floor(Math.random() * 600) + 100,
    category: categories[Math.floor(Math.random() * categories.length)],
    brand: brands[Math.floor(Math.random() * brands.length)],
    image: `https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop&auto=format`,
    inStock: Math.random() > 0.1,
    quantity: Math.floor(Math.random() * 100),
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 100),
    tags: ['Safe', 'Colorful', 'Premium']
  }));
};

export const generateMockOrders = (count = 5) => {
  const statuses = ['pending', 'confirmed', 'processing', 'shipped', 'delivered'];
  
  return Array.from({ length: count }, (_, index) => ({
    id: generateOrderNumber(),
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    total: Math.floor(Math.random() * 2000) + 200,
    items: Math.floor(Math.random() * 5) + 1
  }));
};