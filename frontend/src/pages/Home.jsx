import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-cloud text-primary text-2xl mr-2"></i>
                <span className="font-bold text-xl text-gray-800">MenuCloud</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary font-medium">Pricing</a>
              <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Digital Menus Made <span className="text-primary">Simple</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Create stunning digital menus for your restaurant or hotel. Generate unique QR codes and give your guests an effortless dining experience.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup" className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition transform hover:-translate-y-1">
                  Create Your Menu
                </Link>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg border border-gray-300 transition">
                  <i className="fas fa-play-circle mr-2"></i> See Demo
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary rounded-2xl shadow-xl p-6 transform -rotate-3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and share your digital menu
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-qrcode text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Unique QR Codes</h3>
              <p className="mt-4 text-gray-600">
                Generate unique, unguessable QR codes for your menu. Only those with the code can access your menu.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-edit text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Easy Menu Management</h3>
              <p className="mt-4 text-gray-600">
                Create, edit, and organize your menu items with categories, descriptions, prices, and images.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-mobile-alt text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Mobile Optimized</h3>
              <p className="mt-4 text-gray-600">
                Menus automatically adapt to any device for the best viewing experience on smartphones and tablets.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-tags text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Item Tagging</h3>
              <p className="mt-4 text-gray-600">
                Tag items as vegetarian, spicy, bestseller, or temporarily unavailable for better guest experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-chart-bar text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Analytics Dashboard</h3>
              <p className="mt-4 text-gray-600">
                Track how many times your menu is viewed and gain insights into guest preferences.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue-100 text-primary">
                <i className="fas fa-sync-alt text-2xl"></i>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Link Regeneration</h3>
              <p className="mt-4 text-gray-600">
                Regenerate your menu link and QR code anytime with a single click for enhanced security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How MenuCloud Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Get your digital menu up and running in just a few simple steps
            </p>
          </div>

          <div className="mt-16">
            <div className="flex flex-col md:grid grid-cols-12">
              <div className="col-span-5 mb-12 md:mb-0">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Create Your Account</h3>
                  <p className="mt-4 text-gray-600">
                    Sign up for MenuCloud and create your restaurant profile. Set up your menu categories and start adding items.
                  </p>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>
              <div className="col-span-5 mb-12 md:mb-0">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Generate QR Code</h3>
                  <p className="mt-4 text-gray-600">
                    Our system generates a unique, unguessable URL for your menu. Download and print the QR code.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:grid grid-cols-12 mt-12">
              <div className="col-span-5 mb-12 md:mb-0">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Place QR Codes</h3>
                  <p className="mt-4 text-gray-600">
                    Place the QR codes on tables, at the entrance, or anywhere guests can easily scan them.
                  </p>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="md:hidden flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>
              <div className="col-span-5">
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">Guests Scan & View</h3>
                  <p className="mt-4 text-gray-600">
                    Guests scan the QR code with their smartphone camera and instantly access your digital menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">Perfect for small restaurants and cafes</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> 1 Restaurant Menu</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Unlimited Menu Items</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> QR Code Generation</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Basic Analytics</li>
                <li className="flex items-center text-gray-400"><i className="fas fa-times-circle mr-2"></i> Multi-location Support</li>
              </ul>
              <button className="mt-8 w-full bg-white text-primary border border-primary py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white transform md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold">Professional</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">$49</span>
                <span>/month</span>
              </div>
              <p className="mt-4">Ideal for hotels and restaurant chains</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Up to 5 Locations</li>
                <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Unlimited Menu Items</li>
                <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> QR Code Generation</li>
                <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Advanced Analytics</li>
                <li className="flex items-center"><i className="fas fa-check-circle mr-2"></i> Table-Specific QR Codes</li>
              </ul>
              <button className="mt-8 w-full bg-white text-primary py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">For large hotel groups and chains</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Unlimited Locations</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Unlimited Menu Items</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> QR Code Generation</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Premium Analytics</li>
                <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Custom Branding</li>
              </ul>
              <button className="mt-8 w-full bg-white text-primary border border-primary py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Digitize Your Menu?</h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Join thousands of restaurants and hotels already using MenuCloud to enhance their guest experience.
          </p>
          <div className="mt-10">
            <Link to="/signup" className="bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
              Create Your Free Account
            </Link>
            <p className="mt-4 text-indigo-200">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <i className="fas fa-cloud text-white text-2xl mr-2"></i>
                <span className="font-bold text-xl">MenuCloud</span>
              </div>
              <p className="mt-4 text-gray-400">
                Digital menu solutions for restaurants and hotels worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 MenuCloud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
