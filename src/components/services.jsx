import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-5xl text-yellow-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-black">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 relative">
      <div className="absolute inset-0 z-0">
        <div className="people-animate-1"></div>
        <div className="people-animate-2"></div>
        <div className="people-animate-3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white animate__fadeIn">
          миний сурж байгаа гол чадварууд
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <ServiceCard
            icon={<i className="fas fa-laptop-code"></i>}
            title="Web Хөгжүүлэлт"
            description="React, Node.js, болон Tailwind CSS зэрэг сүүлийн үеийн технологиудыг ашиглан хариуцлагатай, том зорилготой вэбсайтуудыг бүтээж байна."
          />
          <ServiceCard
            icon={<i className="fas fa-mobile-alt"></i>}
            title="Mobile App Хөгжүүлэлт"
            description="React Native ашиглан Android болон iOS платформд зориулсан мобайл аппликейшнүүдийг бүтээж байна."
          />
          <ServiceCard
            icon={<i className="fas fa-cloud"></i>}
            title="desktop хөгжүүлэлт"
            description="үүнийг одоогоор хөгжүүлж эхлээгүй байгаа зүгээр л сурах сонирхол байгаа."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
