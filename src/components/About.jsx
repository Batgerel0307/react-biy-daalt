import React from "react";

const About = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent to-black opacity-30 animate-rain"></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="rain absolute w-full h-full flex flex-wrap justify-center space-x-2 space-y-2 animate-rain bg-transparent">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-12 bg-blue-rain animate-rain drop-shadow-lg"
              style={{
                animationDuration: `${Math.random() * 1 + 0.5}s`,
                animationDelay: `${Math.random() * 1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 ml-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">Миний Тухай</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl leading-relaxed mb-6">
            Сайн уу! Би интерактив, динамик, хариу үйлдэлтэй вэбсайтууд болон програмуудыг бүтээх туршлагатай болохыг зорьж байгаа хүн юм, дээд зэргийн програмчлалын ур чадвартай болохын тулд үргэлж хичээж байна. би хэрэглэгчдэд ээлтэй вэб програмуудыг бүтээхэд мэргэшсэн хүн тун удахгүй болох болно. Миний зорилго бол шинэ технологийг байнга суралцаж, бодит амьдралд тулгарсан асуудлуудыг шийдвэрлэхэд хэрэглэх юм.
            </p>
            <p className="text-xl leading-relaxed">
            Би үргэлж нэг зорилготой хүмүүстэй болон багуудтай хамтран гайхалтай бүтээгдэхүүнүүдийг бүтээх боломжуудыг эрэлхийлж байдаг.
            </p>
          </div>
          <div className="md:w-1/3 ">
            <h3 className="text-3xl font-semibold mb-4 text-white">Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-blue-rain rounded-full mr-4"></span>
                <span className="text-xl">JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-red-rain rounded-full mr-4"></span>
                <span className="text-xl">React & React Native</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-rain rounded-full mr-4"></span>
                <span className="text-xl">Node.js & Express</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-yellow-rain rounded-full mr-4"></span>
                <span className="text-xl">HTML & CSS (Tailwind CSS)</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-pink-rain rounded-full mr-4"></span>
                <span className="text-xl">MongoDB & SQL Databases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
