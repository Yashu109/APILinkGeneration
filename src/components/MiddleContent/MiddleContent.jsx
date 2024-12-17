import { useState, useEffect } from "react";
import "./MiddleContent.css";
import railwaycrack from "../../assets/Railway.avif";
import DSC02212 from "../../assets/DSC02212.webp";
import D11071338 from "../../assets/11071338.webp";
import D1704443 from "../../assets/1704443.webp";
import D9464182 from "../../assets/9464182.webp";
import Image1 from "../../assets/3D_printer_375x.avif"
import Image2 from "../../assets/drones.avif"
import Image3 from "../../assets/do-it-yourself.avif"
import Image4 from "../../assets/robotics.avif"
import Projects from "../Projects/Projects";
const MiddleContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Railway crack detection",
      description: "Explore the power of AI with NVIDIA Jetson Nano.",
      image: railwaycrack,
    },
    {
      title: "DSC02212",
      description: "Explore the power of AI with NVIDIA Jetson Nano.",
      image: DSC02212,
    },
    {
      title: "11071338",
      description: "Explore the power of AI with NVIDIA Jetson Nano.",
      image: D11071338,
    },
    {
      title: "1704443(1)",
      description: "Explore the power of AI with NVIDIA Jetson Nano.",
      image: D1704443,
    },
    {
      title: "9464182",
      description: "Explore the power of AI with NVIDIA Jetson Nano.",
      image: D9464182,
    },
  ];

  const bannerItems = [
    { icon: "🖨️", title: "PCB Manufacturing" },
    { icon: "🛠️", title: "3D Printing" },
    { icon: "✂️", title: "Laser Cutting" },
    { icon: "🔋", title: "Custom Battery Pack" },
  ];

  const categories = [
    {
      image: Image1,
      alt: "3D Printers & Services",
      title: "3D Printers & Services",
      description: "experts at Carbon Fiber 3D Printing",
    },
    {
      image: Image2,
      title: "Drones",
      description: "everything you need to build a drone",
    },
    {
      image: Image3,
      title: "Do-It-Yourself",
      description: "for the tinkerers and builders",
    },
    {
      image: Image4,
      title: "Robotics",
      description: "extensive collection of Educational Robots",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="banner-container">
        <div className="left-banner">
          <h2 className="banner-title">FAST Prototyping</h2>
          {bannerItems.map((item, index) => (
            <div key={index} className="banner-item">
              <div className="icon">{item.icon}</div>
              <div className="text">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="slider-container">
          <div className="slider">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="slider-image"
            />
            <div className="slider-content">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
            </div>
          </div>
          <div className="navigation-buttons">
            <button className="nav-button prev-button" onClick={prevSlide}>
              <span className="arrow">{"\u2190"}</span>
            </button>
            <button className="nav-button next-button" onClick={nextSlide}>
              <span className="arrow">{"\u2192"}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="category-cards-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Projects/>
      </div>
    </>
  );
};

export default MiddleContent;
