import React from "react";

const Testimonial = ({ name, title, quote, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
      <p className="text-lg italic text-gray-700">{quote}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white animate__animated animate__fadeIn">
          хүмүүсын хэлсэн үгс
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          <Testimonial
            name="Базраа"
            title="Индрагын хүндэт багш"
            quote="Хөгжүүлэгч байна гэдэг нь асуудлыг маш хурдан шийдэж чаддаг байх ёстой энэ бол хөгжүүлэгч хүн юм бас хэт их бодохын оронд зүгээр л шууд хийж эхэл"
          />
          <Testimonial
            name="Базраа"
            title="Индрагын хүндэт багш"
            quote="чи хурдтай бичиж сурах хэрэгтэй"
          />
          <Testimonial
            name="Базраа"
            title="Индрагын хүндэт багш"
            quote="болохгүй зүйл байвал үргэлж бусдаас тусламж гуйж бай"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
