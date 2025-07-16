import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Mail, Calendar, ArrowRight, AlertCircle, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const TrackOrderPage = () => {
  const [trackingId, setTrackingId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data
  const mockOrders = {
    'ECO001234': {
      id: 'ECO001234',
      orderDate: '2024-01-15',
      expectedDelivery: '2024-01-18',
      status: 'in_transit',
      customer: {
        name: 'Raj Kumar',
        phone: '+91 9876543210',
        email: 'raj.kumar@email.com',
        address: '123 Anna Nagar, Chennai - 600040, Tamil Nadu'
      },
      items: [
        { name: 'Premium Gift Box Deluxe', quantity: 2, price: 850 },
        { name: 'Electric Sparkler Premium', quantity: 5, price: 45 },
        { name: 'Flower Pot Large', quantity: 3, price: 35 }
      ],
      total: 1930,
      trackingSteps: [
        { 
          status: 'confirmed', 
          title: 'Order Confirmed', 
          description: 'Your order has been confirmed and is being prepared',
          timestamp: '2024-01-15 10:30 AM',
          completed: true
        },
        { 
          status: 'processing', 
          title: 'Order Processing', 
          description: 'Your items are being packed and prepared for shipment',
          timestamp: '2024-01-15 02:45 PM',
          completed: true
        },
        { 
          status: 'shipped', 
          title: 'Order Shipped', 
          description: 'Your order has been dispatched from our warehouse',
          timestamp: '2024-01-16 09:15 AM',
          completed: true
        },
        { 
          status: 'in_transit', 
          title: 'In Transit', 
          description: 'Your package is on its way to the delivery location',
          timestamp: '2024-01-17 11:30 AM',
          completed: true,
          current: true
        },
        { 
          status: 'out_for_delivery', 
          title: 'Out for Delivery', 
          description: 'Your package is out for delivery and will arrive today',
          timestamp: 'Expected: 2024-01-18 10:00 AM',
          completed: false
        },
        { 
          status: 'delivered', 
          title: 'Delivered', 
          description: 'Your package has been successfully delivered',
          timestamp: 'Expected: 2024-01-18 12:00 PM',
          completed: false
        }
      ],
      courier: {
        name: 'Express Logistics',
        contact: '+91 9876543211',
        trackingUrl: 'https://expresslogistics.com/track'
      }
    },
    'ECO001235': {
      id: 'ECO001235',
      orderDate: '2024-01-10',
      expectedDelivery: '2024-01-12',
      status: 'delivered',
      customer: {
        name: 'Priya Sharma',
        phone: '+91 9876543220',
        email: 'priya.sharma@email.com',
        address: '456 T. Nagar, Chennai - 600017, Tamil Nadu'
      },
      items: [
        { name: 'Kids Safe Cracker Bundle', quantity: 1, price: 120 },
        { name: 'Colour Sparkler Special', quantity: 10, price: 50 }
      ],
      total: 620,
      trackingSteps: [
        { 
          status: 'confirmed', 
          title: 'Order Confirmed', 
          description: 'Your order has been confirmed and is being prepared',
          timestamp: '2024-01-10 11:00 AM',
          completed: true
        },
        { 
          status: 'processing', 
          title: 'Order Processing', 
          description: 'Your items are being packed and prepared for shipment',
          timestamp: '2024-01-10 03:30 PM',
          completed: true
        },
        { 
          status: 'shipped', 
          title: 'Order Shipped', 
          description: 'Your order has been dispatched from our warehouse',
          timestamp: '2024-01-11 08:45 AM',
          completed: true
        },
        { 
          status: 'in_transit', 
          title: 'In Transit', 
          description: 'Your package is on its way to the delivery location',
          timestamp: '2024-01-11 02:20 PM',
          completed: true
        },
        { 
          status: 'out_for_delivery', 
          title: 'Out for Delivery', 
          description: 'Your package is out for delivery and will arrive today',
          timestamp: '2024-01-12 09:30 AM',
          completed: true
        },
        { 
          status: 'delivered', 
          title: 'Delivered', 
          description: 'Your package has been successfully delivered',
          timestamp: '2024-01-12 01:45 PM',
          completed: true,
          current: true
        }
      ],
      courier: {
        name: 'Express Logistics',
        contact: '+91 9876543211',
        trackingUrl: 'https://expresslogistics.com/track'
      }
    }
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError('Please enter a valid tracking ID');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const order = mockOrders[trackingId.toUpperCase()];
      if (order) {
        setOrderData(order);
        setError('');
      } else {
        setError('Order not found. Please check your tracking ID and try again.');
        setOrderData(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-500';
      case 'processing': return 'bg-yellow-500';
      case 'shipped': return 'bg-purple-500';
      case 'in_transit': return 'bg-orange-500';
      case 'out_for_delivery': return 'bg-indigo-500';
      case 'delivered': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'delivered': return 'default';
      case 'in_transit': return 'secondary';
      case 'out_for_delivery': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Track Your <span className="text-yellow-300">Order</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Enter your tracking ID to get real-time updates on your order status and delivery information.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                <Package className="h-8 w-8 mr-3 text-red-600" />
                Track Your Order
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Enter your order ID or tracking number to get the latest updates
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrackOrder} className="space-y-4">
                <div>
                  <Label htmlFor="trackingId">Order ID / Tracking Number</Label>
                  <Input
                    id="trackingId"
                    type="text"
                    placeholder="e.g., ECO001234"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="mt-1 text-lg h-12"
                    disabled={isLoading}
                  />
                </div>
                {error && (
                  <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {error}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 h-12 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Clock className="h-5 w-5 mr-2 animate-spin" />
                      Tracking...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Track Order
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Sample Tracking IDs for Demo:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-blue-100"
                    onClick={() => setTrackingId('ECO001234')}
                  >
                    ECO001234 (In Transit)
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="cursor-pointer hover:bg-blue-100"
                    onClick={() => setTrackingId('ECO001235')}
                  >
                    ECO001235 (Delivered)
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Order Details */}
      {orderData && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Order Summary */}
            <Card className="border-none shadow-xl mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Order #{orderData.id}
                  </CardTitle>
                  <Badge 
                    variant={getStatusBadgeVariant(orderData.status)}
                    className={`text-white ${
                      orderData.status === 'delivered' ? 'bg-green-600' : 
                      orderData.status === 'in_transit' ? 'bg-orange-600' : 'bg-blue-600'
                    }`}
                  >
                    {orderData.status.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Order Date</h4>
                    <p className="text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(orderData.orderDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Delivery</h4>
                    <p className="text-gray-600 flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      {new Date(orderData.expectedDelivery).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Total Amount</h4>
                    <p className="text-gray-600 font-bold text-lg">
                      ₹{orderData.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tracking Timeline */}
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Tracking Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {orderData.trackingSteps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? getStatusColor(step.status) : 'bg-gray-300'
                          }`}>
                            {step.completed ? (
                              <CheckCircle className="h-5 w-5 text-white" />
                            ) : (
                              <Clock className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className={`font-semibold ${
                              step.current ? 'text-red-600' : step.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {step.title}
                              {step.current && (
                                <Badge variant="secondary" className="ml-2 bg-red-100 text-red-700">
                                  Current
                                </Badge>
                              )}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {step.description}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {step.timestamp}
                            </p>
                          </div>
                        </div>
                        {index < orderData.trackingSteps.length - 1 && (
                          <div className={`absolute left-4 top-8 w-0.5 h-6 ${
                            step.completed ? 'bg-gray-300' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order & Customer Details */}
              <div className="space-y-8">
                {/* Customer Information */}
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Customer Name</h4>
                        <p className="text-gray-600">{orderData.customer.name}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                        <p className="text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {orderData.customer.phone}
                        </p>
                        <p className="text-gray-600 flex items-center mt-1">
                          <Mail className="h-4 w-4 mr-2" />
                          {orderData.customer.email}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Delivery Address</h4>
                        <p className="text-gray-600 flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          {orderData.customer.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Courier Information */}
                <Card className="border-none shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      Courier Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Courier Partner</h4>
                        <p className="text-gray-600">{orderData.courier.name}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Contact Number</h4>
                        <p className="text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {orderData.courier.contact}
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Track on Courier Website
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Items */}
            <Card className="border-none shadow-xl mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Order Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-sm text-gray-600">₹{item.price} each</p>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex items-center justify-between font-bold text-lg">
                    <span>Total Amount</span>
                    <span className="text-red-600">₹{orderData.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find your order or have questions? We're here to help!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak to our customer service team</p>
                <Button variant="outline" className="w-full">
                  +91 9876543210
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us your tracking inquiry</p>
                <Button variant="outline" className="w-full">
                  support@ecocrackers.in
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Get instant help via WhatsApp</p>
                <Button variant="outline" className="w-full bg-green-50 hover:bg-green-100">
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrderPage;