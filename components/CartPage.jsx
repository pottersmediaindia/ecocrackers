import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingCart, CreditCard, Truck, ArrowLeft, CheckCircle, AlertCircle, MapPin, Phone, Mail, Calendar, Clock, Tag, Percent, Smartphone, QrCode, Banknote } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CartPage = ({ 
  cart, 
  updateCartQuantity, 
  removeFromCart, 
  clearCart, 
  cartTotal, 
  cartCount, 
  navigateTo,
  isLoggedIn,
  user
}) => {
  const [currentStep, setCurrentStep] = useState('cart');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [checkoutData, setCheckoutData] = useState({
    deliveryAddress: user?.address || '',
    deliveryPhone: user?.phone || '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: '',
    upiId: '',
    selectedUpiApp: '',
    deliveryInstructions: ''
  });

  const availableCoupons = [
    { code: 'DIWALI20', discount: 20, minOrder: 1000, description: '20% off on orders above ₹1000' },
    { code: 'FESTIVAL', discount: 10, minOrder: 0, description: '10% off on all orders' }
  ];

  const deliveryCharge = cartTotal >= 500 ? 0 : 50;
  const codCharge = checkoutData.paymentMethod === 'cod' ? 25 : 0;
  const discount = appliedCoupon ? (cartTotal * appliedCoupon.discount / 100) : 0;
  const finalTotal = cartTotal + deliveryCharge + codCharge - discount;

  const applyCoupon = () => {
    const coupon = availableCoupons.find(c => c.code === couponCode.toUpperCase());
    if (coupon && cartTotal >= coupon.minOrder) {
      setAppliedCoupon(coupon);
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const processPayment = async () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const newOrderId = 'ECO' + Date.now().toString().slice(-6);
      setOrderId(newOrderId);
      setCurrentStep('confirmation');
      clearCart();
      setIsProcessingPayment(false);
    }, 3000);
  };

  if (currentStep === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4 border-none shadow-xl">
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">Your order #{orderId} has been placed successfully.</p>
            <div className="space-y-3">
              <Button onClick={() => navigateTo('track')} className="w-full">
                Track Order
              </Button>
              <Button variant="outline" onClick={() => navigateTo('home')} className="w-full">
                Continue Shopping
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Complete Payment</h1>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <RadioGroup value={checkoutData.paymentMethod} onValueChange={(value) => setCheckoutData(prev => ({...prev, paymentMethod: value}))}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" />
                        <Label>Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="upi" />
                        <Label>UPI Payment</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cod" />
                        <Label>Cash on Delivery</Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {/* Credit/Debit Card Form */}
                  {checkoutData.paymentMethod === 'card' && (
                    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center mb-4">
                        <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                        <Label className="font-semibold">Card Details</Label>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm">Cardholder Name</Label>
                          <Input 
                            placeholder="Enter name on card"
                            value={checkoutData.cardName}
                            onChange={(e) => setCheckoutData(prev => ({...prev, cardName: e.target.value}))}
                          />
                        </div>
                        <div>
                          <Label className="text-sm">Card Number</Label>
                          <Input 
                            placeholder="1234 5678 9012 3456"
                            value={checkoutData.cardNumber}
                            onChange={(e) => setCheckoutData(prev => ({...prev, cardNumber: e.target.value}))}
                            maxLength={19}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm">Expiry Date</Label>
                            <Input 
                              placeholder="MM/YY"
                              value={checkoutData.cardExpiry}
                              onChange={(e) => setCheckoutData(prev => ({...prev, cardExpiry: e.target.value}))}
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <Label className="text-sm">CVV</Label>
                            <Input 
                              placeholder="123"
                              value={checkoutData.cardCvv}
                              onChange={(e) => setCheckoutData(prev => ({...prev, cardCvv: e.target.value}))}
                              maxLength={4}
                              type="password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {checkoutData.paymentMethod === 'upi' && (
                    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center mb-4">
                        <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
                        <Label className="font-semibold">UPI Payment</Label>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm">UPI ID</Label>
                          <Input 
                            placeholder="yourname@paytm / yourname@upi"
                            value={checkoutData.upiId}
                            onChange={(e) => setCheckoutData(prev => ({...prev, upiId: e.target.value}))}
                          />
                        </div>
                        <div>
                          <Label className="text-sm">Select UPI App (Optional)</Label>
                          <Select value={checkoutData.selectedUpiApp} onValueChange={(value) => setCheckoutData(prev => ({...prev, selectedUpiApp: value}))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose your preferred UPI app" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="paytm">Paytm</SelectItem>
                              <SelectItem value="gpay">Google Pay</SelectItem>
                              <SelectItem value="phonepe">PhonePe</SelectItem>
                              <SelectItem value="bharatpe">BharatPe</SelectItem>
                              <SelectItem value="amazon">Amazon Pay</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <QrCode className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-blue-800">Quick Pay Option</span>
                          </div>
                          <p className="text-xs text-blue-600">You can also scan QR code on the next step for instant payment</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cash on Delivery Form */}
                  {checkoutData.paymentMethod === 'cod' && (
                    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-center mb-4">
                        <Banknote className="h-5 w-5 text-green-600 mr-2" />
                        <Label className="font-semibold">Cash on Delivery</Label>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center mb-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-green-800">Payment Method Confirmed</span>
                          </div>
                          <p className="text-xs text-green-600">You will pay ₹{finalTotal.toFixed(2)} in cash when your order is delivered</p>
                        </div>
                        <div>
                          <Label className="text-sm">Delivery Instructions (Optional)</Label>
                          <Textarea 
                            placeholder="Any specific instructions for delivery (e.g., ring doorbell, call before arrival, etc.)"
                            value={checkoutData.deliveryInstructions}
                            onChange={(e) => setCheckoutData(prev => ({...prev, deliveryInstructions: e.target.value}))}
                            rows={3}
                          />
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center mb-1">
                            <AlertCircle className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className="text-sm font-medium text-yellow-800">Important Note</span>
                          </div>
                          <p className="text-xs text-yellow-700">Please keep exact change ready. COD charges: ₹25 additional</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery</span>
                          <span>{deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}</span>
                        </div>
                        {codCharge > 0 && (
                          <div className="flex justify-between">
                            <span>COD Charges</span>
                            <span>₹{codCharge}</span>
                          </div>
                        )}
                        {appliedCoupon && (
                          <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>-₹{discount.toFixed(2)}</span>
                          </div>
                        )}
                        <Separator />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>₹{finalTotal.toFixed(2)}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full mt-6 bg-red-600 hover:bg-red-700" 
                        onClick={processPayment}
                        disabled={isProcessingPayment || !checkoutData.paymentMethod || 
                          (checkoutData.paymentMethod === 'card' && (!checkoutData.cardNumber || !checkoutData.cardExpiry || !checkoutData.cardCvv || !checkoutData.cardName)) ||
                          (checkoutData.paymentMethod === 'upi' && !checkoutData.upiId)
                        }
                      >
                        {isProcessingPayment ? 'Processing...' : 
                         checkoutData.paymentMethod === 'cod' ? `Place Order - ₹${finalTotal.toFixed(2)}` : 
                         `Pay ₹${finalTotal.toFixed(2)}`}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentStep === 'checkout') {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Checkout Details</h1>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Delivery Address</Label>
                  <Textarea 
                    value={checkoutData.deliveryAddress}
                    onChange={(e) => setCheckoutData(prev => ({...prev, deliveryAddress: e.target.value}))}
                    placeholder="Enter complete delivery address"
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input 
                    value={checkoutData.deliveryPhone}
                    onChange={(e) => setCheckoutData(prev => ({...prev, deliveryPhone: e.target.value}))}
                    placeholder="Enter phone number"
                  />
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => setCurrentStep('payment')}
                  disabled={!checkoutData.deliveryAddress || !checkoutData.deliveryPhone}
                >
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
              <p className="text-xl opacity-90">{cartCount} items in your cart</p>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600" onClick={() => navigateTo('home')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <Button onClick={() => navigateTo('home')} className="bg-red-600 hover:bg-red-700" size="lg">
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Cart Items ({cartCount})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <ImageWithFallback src={item.image} alt={item.name} className="w-20 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-red-600">{item.tamilName}</p>
                          <span className="font-bold">₹{item.price}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" size="sm" className="h-8 w-8 rounded-full p-0" onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <Button variant="outline" size="sm" className="h-8 w-8 rounded-full p-0" onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
                          <Button variant="ghost" size="sm" className="text-red-600" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input 
                        placeholder="Enter coupon code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button onClick={applyCoupon} variant="outline">Apply</Button>
                    </div>
                    
                    {appliedCoupon && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-green-700 font-medium">{appliedCoupon.code}</span>
                          <Button variant="ghost" size="sm" onClick={() => setAppliedCoupon(null)}>×</Button>
                        </div>
                        <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>{deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}</span>
                      </div>
                      {appliedCoupon && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-₹{discount.toFixed(2)}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700" 
                      size="lg"
                      onClick={() => setCurrentStep('checkout')}
                      disabled={cart.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;