// Base Entity Types
export interface BaseEntity {
  id: string | number;
  createdAt?: string;
  updatedAt?: string;
}

// Product Types
export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  brand: string;
  weight: string;
  safetyRating: string;
  inStock: boolean;
  quantity: number;
  minAge: number;
  maxNoiseLevelDb: number;
  images: string[];
  videos?: string[];
  features: string[];
  specifications: ProductSpecification[];
  reviews: ProductReview[];
  rating: number;
  reviewCount: number;
  tags: string[];
  sku: string;
  barcode?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductReview extends BaseEntity {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  verified: boolean;
  helpful: number;
  date: string;
}

// Cart Types
export interface CartItem extends Product {
  quantity: number;
  addedAt: string;
  selectedVariant?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  itemCount: number;
}

// User Types
export interface User extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  addresses: Address[];
  preferences: UserPreferences;
  isVerified: boolean;
  lastLogin?: string;
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
}

export type UserRole = 'admin' | 'customer' | 'moderator';

export interface Address extends BaseEntity {
  type: AddressType;
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault: boolean;
  landmark?: string;
}

export type AddressType = 'home' | 'office' | 'other';

export interface UserPreferences {
  newsletter: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  language: string;
  currency: string;
  theme: 'light' | 'dark' | 'auto';
}

// Order Types
export interface Order extends BaseEntity {
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
  billingAddress: Address;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  estimatedDelivery: string;
  actualDelivery?: string;
  trackingNumber?: string;
  notes?: string;
  refundAmount?: number;
  refundReason?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  total: number;
  variant?: string;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled' 
  | 'refunded';

export type PaymentStatus = 
  | 'pending' 
  | 'processing' 
  | 'completed' 
  | 'failed' 
  | 'refunded' 
  | 'partially_refunded';

export type PaymentMethod = 
  | 'credit_card' 
  | 'debit_card' 
  | 'upi' 
  | 'net_banking' 
  | 'wallet' 
  | 'cod';

// Navigation and UI Types
export type PageType = 
  | 'home' 
  | 'about' 
  | 'contact' 
  | 'track' 
  | 'login' 
  | 'cart' 
  | 'admin' 
  | 'dashboard';

export interface NavigationProps {
  navigateTo: (page: PageType) => void;
}

// Component Props Types
export interface CommonPageProps extends NavigationProps {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateCartQuantity: (productId: string | number, newQuantity: number) => void;
  removeFromCart: (productId: string | number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  productQuantities: Record<string | number, number>;
  setProductQuantities: React.Dispatch<React.SetStateAction<Record<string | number, number>>>;
  searchQuery: string;
  openVideo: (videoUrl: string) => void;
  isLoggedIn: boolean;
  user: User | null;
  isAdmin: boolean;
}

export interface LoginPageProps extends CommonPageProps {
  onLogin: (userData: User) => void;
}

// Form Types
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface TrackOrderFormData {
  orderNumber: string;
  email: string;
}

// Admin Dashboard Types
export interface AdminStats {
  totalOrders: number;
  totalRevenue: number;
  totalCustomers: number;
  totalProducts: number;
  pendingOrders: number;
  lowStockProducts: number;
  monthlyGrowth: number;
  dailyVisitors: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export type NotificationType = 
  | 'order' 
  | 'stock' 
  | 'user' 
  | 'system' 
  | 'payment';

// Search and Filter Types
export interface SearchFilters {
  category?: string[];
  priceRange?: [number, number];
  brand?: string[];
  inStock?: boolean;
  rating?: number;
  sortBy?: SortOption;
  sortOrder?: 'asc' | 'desc';
}

export type SortOption = 
  | 'name' 
  | 'price' 
  | 'rating' 
  | 'popularity' 
  | 'newest' 
  | 'discount';

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  statusCode?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Event Handler Types
export type ClickHandler = () => void;
export type ChangeHandler<T = string> = (value: T) => void;
export type SubmitHandler<T = any> = (data: T) => void | Promise<void>;

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Video and Media Types
export interface VideoData {
  url: string;
  title?: string;
  thumbnail?: string;
  duration?: number;
  type: 'youtube' | 'vimeo' | 'direct';
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// State Management Types
export interface AppState {
  currentPage: PageType;
  cart: CartItem[];
  productQuantities: Record<string | number, number>;
  isAdmin: boolean;
  isLoggedIn: boolean;
  user: User | null;
  isMobileMenuOpen: boolean;
  searchQuery: string;
  selectedVideoUrl: string;
  isVideoOpen: boolean;
  notifications: NotificationItem[];
  loading: boolean;
  error: AppError | null;
}

// Component State Types
export interface ComponentState<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Form Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState<T = any> {
  values: T;
  errors: ValidationError[];
  touched: Record<keyof T, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
}