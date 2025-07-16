import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Twitter, Instagram, Youtube, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-red-600" />,
      title: 'Phone Numbers',
      details: [
        '+91 9876543210 (Primary)',
        '+91 9876543211 (Secondary)',
        '+91 44 2234 5678 (Office)'
      ]
    },
    {
      icon: <Mail className="h-8 w-8 text-red-600" />,
      title: 'Email Addresses',
      details: [
        'info@ecocrackers.in',
        'orders@ecocrackers.in',
        'support@ecocrackers.in'
      ]
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: 'Our Locations',
      details: [
        'Head Office: Chennai, Tamil Nadu',
        'Warehouse: Sivakasi, Tamil Nadu',
        'Showroom: T. Nagar, Chennai'
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM',
        'Festival Season: Extended Hours'
      ]
    }
  ];

  const officeLocations = [
    {
      name: 'Head Office',
      address: '123 Mount Road, T. Nagar, Chennai - 600017, Tamil Nadu',
      phone: '+91 44 2234 5678',
      type: 'primary'
    },
    {
      name: 'Manufacturing Unit',
      address: '456 Industrial Estate, Sivakasi - 626123, Tamil Nadu',
      phone: '+91 4562 234567',
      type: 'manufacturing'
    },
    {
      name: 'Warehouse & Distribution',
      address: '789 Logistics Park, Perungudi, Chennai - 600096, Tamil Nadu',
      phone: '+91 44 2234 5679',
      type: 'warehouse'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-yellow-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get in touch with us for orders, inquiries, or any assistance. We're here to help make your celebration spectacular!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Call Now</h3>
                <p className="text-gray-600 mb-4">Speak to our team</p>
                <Button variant="outline" className="w-full">
                  +91 9876543210
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick response</p>
                <Button variant="outline" className="w-full bg-green-50 hover:bg-green-100">
                  Chat with us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message</p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come to our store</p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll respond within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Inquiry Category</Label>
                      <Select onValueChange={(value) => handleSelectChange('category', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Related</SelectItem>
                          <SelectItem value="bulk">Bulk Purchase</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-bold text-gray-900">
                      {info.icon}
                      <span className="ml-3">{info.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our locations across Tamil Nadu for personalized service and product demonstrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {location.name}
                    </CardTitle>
                    <Badge 
                      variant={location.type === 'primary' ? 'default' : 'secondary'}
                      className={location.type === 'primary' ? 'bg-red-600' : ''}
                    >
                      {location.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-600 text-sm">
                        {location.phone}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Follow Us
                </CardTitle>
                <p className="text-gray-600">
                  Stay updated with our latest products and offers on social media.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center h-12">
                    <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-12">
                    <Instagram className="h-5 w-5 mr-2 text-pink-600" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-12">
                    <Twitter className="h-5 w-5 mr-2 text-blue-400" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center h-12">
                    <Youtube className="h-5 w-5 mr-2 text-red-600" />
                    YouTube
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">💡 Quick Tip</h4>
                  <p className="text-sm text-gray-600">
                    Follow us on WhatsApp for instant updates on new arrivals, special offers, and festival discounts!
                  </p>
                  <Button size="sm" className="mt-3 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What are your delivery areas?</h4>
                    <p className="text-sm text-gray-600">We deliver across Tamil Nadu and major cities in South India. Free delivery for orders above ₹500 within 10km of Chennai.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h4>
                    <p className="text-sm text-gray-600">Yes, we offer attractive discounts for bulk orders. Contact us directly for custom pricing on large quantities.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Are your products safety certified?</h4>
                    <p className="text-sm text-gray-600">All our products are government approved and follow strict safety standards. We provide safety instructions with every purchase.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Can I track my order?</h4>
                    <p className="text-sm text-gray-600">Yes, you can track your order status through our website or by calling our customer service.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;