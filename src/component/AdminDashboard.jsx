import React, { useState, useRef } from 'react';
import { 
  Package, Users, BarChart3, Settings, Plus, Edit, Trash2, Search, Filter, Download, Upload, Bell, 
  DollarSign, ShoppingBag, TrendingUp, Eye, Save, X, CheckCircle, AlertTriangle, Activity, Calendar,
  FileText, Star, MessageSquare, Phone, Mail, MapPin, Clock, CreditCard, Truck, Image as ImageIcon,
  Video, Play, ChevronDown, ChevronUp, Copy, ExternalLink, Target, Zap, Award, Briefcase, PieChart
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { Alert, AlertDescription } from './ui/alert';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AdminDashboard = ({ navigateTo, user }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Electric Sparkler Premium', 
      category: 'sparklers', 
      price: 45, 
      stock: 100, 
      status: 'active',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Premium quality electric sparklers for celebrations',
      sales: 250,
      views: 1200,
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Premium Gift Box Deluxe', 
      category: 'gift', 
      price: 850, 
      stock: 25, 
      status: 'active',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      description: 'Deluxe gift box with assorted crackers',
      sales: 89,
      views: 890,
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Flower Pot Large', 
      category: 'fancy', 
      price: 35, 
      stock: 75, 
      status: 'active',
      image: 'https://images.unsplash.com/photo-1578320339911-14e7c3b7ec34?w=300&h=200&fit=crop',
      description: 'Large flower pot crackers with beautiful effects',
      sales: 180,
      views: 950,
      rating: 4.6
    }
  ]);
  
  const [orders, setOrders] = useState([
    { 
      id: 'KC001234', 
      customer: { name: 'Raj Kumar', email: 'raj@email.com', phone: '+91 9876543210' },
      items: 3,
      total: 1930, 
      status: 'in_transit', 
      date: '2024-01-15',
      paymentMethod: 'UPI',
      deliveryAddress: '123 Anna Nagar, Chennai - 600040'
    },
    { 
      id: 'KC001235', 
      customer: { name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 9876543220' },
      items: 2,
      total: 620, 
      status: 'delivered', 
      date: '2024-01-10',
      paymentMethod: 'Card',
      deliveryAddress: '456 T. Nagar, Chennai - 600017'
    },
    { 
      id: 'KC001236', 
      customer: { name: 'Arjun Patel', email: 'arjun@email.com', phone: '+91 9876543230' },
      items: 4,
      total: 1250, 
      status: 'processing', 
      date: '2024-01-18',
      paymentMethod: 'COD',
      deliveryAddress: '789 Velachery, Chennai - 600042'
    }
  ]);

  const [customers, setCustomers] = useState([
    { 
      id: 1, 
      name: 'Raj Kumar', 
      email: 'raj@email.com', 
      phone: '+91 9876543210',
      orders: 12, 
      totalSpent: 15000, 
      joinDate: '2023-06-15',
      lastOrder: '2024-01-15',
      status: 'vip',
      address: '123 Anna Nagar, Chennai'
    },
    { 
      id: 2, 
      name: 'Priya Sharma', 
      email: 'priya@email.com', 
      phone: '+91 9876543220',
      orders: 8, 
      totalSpent: 8500, 
      joinDate: '2023-08-20',
      lastOrder: '2024-01-10',
      status: 'regular',
      address: '456 T. Nagar, Chennai'
    },
    { 
      id: 3, 
      name: 'Arjun Patel', 
      email: 'arjun@email.com', 
      phone: '+91 9876543230',
      orders: 5, 
      totalSpent: 4200, 
      joinDate: '2023-12-10',
      lastOrder: '2024-01-18',
      status: 'new',
      address: '789 Velachery, Chennai'
    }
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const [selectedCustomerDetails, setSelectedCustomerDetails] = useState(null);
  const [isCustomerDetailsOpen, setIsCustomerDetailsOpen] = useState(false);
  
  const [productForm, setProductForm] = useState({
    name: '', category: '', price: '', stock: '', description: '', status: 'active', image: '', video: '', videoLink: ''
  });

  const [settings, setSettings] = useState({
    storeName: 'Eco Crackers',
    storeEmail: 'info@ecocrackers.in',
    storePhone: '+91 9876543210',
    storeAddress: 'Sivakasi, Tamil Nadu',
    notifications: {
      newOrders: true,
      lowStock: true,
      customerMessages: false
    },
    business: {
      currency: 'INR',
      timezone: 'Asia/Kolkata',
      language: 'English'
    }
  });

  // Mock analytics data
  const analytics = {
    totalRevenue: 245000,
    totalOrders: 1234,
    activeProducts: 156,
    totalCustomers: 892,
    growthRate: 12,
    conversionRate: 3.2,
    avgOrderValue: 980,
    returnCustomers: 68
  };

  const recentActivity = [
    { type: 'order', message: 'New order #KC001237 received', time: '5 mins ago', status: 'new' },
    { type: 'product', message: 'Product "Atom Bomb" stock low (3 remaining)', time: '15 mins ago', status: 'warning' },
    { type: 'customer', message: 'New customer registration: Vikram Singh', time: '30 mins ago', status: 'info' },
    { type: 'payment', message: 'Payment received for order #KC001234', time: '1 hour ago', status: 'success' }
  ];

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { 
        ...p, 
        ...productForm, 
        id: editingProduct.id,
        price: Number(productForm.price), 
        stock: Number(productForm.stock)
      } : p));
      setEditingProduct(null);
    } else {
      const newProduct = { 
        ...productForm, 
        id: Date.now(), 
        price: Number(productForm.price), 
        stock: Number(productForm.stock),
        sales: 0,
        views: 0,
        rating: 0
      };
      setProducts([...products, newProduct]);
    }
    setProductForm({ name: '', category: '', price: '', stock: '', description: '', status: 'active', image: '', video: '', videoLink: '' });
    setIsProductDialogOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({ 
      ...product, 
      price: product.price.toString(), 
      stock: product.stock.toString() 
    });
    setIsProductDialogOpen(true);
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProductForm({...productForm, image: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProductForm({...productForm, video: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusBadge = (status) => {
    const variants = {
      active: 'default',
      inactive: 'secondary',
      delivered: 'default',
      in_transit: 'secondary',
      processing: 'outline',
      cancelled: 'destructive',
      vip: 'default',
      regular: 'secondary',
      new: 'outline'
    };
    
    const colors = {
      active: 'bg-green-500',
      inactive: 'bg-gray-500',
      delivered: 'bg-green-500',
      in_transit: 'bg-blue-500',
      processing: 'bg-yellow-500',
      cancelled: 'bg-red-500',
      vip: 'bg-purple-500',
      regular: 'bg-blue-500',
      new: 'bg-green-500'
    };

    return (
      <Badge variant={variants[status] || 'outline'} className={colors[status] || ''}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  const QuickStatsCard = ({ title, value, change, icon, color }) => (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
              <TrendingUp className={`h-4 w-4 mr-1 ${change < 0 ? 'rotate-180' : ''}`} />
              {change >= 0 ? '+' : ''}{change}%
            </p>
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-blue-100">Welcome back, {user?.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => navigateTo('home')}>
                <Eye className="h-4 w-4 mr-2" />
                View Store
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Desktop Tab Navigation */}
          <TabsList className="hidden sm:grid w-full grid-cols-5 bg-white shadow-lg rounded-lg p-2 gap-1 h-16">
            <TabsTrigger 
              value="dashboard" 
              className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-200 min-h-[3rem] ${
                activeTab === 'dashboard' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105' 
                  : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
              }`}
            >
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base font-medium">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="products" 
              className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-200 min-h-[3rem] ${
                activeTab === 'products' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105' 
                  : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
              }`}
            >
              <Package className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base font-medium">Products</span>
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-200 min-h-[3rem] ${
                activeTab === 'orders' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105' 
                  : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
              }`}
            >
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base font-medium">Orders</span>
            </TabsTrigger>
            <TabsTrigger 
              value="customers" 
              className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-200 min-h-[3rem] ${
                activeTab === 'customers' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105' 
                  : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
              }`}
            >
              <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base font-medium">Customers</span>
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className={`flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-md transition-all duration-200 min-h-[3rem] ${
                activeTab === 'settings' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105' 
                  : 'hover:bg-blue-50 hover:text-blue-600 text-gray-600'
              }`}
            >
              <Settings className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm lg:text-base font-medium">Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Mobile Tab Navigation - Horizontal Scroll */}
          <div className="sm:hidden bg-white shadow-lg rounded-lg p-3">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'dashboard'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <BarChart3 className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Package className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Products</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'orders'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <ShoppingBag className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'customers'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Users className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex flex-col items-center justify-center min-w-[80px] px-3 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'settings'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Settings className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Settings</span>
              </button>
            </div>
          </div>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <QuickStatsCard
                title="Total Revenue"
                value={`₹${(analytics.totalRevenue / 1000).toFixed(0)}K`}
                change={analytics.growthRate}
                icon={<DollarSign className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-green-500 to-green-600"
              />
              <QuickStatsCard
                title="Total Orders"
                value={analytics.totalOrders.toLocaleString()}
                change={8}
                icon={<ShoppingBag className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-blue-500 to-blue-600"
              />
              <QuickStatsCard
                title="Active Products"
                value={analytics.activeProducts}
                change={3}
                icon={<Package className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
              <QuickStatsCard
                title="Total Customers"
                value={analytics.totalCustomers}
                change={15}
                icon={<Users className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-orange-500 to-orange-600"
              />
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Conversion Rate</h3>
                  <p className="text-3xl font-bold text-blue-600">{analytics.conversionRate}%</p>
                  <Progress value={analytics.conversionRate * 10} className="mt-2" />
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Avg Order Value</h3>
                  <p className="text-3xl font-bold text-green-600">₹{analytics.avgOrderValue}</p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Return Customers</h3>
                  <p className="text-3xl font-bold text-purple-600">{analytics.returnCustomers}%</p>
                  <Progress value={analytics.returnCustomers} className="mt-2" />
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Activity className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Growth Rate</h3>
                  <p className="text-3xl font-bold text-red-600">+{analytics.growthRate}%</p>
                  <Progress value={analytics.growthRate * 5} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="border-none shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2 text-blue-600" />
                    Recent Orders
                  </CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 5).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <p className="font-semibold">#{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer.name}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{order.total}</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.status === 'new' ? 'bg-blue-500' :
                          activity.status === 'warning' ? 'bg-yellow-500' :
                          activity.status === 'info' ? 'bg-purple-500' : 'bg-green-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>


          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Product Management</h2>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export Products
                </Button>
                <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        {editingProduct ? 'Edit Product' : 'Add New Product'}
                      </DialogTitle>
                      <DialogDescription>
                        {editingProduct 
                          ? 'Update the product information below. All fields marked with * are required.'
                          : 'Fill in the product details below to add a new product to your inventory. All fields marked with * are required.'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleProductSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Product Name *</Label>
                          <Input 
                            value={productForm.name} 
                            onChange={(e) => setProductForm({...productForm, name: e.target.value})} 
                            placeholder="Enter product name"
                            className="mt-1"
                            required 
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Category *</Label>
                          <Select value={productForm.category} onValueChange={(value) => setProductForm({...productForm, category: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sparklers">Sparklers</SelectItem>
                              <SelectItem value="gift">Gift Boxes</SelectItem>
                              <SelectItem value="fancy">Fancy Fireworks</SelectItem>
                              <SelectItem value="sound">Sound Crackers</SelectItem>
                              <SelectItem value="rockets">Rockets</SelectItem>
                              <SelectItem value="flower_pots">Flower Pots</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-sm font-medium">Price (₹) *</Label>
                          <Input 
                            type="number" 
                            value={productForm.price} 
                            onChange={(e) => setProductForm({...productForm, price: e.target.value})} 
                            placeholder="0.00"
                            className="mt-1"
                            required 
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium">Stock Quantity *</Label>
                          <Input 
                            type="number" 
                            value={productForm.stock} 
                            onChange={(e) => setProductForm({...productForm, stock: e.target.value})} 
                            placeholder="0"
                            className="mt-1"
                            required 
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Description</Label>
                        <Textarea 
                          value={productForm.description} 
                          onChange={(e) => setProductForm({...productForm, description: e.target.value})} 
                          placeholder="Enter product description"
                          className="mt-1"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium">Product Image</Label>
                          <div className="mt-2 flex items-center space-x-4">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => fileInputRef.current?.click()}
                              className="flex items-center"
                            >
                              <ImageIcon className="h-4 w-4 mr-2" />
                              Upload Image
                            </Button>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                            {productForm.image && (
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-green-600">Image uploaded</span>
                              </div>
                            )}
                          </div>
                          {productForm.image && (
                            <div className="mt-2">
                              <img src={productForm.image} alt="Preview" className="w-32 h-24 object-cover rounded-lg" />
                            </div>
                          )}
                        </div>

                        <div>
                          <Label className="text-sm font-medium">Product Video (Optional)</Label>
                          <div className="mt-2 flex items-center space-x-4">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => videoInputRef.current?.click()}
                              className="flex items-center"
                            >
                              <Video className="h-4 w-4 mr-2" />
                              Upload Video
                            </Button>
                            <input
                              ref={videoInputRef}
                              type="file"
                              accept="video/*"
                              onChange={handleVideoUpload}
                              className="hidden"
                            />
                            {productForm.video && (
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-green-600">Video uploaded</span>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Upload a video demonstration of your product (MP4, MOV, AVI)
                          </p>
                        </div>

                        <div>
                          <Label className="text-sm font-medium">Video Link (Alternative)</Label>
                          <Input
                            value={productForm.videoLink}
                            onChange={(e) => setProductForm({...productForm, videoLink: e.target.value})}
                            placeholder="Paste YouTube, Vimeo, or direct video URL"
                            className="mt-1"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            Alternatively, you can provide a direct link to your product video instead of uploading
                          </p>
                          {productForm.videoLink && (
                            <div className="flex items-center space-x-2 mt-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-green-600">Video link added</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Status</Label>
                        <Select value={productForm.status} onValueChange={(value) => setProductForm({...productForm, status: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex space-x-3">
                        <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Save className="h-4 w-4 mr-2" />
                          {editingProduct ? 'Update Product' : 'Create Product'}
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setIsProductDialogOpen(false)}>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Products Table */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="w-20">Image</TableHead>
                        <TableHead>Product Details</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map(product => (
                        <TableRow key={product.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="relative">
                              <ImageWithFallback 
                                src={product.image} 
                                alt={product.name}
                                className="w-16 h-12 object-cover rounded-lg"
                              />
                              {product.video && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                                  <Play className="h-4 w-4 text-white" />
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-semibold">{product.name}</p>
                              <p className="text-sm text-gray-600 truncate max-w-xs">{product.description}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="capitalize">
                              {product.category.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-semibold">₹{product.price}</TableCell>
                          <TableCell>
                            <span className={`font-medium ${product.stock < 20 ? 'text-red-600' : 'text-green-600'}`}>
                              {product.stock}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-600">Sales:</span>
                                <span className="text-xs font-medium">{product.sales || 0}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-600">Views:</span>
                                <span className="text-xs font-medium">{product.views || 0}</span>
                              </div>
                              {product.rating && (
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span className="text-xs font-medium">{product.rating}</span>
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(product.status)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => handleDeleteProduct(product.id)} 
                                className="text-red-600 hover:text-red-700 hover:border-red-300"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Order Management</h2>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Orders
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Orders
                </Button>
              </div>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map(order => (
                        <TableRow key={order.id} className="hover:bg-gray-50">
                          <TableCell className="font-mono">#{order.id}</TableCell>
                          <TableCell>
                            <div>
                              <p className="font-semibold">{order.customer.name}</p>
                              <p className="text-sm text-gray-600">{order.customer.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{order.items} items</TableCell>
                          <TableCell className="font-bold">₹{order.total}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{order.paymentMethod}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setSelectedOrderDetails(order);
                                  setIsOrderDetailsOpen(true);
                                }}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id, value)}>
                                <SelectTrigger className="w-32 h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="processing">Processing</SelectItem>
                                  <SelectItem value="in_transit">In Transit</SelectItem>
                                  <SelectItem value="delivered">Delivered</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Order Details Dialog */}
            <Dialog open={isOrderDetailsOpen} onOpenChange={setIsOrderDetailsOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Order Details - #{selectedOrderDetails?.id}</DialogTitle>
                  <DialogDescription>
                    Complete order information and customer details
                  </DialogDescription>
                </DialogHeader>
                {selectedOrderDetails && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Customer Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span>{selectedOrderDetails.customer.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span>{selectedOrderDetails.customer.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span>{selectedOrderDetails.customer.phone}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                            <span className="text-sm">{selectedOrderDetails.deliveryAddress}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span>Order Date:</span>
                            <span>{selectedOrderDetails.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Items:</span>
                            <span>{selectedOrderDetails.items}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Payment Method:</span>
                            <Badge variant="outline">{selectedOrderDetails.paymentMethod}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            {getStatusBadge(selectedOrderDetails.status)}
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>₹{selectedOrderDetails.total}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Order ID
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Track Order
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Customer Management</h2>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search Customers
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Customers
                </Button>
              </div>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Customer</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead>Last Order</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customers.map(customer => (
                        <TableRow key={customer.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div>
                              <p className="font-semibold">{customer.name}</p>
                              <p className="text-sm text-gray-600">Joined {customer.joinDate}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{customer.email}</p>
                              <p className="text-sm text-gray-600">{customer.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">{customer.orders}</TableCell>
                          <TableCell className="font-bold">₹{customer.totalSpent.toLocaleString()}</TableCell>
                          <TableCell>{customer.lastOrder}</TableCell>
                          <TableCell>{getStatusBadge(customer.status)}</TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedCustomerDetails(customer);
                                setIsCustomerDetailsOpen(true);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Customer Details Dialog */}
            <Dialog open={isCustomerDetailsOpen} onOpenChange={setIsCustomerDetailsOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Customer Profile - {selectedCustomerDetails?.name}</DialogTitle>
                  <DialogDescription>
                    Detailed customer information and order history
                  </DialogDescription>
                </DialogHeader>
                {selectedCustomerDetails && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-500" />
                            <span>{selectedCustomerDetails.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span>{selectedCustomerDetails.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span>{selectedCustomerDetails.phone}</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                            <span className="text-sm">{selectedCustomerDetails.address}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Customer Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span>Total Orders:</span>
                            <span className="font-semibold">{selectedCustomerDetails.orders}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Spent:</span>
                            <span className="font-semibold">₹{selectedCustomerDetails.totalSpent.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Last Order:</span>
                            <span>{selectedCustomerDetails.lastOrder}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Customer Status:</span>
                            {getStatusBadge(selectedCustomerDetails.status)}
                          </div>
                          <div className="flex justify-between">
                            <span>Avg Order Value:</span>
                            <span className="font-semibold">₹{Math.round(selectedCustomerDetails.totalSpent / selectedCustomerDetails.orders)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        View Orders
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Store Settings */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-blue-600" />
                    Store Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Store Name</Label>
                    <Input 
                      value={settings.storeName} 
                      onChange={(e) => setSettings({...settings, storeName: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Contact Email</Label>
                    <Input 
                      value={settings.storeEmail} 
                      onChange={(e) => setSettings({...settings, storeEmail: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Phone Number</Label>
                    <Input 
                      value={settings.storePhone} 
                      onChange={(e) => setSettings({...settings, storePhone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Store Address</Label>
                    <Textarea 
                      value={settings.storeAddress} 
                      onChange={(e) => setSettings({...settings, storeAddress: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Store Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-purple-600" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Order Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified when new orders are placed</p>
                    </div>
                    <Switch 
                      checked={settings.notifications.newOrders}
                      onCheckedChange={(checked) => setSettings({
                        ...settings, 
                        notifications: {...settings.notifications, newOrders: checked}
                      })}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Low Stock Alerts</Label>
                      <p className="text-sm text-gray-600">Alert when products are running low</p>
                    </div>
                    <Switch 
                      checked={settings.notifications.lowStock}
                      onCheckedChange={(checked) => setSettings({
                        ...settings, 
                        notifications: {...settings.notifications, lowStock: checked}
                      })}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Customer Messages</Label>
                      <p className="text-sm text-gray-600">Notifications for customer inquiries</p>
                    </div>
                    <Switch 
                      checked={settings.notifications.customerMessages}
                      onCheckedChange={(checked) => setSettings({
                        ...settings, 
                        notifications: {...settings.notifications, customerMessages: checked}
                      })}
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Save className="h-4 w-4 mr-2" />
                    Update Notifications
                  </Button>
                </CardContent>
              </Card>

              {/* Business Settings */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                    Business Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Default Currency</Label>
                    <Select value={settings.business.currency} onValueChange={(value) => setSettings({
                      ...settings, 
                      business: {...settings.business, currency: value}
                    })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                        <SelectItem value="USD">US Dollar ($)</SelectItem>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Timezone</Label>
                    <Select value={settings.business.timezone} onValueChange={(value) => setSettings({
                      ...settings, 
                      business: {...settings.business, timezone: value}
                    })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                        <SelectItem value="UTC">UTC</SelectItem>
                        <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Language</Label>
                    <Select value={settings.business.language} onValueChange={(value) => setSettings({
                      ...settings, 
                      business: {...settings.business, language: value}
                    })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Tamil">Tamil</SelectItem>
                        <SelectItem value="Hindi">Hindi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Business Settings
                  </Button>
                </CardContent>
              </Card>

              {/* System Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-orange-600" />
                    System Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Platform Version:</span>
                    <Badge variant="outline">v2.1.0</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Backup:</span>
                    <span className="text-sm">Jan 20, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Database Status:</span>
                    <Badge className="bg-green-500">Healthy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage Used:</span>
                    <span className="text-sm">2.4 GB / 10 GB</span>
                  </div>
                  <Progress value={24} className="mt-2" />
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Backup Data
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Upload className="h-4 w-4 mr-2" />
                      Export Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;