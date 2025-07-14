import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Startup Founder",
    message:
      "Mukesh delivered beyond expectations! Our web platform looks stunning and runs lightning fast. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Riya Kapoor",
    role: "Interior Designer",
    message:
      "Very professional and communicative. Mukesh created a custom dashboard with great UI/UX and backend APIs. Will hire again!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Siddharth Mehra",
    role: "Digital Marketer",
    message:
      "He added everything from SEO to analytics and performance optimization. Our site speed jumped from 45 to 96!",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-12">
          What My Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-4"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <div className="flex justify-center">
                {Array.from({ length: t.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                {t.rating < 5 &&
                  Array.from({ length: 5 - t.rating }, (_, i) => (
                    <span key={i} className="text-gray-300 text-xl">★</span>
                  ))}
              </div>
              <p className="mt-4 text-lg text-gray-700 italic max-w-2xl">
                “{t.message}”
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
