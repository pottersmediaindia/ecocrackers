import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  Star,
  Download,
  MessageCircle,
  Plus,
  Minus,
  Trash2,
  Edit,
  Users,
  Package,
  TrendingUp,
  Bell,
  Heart,
  Eye,
  Filter,
  ChevronRight,
  Home,
  Phone,
  Mail,
  MapPin,
  Shield,
  Truck,
  RotateCcw,
  Award,
  BarChart3,
  DollarSign,
  ShoppingBag,
  UserPlus,
  Lock,
  LogOut,
  ChevronDown,
  Clock,
  Calendar,
  Send,
  Factory,
  Users2,
  Target,
  CheckCircle,
  Upload,
  Save,
  AlertTriangle,
  RefreshCw,
  FileText,
  Settings,
  Activity,
  PieChart,
  ArrowUp,
  ArrowDown,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowLeft,
} from "lucide-react";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card.jsx";
import { Badge } from "./components/ui/badge.jsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "./components/ui/dialog.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog.jsx";
import { Progress } from "./components/ui/progress.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select.jsx";
import { Textarea } from "./components/ui/textarea.jsx";
import { Label } from "./components/ui/label.jsx";
import { Separator } from "./components/ui/separator.jsx";
import { ImageWithFallback } from "./components/figma/ImageWithFallback.jsx";

// Import page components
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import TrackOrderPage from "./components/TrackOrderPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CartPage from "./components/CartPage.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import VideoPopup from "./components/VideoPopup.jsx";

function App() {
  // State variables
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Computed values
  const cartCount = cart.reduce(
    (count, item) => count + item.quantity,
    0,
  );
  
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Navigation handler
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  // Login handler
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    if (userData.role === "admin") {
      setIsAdmin(true);
      navigateTo("admin");
    } else {
      navigateTo("dashboard");
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    navigateTo("home");
  };

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(
      (item) => item.id === product.id,
    );
    
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      const newCartItem = {
        ...product,
        quantity,
      };
      setCart([...cart, newCartItem]);
    }
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item,
        ),
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setProductQuantities({});
  };

  // Video popup handlers
  const openVideo = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideoUrl("");
  };

  // Header Component
  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Strip */}
      <div className="bg-red-600 text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <span className="flex items-center whitespace-nowrap">
                <Phone className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">
                  +91 9876543210
                </span>
                <span className="sm:hidden">Call</span>
              </span>
              <span className="flex items-center whitespace-nowrap hidden md:flex">
                <Mail className="h-3 w-3 mr-1" />
                <span className="hidden lg:inline">
                  info@ecocrackers.in
                </span>
                <span className="lg:hidden">Email</span>
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="flex items-center whitespace-nowrap hidden sm:flex">
                <Truck className="h-3 w-3 mr-1" />
                <span className="hidden md:inline">
                  Free Delivery Above ₹500
                </span>
                <span className="md:hidden">Free Delivery</span>
              </span>
              <div className="flex space-x-1 sm:space-x-2">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer hover:text-blue-200" />
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer hover:text-blue-200" />
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer hover:text-pink-200" />
                <Youtube className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer hover:text-red-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => navigateTo("home")}
          >
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 flex items-center">
              🧨{" "}
              <span className="ml-1 sm:ml-2 whitespace-nowrap">
                Eco Crackers
              </span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => navigateTo("home")}
              className={`transition-colors font-medium whitespace-nowrap ${currentPage === "home" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`transition-colors font-medium whitespace-nowrap ${currentPage === "about" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className={`transition-colors font-medium whitespace-nowrap ${currentPage === "contact" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
            >
              Contact
            </button>
            <button
              onClick={() => navigateTo("track")}
              className={`transition-colors font-medium whitespace-nowrap ${currentPage === "track" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
            >
              Track Order
            </button>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <div className="relative hidden lg:block">
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="relative p-2"
              onClick={() => navigateTo("cart")}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-1 sm:space-x-2">
                {isAdmin ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateTo("admin")}
                    className="text-blue-600 hover:text-blue-700 hidden sm:flex px-2 lg:px-3"
                  >
                    <Settings className="h-4 w-4 sm:mr-1" />
                    <span className="hidden lg:inline">
                      Admin
                    </span>
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateTo("dashboard")}
                    className="text-green-600 hover:text-green-700 hidden sm:flex px-2 lg:px-3"
                  >
                    <User className="h-4 w-4 sm:mr-1" />
                    <span className="hidden lg:inline">
                      Dashboard
                    </span>
                  </Button>
                )}
                <span className="text-xs sm:text-sm text-gray-700 hidden md:inline max-w-20 lg:max-w-none truncate">
                   {user?.name || "User"}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="px-2 lg:px-3"
                >
                  <LogOut className="h-4 w-4 sm:mr-1" />
                  <span className="hidden lg:inline">
                    Logout
                  </span>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateTo("login")}
                className="px-2 lg:px-3"
              >
                <User className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            )}

            <button
              className="lg:hidden p-2"
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white py-3">
            {/* Mobile Search */}
            <div className="mb-4 px-4">
              <div className="relative">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => navigateTo("home")}
                className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("about")}
                className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo("track")}
                className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
              >
                Track Order
              </button>

              {isLoggedIn ? (
                <>
                  <div className="border-t pt-2 mt-2">
                    <div className="text-sm text-gray-500 px-2 py-1">
                      Hi, {user?.name || "User"}
                    </div>
                  </div>
                  {isAdmin ? (
                    <button
                      onClick={() => navigateTo("admin")}
                      className="text-left text-blue-600 hover:text-blue-700 py-2 px-2 rounded hover:bg-blue-50 transition-colors"
                    >
                      Admin Dashboard
                    </button>
                  ) : (
                    <button
                      onClick={() => navigateTo("dashboard")}
                      className="text-left text-green-600 hover:text-green-700 py-2 px-2 rounded hover:bg-green-50 transition-colors"
                    >
                      My Dashboard
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="border-t pt-2 mt-2">
                  <button
                    onClick={() => navigateTo("login")}
                    className="text-left text-gray-700 hover:text-red-600 py-2 px-2 rounded hover:bg-gray-50 transition-colors w-full"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              🧨 Eco Crackers
            </h3>
            <p className="text-gray-300 mb-4">
              India's trusted name in quality fireworks and
              crackers for over 25 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => navigateTo("home")}
                className="block hover:text-red-400 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("about")}
                className="block hover:text-red-400 transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className="block hover:text-red-400 transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo("track")}
                className="block hover:text-red-400 transition-colors text-left"
              >
                Track Order
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2 text-sm">
              <span className="block text-gray-300">
                Kids Crackers
              </span>
              <span className="block text-gray-300">
                Gift Boxes
              </span>
              <span className="block text-gray-300">
                Fancy Fireworks
              </span>
              <span className="block text-gray-300">
                Sparklers
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ecocrackers.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; 2024 Eco Crackers. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );

  // WhatsApp Float Button
  const WhatsAppFloat = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );

  // Render current page
  const renderCurrentPage = () => {
    const commonProps = {
      navigateTo,
      cart,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      cartTotal,
      cartCount,
      productQuantities,
      setProductQuantities,
      searchQuery,
      openVideo,
      isLoggedIn,
      user,
      isAdmin,
    };

    switch (currentPage) {
      case "home":
        return <HomePage {...commonProps} />;
      case "about":
        return <AboutPage {...commonProps} />;
      case "contact":
        return <ContactPage {...commonProps} />;
      case "track":
        return <TrackOrderPage {...commonProps} />;
      case "login":
        return (
          <LoginPage {...commonProps} onLogin={handleLogin} />
        );
      case "cart":
        return <CartPage {...commonProps} />;
      case "admin":
        return isAdmin ? (
          <AdminDashboard {...commonProps} />
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
              <p className="text-gray-600 mb-4">You don't have permission to access this page.</p>
              <Button onClick={() => navigateTo("home")}>Go to Home</Button>
            </div>
          </div>
        );
      case "dashboard":
        return isLoggedIn && !isAdmin ? (
          <UserDashboard {...commonProps} />
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
              <p className="text-gray-600 mb-4">Please log in to access your dashboard.</p>
              <Button onClick={() => navigateTo("login")}>Login</Button>
            </div>
          </div>
        );
      default:
        return <HomePage {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppFloat />
      <VideoPopup
        isOpen={isVideoOpen}
        onClose={closeVideo}
        videoUrl={selectedVideoUrl}
      />
    </div>
  );
}

export default App;