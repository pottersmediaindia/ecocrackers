import React from 'react';
import { Shield, Award, Users, Clock, Target, CheckCircle, Star, Truck, Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutPage = () => {
  const stats = [
    { icon: <Clock className="h-8 w-8 text-red-600" />, value: '25+', label: 'Years of Experience' },
    { icon: <Users className="h-8 w-8 text-red-600" />, value: '50,000+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8 text-red-600" />, value: '100+', label: 'Product Varieties' },
    { icon: <Shield className="h-8 w-8 text-red-600" />, value: '100%', label: 'Safety Certified' }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Safety First',
      description: 'All our products are safety certified and manufactured under strict quality control guidelines.'
    },
    {
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: 'Premium Quality',
      description: 'We use only the finest materials and traditional techniques to create spectacular fireworks.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-red-600" />,
      title: 'Certified Products',
      description: 'All products are government approved and comply with safety regulations and standards.'
    },
    {
      icon: <Truck className="h-12 w-12 text-red-600" />,
      title: 'Fast Delivery',
      description: 'Quick and safe delivery to your doorstep with proper handling and packaging.'
    }
  ];

  const team = [
    {
      name: 'Kannan Raj',
      position: 'Founder & CEO',
      experience: '25+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Priya Kannan',
      position: 'Quality Manager',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e3c0ea?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ravi Kumar',
      position: 'Production Head',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Meera Singh',
      position: 'Safety Officer',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Eco Crackers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Illuminating celebrations across India for over 25 years with premium quality fireworks and unwavering commitment to safety.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1999 by Kannan Raj, Eco Crackers began as a small family business with a passion for creating beautiful fireworks that bring joy to celebrations across Tamil Nadu.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a local fireworks shop has grown into one of India's most trusted names in the fireworks industry, serving customers across the country with premium quality products and exceptional service.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, we continue to uphold our founding principles of quality, safety, and customer satisfaction while embracing modern technology and sustainable practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Star className="h-4 w-4 mr-2" />
                  ISO Certified
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Safety Approved
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="h-4 w-4 mr-2" />
                  Quality Assured
                </Badge>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop"
                alt="Eco Crackers factory"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and make us the trusted choice for celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals behind Eco Crackers who ensure every product meets our high standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-red-200"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <p className="text-red-600 font-medium">
                    {member.position}
                  </p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-sm">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To bring joy and excitement to celebrations across India by providing the highest quality, safest, and most spectacular fireworks while maintaining our commitment to environmental responsibility and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Award className="h-8 w-8 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be India's leading fireworks manufacturer, recognized globally for innovation, quality, and safety, while preserving traditional craftsmanship and fostering sustainable practices for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to light up your celebration? Contact us today!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 mb-4 text-yellow-300" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 mb-4 text-yellow-300" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p>info@ecocrackers.in</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 mb-4 text-yellow-300" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;