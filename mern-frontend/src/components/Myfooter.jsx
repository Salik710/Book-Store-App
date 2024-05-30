import React from 'react';


const MyFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Book Store</h2>
            <p className="mt-4 text-gray-400">Your favorite place to find great books!</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                  <i className="fas fa-home mr-2"></i> Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                  <i className="fas fa-shopping-bag mr-2"></i> Shop
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                  <i className="fas fa-info-circle mr-2"></i> About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-400 hover:text-white">
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Follow Us</h2>
            <div className="mt-4 flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-white">facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
              linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          &copy; 2024 Book Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
