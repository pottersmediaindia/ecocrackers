import React from "react";
import { Shield, Award, Users, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback.jsx";

const AboutPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Eco Crackers
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
              Celebrating 25+ years of bringing joy and sparkle to your festivities with safe, premium quality crackers and fireworks.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1998, Eco Crackers has been India's trusted name in premium fireworks and crackers. What started as a small family business in Chennai has grown into one of the country's leading manufacturers and retailers of high-quality pyrotechnics.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to safety, quality, and environmental responsibility has made us the preferred choice for millions of families across India. Every product we create undergoes rigorous quality testing to ensure the safest and most spectacular experience for our customers.
              </p>
              <Button 
                onClick={() => navigateTo('contact')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Contact Us
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&auto=format"
                alt="Fireworks manufacturing"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every product meets the highest safety standards with rigorous testing and quality control.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We use only the finest materials and traditional craftsmanship to create exceptional products.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your satisfaction and safety are our top priorities in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Trusted Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  25+ years of experience and millions of happy customers speak to our reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced team behind Eco Crackers' success and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format"
                  alt="CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
                <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 25 years in the fireworks industry, Rajesh leads our vision of safe, sustainable celebrations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1494790108755-2616c5e29cd2?w=300&h=300&fit=crop&auto=format"
                  alt="CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
                <p className="text-gray-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Priya oversees our quality control and safety processes, ensuring every product meets our high standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format"
                  alt="Head of Operations"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Arjun Patel</h3>
                <p className="text-gray-600 mb-4">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Arjun manages our nationwide distribution network and ensures timely delivery to customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-red-100 max-w-2xl mx-auto">
              Have questions about our products or services? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-red-100">
                123 Fireworks Street<br />
                Chennai, Tamil Nadu 600001<br />
                India
              </p>
            </div>
            
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-red-100">
                +91 9876543210<br />
                +91 9876543211<br />
                Mon-Sat: 9AM-6PM
              </p>
            </div>
            
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-red-100">
                info@ecocrackers.in<br />
                support@ecocrackers.in<br />
                sales@ecocrackers.in
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;