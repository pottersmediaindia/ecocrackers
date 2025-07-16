import React, { useState } from 'react';
import { 
  User, Package, Heart, Settings, Edit, Save, Bell, MapPin, Phone, Mail, 
  Calendar, CreditCard, Truck, Star, Download, Eye, Copy, ShoppingBag,
  Clock, CheckCircle, AlertCircle, Gift, Award, Target, TrendingUp,
  FileText, HelpCircle, MessageSquare, Lock, Shield, Trash2, Plus,
  ShoppingCart, Upload
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

const UserDashboard = ({ navigateTo, user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    address: '123 MG Road, Chennai - 600001',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001'
  });

  // Mock user data
  const userStats = {
    totalOrders: 15,
    totalSpent: 12500,
    wishlistItems: 8,
    loyaltyPoints: 1250,
    memberSince: '2023-01-15',
    nextLevelPoints: 250
  };

  const [orders] = useState([
    {
      id: 'ECO001234',
      date: '2024-01-15',
      items: 5,
      total: 2450,
      status: 'delivered',
      trackingId: 'TRK123456789',
      paymentMethod: 'UPI',
      deliveryDate: '2024-01-18'
    },
    {
      id: 'ECO001235',
      date: '2024-01-10',
      items: 3,
      total: 1200,
      status: 'in_transit',
      trackingId: 'TRK123456790',
      paymentMethod: 'Card',
      estimatedDelivery: '2024-01-20'
    },
    {
      id: 'ECO001236',
      date: '2024-01-05',
      items: 8,
      total: 3500,
      status: 'processing',
      trackingId: 'TRK123456791',
      paymentMethod: 'COD',
      estimatedDelivery: '2024-01-22'
    }
  ]);

  const [wishlist] = useState([
    {
      id: 1,
      name: 'Premium Electric Sparkler',
      price: 450,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      inStock: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Deluxe Gift Box',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      inStock: true,
      discount: 20
    },
    {
      id: 3,
      name: 'Sky Rocket Special',
      price: 280,
      image: 'https://images.unsplash.com/photo-1578320339911-14e7c3b7ec34?w=300&h=200&fit=crop',
      inStock: false,
      discount: 0
    }
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'home',
      name: 'Home',
      address: '123 MG Road, T.Nagar, Chennai - 600001',
      phone: '+91 9876543210',
      isDefault: true
    },
    {
      id: 2,
      type: 'office',
      name: 'Office',
      address: '456 IT Park, OMR, Chennai - 600096',
      phone: '+91 9876543211',
      isDefault: false
    }
  ]);

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newProducts: false,
    priceDrops: true,
    newsletter: false
  });

  const getStatusBadge = (status) => {
    const variants = {
      delivered: 'default',
      in_transit: 'secondary',
      processing: 'outline',
      cancelled: 'destructive'
    };
    
    const colors = {
      delivered: 'bg-green-500',
      in_transit: 'bg-blue-500',
      processing: 'bg-yellow-500',
      cancelled: 'bg-red-500'
    };

    return (
      <Badge variant={variants[status] || 'outline'} className={colors[status] || ''}>
        {status.replace('_', ' ').toUpperCase()}
      </Badge>
    );
  };

  const handleProfileUpdate = () => {
    setIsEditingProfile(false);
    // Here you would typically make an API call to update the profile
  };

  const StatsCard = ({ icon, title, value, subtitle, color }) => (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
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
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">My Dashboard</h1>
                <p className="text-blue-100">Welcome back, {profileData.name}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => navigateTo('home')}>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white shadow-lg rounded-lg p-1">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Orders</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Orders"
                value={userStats.totalOrders}
                subtitle="Completed purchases"
                icon={<Package className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-blue-500 to-blue-600"
              />
              <StatsCard
                title="Total Spent"
                value={`₹${userStats.totalSpent.toLocaleString()}`}
                subtitle="Lifetime value"
                icon={<CreditCard className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-green-500 to-green-600"
              />
              <StatsCard
                title="Wishlist Items"
                value={userStats.wishlistItems}
                subtitle="Saved for later"
                icon={<Heart className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-pink-500 to-pink-600"
              />
              <StatsCard
                title="Loyalty Points"
                value={userStats.loyaltyPoints}
                subtitle={`${userStats.nextLevelPoints} to next level`}
                icon={<Award className="h-8 w-8 text-white" />}
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
            </div>

            {/* Loyalty Progress */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  Loyalty Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Current Level: Gold Member</span>
                    <Badge className="bg-yellow-500">Gold</Badge>
                  </div>
                  <Progress value={83} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{userStats.loyaltyPoints} points</span>
                    <span>{userStats.loyaltyPoints + userStats.nextLevelPoints} points for Platinum</span>
                  </div>
                  <Alert>
                    <Gift className="h-4 w-4" />
                    <AlertDescription>
                      Earn {userStats.nextLevelPoints} more points to unlock Platinum benefits and get 25% off on all orders!
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="border-none shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2 text-blue-600" />
                    Recent Orders
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab('orders')}>
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 3).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-semibold">#{order.id}</p>
                          <p className="text-sm text-gray-600">{order.items} items</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">₹{order.total}</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button onClick={() => navigateTo('home')} className="h-20 flex flex-col items-center justify-center">
                      <ShoppingBag className="h-6 w-6 mb-2" />
                      Shop Now
                    </Button>
                    <Button onClick={() => setActiveTab('orders')} variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Truck className="h-6 w-6 mb-2" />
                      Track Order
                    </Button>
                    <Button onClick={() => setActiveTab('wishlist')} variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Heart className="h-6 w-6 mb-2" />
                      Wishlist
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <HelpCircle className="h-6 w-6 mb-2" />
                      Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">My Orders</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map(order => (
                        <TableRow key={order.id} className="hover:bg-gray-50">
                          <TableCell className="font-mono">#{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.items} items</TableCell>
                          <TableCell className="font-bold">₹{order.total}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{order.paymentMethod}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Copy className="h-4 w-4" />
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

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">My Wishlist</h2>
              <Button variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Share Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map(item => (
                <Card key={item.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {item.discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          {item.discount}% OFF
                        </Badge>
                      )}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                          <span className="text-white font-semibold">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
                          {item.discount > 0 && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              ₹{Math.round(item.price / (1 - item.discount / 100))}
                            </span>
                          )}
                        </div>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button 
                        className="w-full" 
                        disabled={!item.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>
              <Button onClick={() => setIsEditingProfile(!isEditingProfile)}>
                {isEditingProfile ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative mx-auto mb-4 w-32 h-32">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg lg:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name</Label>
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Email Address</Label>
                      <Input
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Phone Number</Label>
                      <Input
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <Input
                        type="date"
                        value={profileData.dateOfBirth}
                        onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Address</Label>
                      <Textarea
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                        disabled={!isEditingProfile}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  {isEditingProfile && (
                    <div className="flex space-x-3 mt-6">
                      <Button onClick={handleProfileUpdate} className="flex-1">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Saved Addresses</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Address
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map(address => (
                <Card key={address.id} className="border-none shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {address.name}
                    </CardTitle>
                    {address.isDefault && (
                      <Badge className="bg-green-500">Default</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{address.address}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      <Phone className="h-4 w-4 inline mr-1" />
                      {address.phone}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Notification Preferences */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Order Updates</Label>
                      <p className="text-sm text-gray-600">Get notified about order status changes</p>
                    </div>
                    <Switch 
                      checked={notifications.orderUpdates}
                      onCheckedChange={(checked) => setNotifications({...notifications, orderUpdates: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Promotions & Offers</Label>
                      <p className="text-sm text-gray-600">Receive special deals and discounts</p>
                    </div>
                    <Switch 
                      checked={notifications.promotions}
                      onCheckedChange={(checked) => setNotifications({...notifications, promotions: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Products</Label>
                      <p className="text-sm text-gray-600">Updates about new product launches</p>
                    </div>
                    <Switch 
                      checked={notifications.newProducts}
                      onCheckedChange={(checked) => setNotifications({...notifications, newProducts: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Price Drops</Label>
                      <p className="text-sm text-gray-600">Alerts when wishlist items go on sale</p>
                    </div>
                    <Switch 
                      checked={notifications.priceDrops}
                      onCheckedChange={(checked) => setNotifications({...notifications, priceDrops: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Lock className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>

              {/* Account Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member Since:</span>
                    <span className="font-semibold">{userStats.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Type:</span>
                    <Badge className="bg-yellow-500">Gold Member</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loyalty Points:</span>
                    <span className="font-semibold">{userStats.loyaltyPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Orders:</span>
                    <span className="font-semibold">{userStats.totalOrders}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Help & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    FAQ & Help Center
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-2" />
                    Rate Our Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;