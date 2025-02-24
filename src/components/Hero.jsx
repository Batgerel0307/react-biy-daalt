import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="people-animate people-animate-1"></div>
        <div className="people-animate people-animate-2"></div>
        <div className="people-animate people-animate-3"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center text-center h-full px-6">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s animate__bounceIn animate__infinite animate__breatheInOut animate__zoomIn">
            Сайн уу гэж миний website Хэлж Байна
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s animate__zoomIn animate__bounceInLeft">
            миний хөгжүүлсэн website тавтай морил
          </p>
          
          <Link
            to="/projects"
            className="bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-full hover:bg-yellow-400 transform transition duration-300 ease-in-out scale-100 hover:scale-105 animate__animated animate__pulse animate__infinite animate__delay-3s animate__shakeX"
          >
            миний ажлыг харах
          </Link>
        </div>
      </div>
      
      <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-500 rounded-full opacity-30 animate__animated animate__fadeIn animate__bounce animate__delay-4s animate__breatheInOut animate__rotateIn animate__infinite"></div>
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full opacity-50 animate__animated animate__bounce animate__infinite animate__delay-3s animate__bounceIn animate__pulse animate__breatheInOut"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-400 rounded-full opacity-50 animate__animated animate__bounce animate__infinite animate__delay-5s animate__zoomIn animate__rotateIn animate__breatheInOut"></div>
    </section>
  );
};

export default Hero;
