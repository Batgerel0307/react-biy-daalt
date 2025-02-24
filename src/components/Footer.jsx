import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-yellow-500 mb-4 transition-transform transform hover:scale-110">
              Надтай Холбогдох
            </h3>
            <p className="text-lg mb-2">Email: abcabcabc@gmail.com</p>
            <p className="text-lg">Phone: 89898989</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link
              to="#"
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-facebook-f text-3xl"></i>
            </Link>
            <Link
              to="#"
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </Link>
            <Link
              to="#"
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-github text-3xl"></i>
            </Link>
            <Link
              to="#"
              className="text-yellow-500 hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in text-3xl"></i>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-400">
            © 2025 онд хийсэн миний website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
