import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LatestDrops = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1544441893-675973e3a985?q=80&w=1500&auto=format&fit=crop",
      sub: "CRAFTED FROM",
      title: "100% LINEN",
      desc: "LIGHTWEIGHT. BREATHABLE. SUMMER-READY."
    },
    {
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1500&auto=format&fit=crop",
      sub: "NEW ARRIVALS",
      title: "OCEAN BREEZE",
      desc: "EFFORTLESS STYLE FOR LONG DAYS."
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1500&auto=format&fit=crop",
      sub: "LIMITED EDITION",
      title: "SOLSTICE WEAR",
      desc: "CATCH THE SUN IN PREMIUM FABRICS."
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentSlide]);

  return (
    <section className="w-full bg-white mb-10 overflow-hidden font-['Poppins']">
      {/* CSS Animations */}
      <style>
        {`
          @keyframes flexLine {
            0% { width: 0; }
            100% { width: 100%; }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
          }
          .animate-fade-in-right {
            animation: fadeInRight 0.8s ease-out forwards;
            opacity: 0; /* Pre-animation state */
            animation-delay: 0.3s;
          }
        `}
      </style>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 px-4 py-8">
        <div className="h-[1px] bg-[#CCCCCC] flex-grow"></div>
        <h2 className="font-['Playfair_Display'] text-[22px] font-bold uppercase tracking-[3px] text-[#111111] whitespace-nowrap">
          LATEST DROPS
        </h2>
        <div className="h-[1px] bg-[#CCCCCC] flex-grow"></div>
      </div>

      {/* Full Width Banner Slider */}
      <div 
        className='relative w-screen -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='relative w-full h-[50vh] md:h-[70vh] overflow-hidden group'>
          
          {/* Slider Track */}
          <div 
            className='flex h-full w-full transition-transform duration-600 ease-in-out'
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transitionDuration: '600ms'
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className='relative w-full h-full shrink-0'>
                {/* Background Image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className='w-full h-full object-cover object-top'
                />
                
                {/* Dark Overlay Gradient (Left Side) */}
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none'></div>

                {/* Text Overlay & Button Overlay Container */}
                {currentSlide === index && (
                  <div className='absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between px-[12%] md:px-[8%] z-10'>
                    
                    {/* Left Text */}
                    <div className='animate-fade-in-left max-w-[90%] md:max-w-[60%]'>
                      <p className='font-["Cormorant_Garamond"] text-white text-[14px] md:text-[22px] tracking-[3px] md:tracking-[4px] uppercase font-light mb-2 drop-shadow-md'>
                        {slide.sub}
                      </p>
                      <h1 className='font-["Cormorant_Garamond"] text-white text-[38px] md:text-[72px] tracking-[2px] uppercase font-normal leading-tight md:leading-none mb-4 drop-shadow-lg break-words'>
                        {slide.title}
                      </h1>
                      <p className='hidden md:block font-["Poppins"] text-[13px] text-white/85 tracking-[3px] uppercase font-light drop-shadow-md'>
                        {slide.desc}
                      </p>

                      {/* Explore Now Button (Mobile: under text, Desktop: split right) */}
                      <div className='mt-6 md:hidden animate-fade-in-left' style={{ animationDelay: '0.2s' }}>
                        <Link to="/collection">
                          <button className='bg-black/20 backdrop-blur-sm border-2 border-white text-white px-5 py-2.5 font-["Poppins"] text-[10px] uppercase tracking-[2px] font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300 ease-in-out whitespace-nowrap shadow-lg'>
                            EXPLORE NOW
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Explore Now Button (Desktop only, Right Side) */}
                    <div className='hidden md:block animate-fade-in-right'>
                      <Link to="/collection">
                        <button className='bg-transparent border-2 border-white text-white px-[28px] py-[14px] font-["Poppins"] text-[12px] uppercase tracking-[3px] font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300 ease-in-out whitespace-nowrap'>
                          EXPLORE NOW
                        </button>
                      </Link>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Minimal Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className='absolute left-[2%] md:left-[1.5%] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-opacity duration-300 text-4xl md:text-6xl font-light px-2 z-20 opacity-100 md:opacity-0 group-hover:opacity-100 drop-shadow-md'
          >
            &#8249;
          </button>
          <button 
            onClick={nextSlide}
            className='absolute right-[2%] md:right-[1.5%] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-opacity duration-300 text-4xl md:text-6xl font-light px-2 z-20 opacity-100 md:opacity-0 group-hover:opacity-100 drop-shadow-md'
          >
            &#8250;
          </button>

        </div>
      </div>
    </section>
  );
};

export default LatestDrops;