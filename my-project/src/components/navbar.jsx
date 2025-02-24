import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-yellow-500 ml-7">
            Миний Танилцуулга
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-500 hover:underline transition-all duration-300"
            >
              Нүүр хуудас
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-500 hover:underline transition-all duration-300"
            >
              Танилцуулга
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-yellow-500 hover:underline transition-all duration-300"
            >
              Үйлчилгээ
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:text-yellow-500 hover:underline transition-all duration-300"
            >
              бусдын хэлсэн үгс
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-500 hover:underline transition-all duration-300 mr-8"
            >
              Холбоо барих
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
