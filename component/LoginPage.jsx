import React, { useState } from 'react';
import { Eye, EyeOff, Shield, Lock, User, AlertCircle, CheckCircle, UserPlus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const LoginPage = ({ onLogin, navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  
  // Registration form state
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Admin credentials validation
    if (email === 'admin@eco.com' && password === 'admin123') {
      setTimeout(() => {
        onLogin({ 
          name: 'Administrator', 
          email: 'admin@eco.com', 
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        });
        setIsLoading(false);
      }, 1500);
    } else if (email && password) {
      // Regular user login (demo - any email/password combination works)
      setTimeout(() => {
        onLogin({ 
          name: email.split('@')[0].replace(/[^a-zA-Z]/g, ''), 
          email: email, 
          role: 'user',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e3c0ea?w=150&h=150&fit=crop&crop=face'
        });
        setIsLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setError('Please enter valid email and password.');
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    if (regData.password !== regData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    if (regData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      onLogin({ 
        name: regData.name, 
        email: regData.email, 
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b2e3c0ea?w=150&h=150&fit=crop&crop=face'
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-4 shadow-2xl">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-blue-200">Eco Crackers Management System</p>
        </div>

        <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center">
              <Lock className="h-6 w-6 mr-2 text-red-600" />
              Welcome to Eco Crackers
            </CardTitle>
            <p className="text-gray-600 text-sm">Sign in to your account or create a new one</p>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold text-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      <>
                        <User className="h-5 w-5 mr-2" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-6">
                  {error && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="reg-name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input
                      id="reg-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={regData.name}
                      onChange={(e) => setRegData({...regData, name: e.target.value})}
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-gray-700 font-medium">Email Address</Label>
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="your@email.com"
                      value={regData.email}
                      onChange={(e) => setRegData({...regData, email: e.target.value})}
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-phone" className="text-gray-700 font-medium">Phone Number</Label>
                    <Input
                      id="reg-phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={regData.phone}
                      onChange={(e) => setRegData({...regData, phone: e.target.value})}
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-gray-700 font-medium">Password</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      placeholder="Create a strong password"
                      value={regData.password}
                      onChange={(e) => setRegData({...regData, password: e.target.value})}
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                      disabled={isLoading}
                      minLength={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg-confirm-password" className="text-gray-700 font-medium">Confirm Password</Label>
                    <Input
                      id="reg-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={regData.confirmPassword}
                      onChange={(e) => setRegData({...regData, confirmPassword: e.target.value})}
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <>
                        <UserPlus className="h-5 w-5 mr-2" />
                        Create Account
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Demo Credentials
              </h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Admin:</strong> admin@eco.com / admin123</p>
                <p><strong>User:</strong> Any email and password combination</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="link" onClick={() => navigateTo('home')} className="text-gray-600 hover:text-red-600">
                ← Back to Store
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center text-blue-200 text-xs">
          <p>This is a secure admin portal. All activities are logged and monitored.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;