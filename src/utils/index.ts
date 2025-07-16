import type { 
  Product, 
  CartItem, 
  Order, 
  OrderStatus, 
  PaymentStatus,
  ChartData,
  ValidationError,
  FormState 
} from '../types';

// Price formatting utilities
export const formatPrice = (price: number, currency: string = '₹'): string => {
  return `${currency}${price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
};

export const formatPriceCompact = (price: number, currency: string = '₹'): string => {
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
export const formatDate = (date: string | Date, format: 'short' | 'long' | 'time' = 'short'): string => {
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

export const getRelativeTime = (date: string | Date): string => {
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
export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
};

export const calculateCartSubtotal = (items: CartItem[]): number => {
  return items.reduce((subtotal: number, item: CartItem) => subtotal + (item.price * item.quantity), 0);
};

export const calculateCartDiscount = (items: CartItem[]): number => {
  return items.reduce((discount: number, item: CartItem) => {
    const itemDiscount = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return discount + itemDiscount;
  }, 0);
};

export const getCartItemCount = (items: CartItem[]): number => {
  return items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
};

// Product utilities
export const calculateDiscountPercentage = (originalPrice: number, salePrice: number): number => {
  if (originalPrice <= salePrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

export const isProductInStock = (product: Product): boolean => {
  return product.inStock && product.quantity > 0;
};

export const getProductAvailabilityText = (product: Product): string => {
  if (!product.inStock) return 'Out of Stock';
  if (product.quantity <= 5) return 'Only few left';
  return 'In Stock';
};

export const filterProducts = (
  products: Product[], 
  searchQuery: string, 
  category?: string,
  minPrice?: number,
  maxPrice?: number
): Product[] => {
  return products.filter((product: Product) => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !category || product.category === category;
    
    const matchesPrice = (!minPrice || product.price >= minPrice) && 
                        (!maxPrice || product.price <= maxPrice);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
};

// Order utilities
export const getOrderStatusColor = (status: OrderStatus): string => {
  const colors: Record<OrderStatus, string> = {
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

export const getPaymentStatusColor = (status: PaymentStatus): string => {
  const colors: Record<PaymentStatus, string> = {
    pending: 'text-yellow-600 bg-yellow-100',
    processing: 'text-blue-600 bg-blue-100',
    completed: 'text-green-600 bg-green-100',
    failed: 'text-red-600 bg-red-100',
    refunded: 'text-purple-600 bg-purple-100',
    partially_refunded: 'text-orange-600 bg-orange-100'
  };
  return colors[status] || 'text-gray-600 bg-gray-100';
};

export const getOrderStatusText = (status: OrderStatus): string => {
  const statusTexts: Record<OrderStatus, string> = {
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
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const generateOrderNumber = (): string => {
  const date = new Date();
  const year = date.getFullYear().toString().substr(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `ECO${year}${month}${day}${random}`;
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[\d\s-()]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
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

export const validatePincode = (pincode: string): boolean => {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  return pincodeRegex.test(pincode);
};

// Form utilities
export const createFormState = <T>(initialValues: T): FormState<T> => {
  const touchedState = Object.keys(initialValues as any).reduce((acc, key) => {
    acc[key as keyof T] = false;
    return acc;
  }, {} as Record<keyof T, boolean>);

  return {
    values: initialValues,
    errors: [],
    touched: touchedState,
    isValid: true,
    isSubmitting: false
  };
};

export const updateFormField = <T>(
  formState: FormState<T>, 
  field: keyof T, 
  value: T[keyof T]
): FormState<T> => {
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
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const round = (value: number, decimals: number = 2): number => {
  return Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals);
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString('en-IN');
};

// Array utilities
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

export const sortBy = <T>(array: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] => {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const uniqueBy = <T>(array: T[], key: keyof T): T[] => {
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
export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// URL utilities
export const createQueryString = (params: Record<string, string | number | boolean>): string => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });
  
  return searchParams.toString();
};

export const parseQueryString = (queryString: string): Record<string, string> => {
  const params = new URLSearchParams(queryString);
  const result: Record<string, string> = {};
  
  params.forEach((value, key) => {
    result[key] = value;
  });
  
  return result;
};

// Debounce utility
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle utility
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Error handling utilities
export const createError = (code: string, message: string, details?: any): Error => {
  const error = new Error(message);
  (error as any).code = code;
  (error as any).details = details;
  return error;
};

export const isErrorWithCode = (error: any, code: string): boolean => {
  return error && error.code === code;
};

// Chart data utilities
export const generateChartData = (
  data: any[], 
  xKey: string, 
  yKey: string
): ChartData[] => {
  return data.map(item => ({
    name: String(item[xKey]),
    value: Number(item[yKey])
  }));
};

export const aggregateChartData = (
  data: ChartData[], 
  aggregationType: 'sum' | 'avg' | 'count' = 'sum'
): ChartData[] => {
  const grouped = groupBy(data, 'name');
  
  return Object.entries(grouped).map(([name, items]) => {
    let value: number;
    
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