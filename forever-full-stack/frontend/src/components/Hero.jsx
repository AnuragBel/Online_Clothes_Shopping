import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      bgImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      modelImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
      badgeTitle: "SUMMER '26",
      badgeIconL: "☀️",
      badgeIconR: "💀",
      title: "T-SHIRTS",
      subtitle: ["OVERSIZED", "RELAXED", "FITTED"]
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
      modelImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
      badgeTitle: "NEW ARRIVALS",
      badgeIconL: "🔥",
      badgeIconR: "✨",
      title: "JACKETS",
      subtitle: ["PREMIUM", "STYLISH", "DURABLE"]
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
      modelImage: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1750153218_5058787.jpg?w=480&dpr=2',
      badgeTitle: "DENIM HUB",
      badgeIconL: "👖",
      badgeIconR: "⚡",
      title: "DENIMS",
      subtitle: ["CLASSIC", "RUGGED", "EVERYDAY"]
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
      modelImage: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711623157_7398608.jpg?w=480&dpr=2',
      badgeTitle: "SUMMER VIBES",
      badgeIconL: "🌸",
      badgeIconR: "👗",
      title: "DRESSES",
      subtitle: ["ELEGANT", "BREEZY", "CHIC"]
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000&auto=format&fit=crop',
      modelImage: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop',
      badgeTitle: "LITTLE ONES",
      badgeIconL: "🧸",
      badgeIconR: "🎈",
      title: "KIDS",
      subtitle: ["PLAYFUL", "COMFY", "CUTE"]
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
  }, [isHovered, currentSlide]); // dependency on currentSlide ensures timer resets if we manually change

  return (
    <div className='font-["Poppins"]'>
      <div className='-mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] w-screen overflow-hidden'>
        
        {/* Banner Section / Auto Slider */}
        <div 
          className='relative w-full h-[50vh] md:h-[80vh] group overflow-hidden bg-[#F5F5F0]'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Track */}
          <div 
            className='flex h-full w-full transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className='w-full h-full flex flex-col md:flex-row shrink-0'>
                {/* Left Panel */}
                <div className='w-full md:w-1/2 h-1/2 md:h-full relative bg-[#F5F5F0] overflow-hidden'>
                  <img 
                    src={slide.bgImage} 
                    alt={`Lifestyle Model ${index}`} 
                    className='w-full h-full object-cover object-center opacity-95 mix-blend-multiply'
                  />
                  {/* Badge Overlay */}
                  <div className='absolute top-6 mx-auto left-0 right-0 w-max flex items-center gap-2 bg-yellow-400 text-red-600 px-4 py-2 font-["Bebas_Neue"] text-2xl tracking-wider rounded shadow-md uppercase'>
                    <span>{slide.badgeIconL}</span> {slide.badgeTitle} <span>{slide.badgeIconR}</span>
                  </div>
                </div>

                {/* Right Panel */}
                <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-row hidden md:flex'>
                  {/* Right Panel - Product Model */}
                  <div className='w-1/2 h-full bg-[#FFF8DC] overflow-hidden'>
                    <img 
                      src={slide.modelImage} 
                      alt={`Model with ${slide.title.toLowerCase()}`} 
                      className='w-full h-full object-cover object-top'
                    />
                  </div>
                  {/* Right Panel - Text Content */}
                  <div className='w-1/2 h-full bg-[#FFF9E0] flex flex-col justify-center items-center text-center p-4'>
                    <h1 className='font-["Bebas_Neue"] text-[12vw] sm:text-[8vw] md:text-7xl lg:text-[100px] leading-none text-[#111111]'>
                      {slide.title}
                    </h1>
                    <p className='text-[#444444] text-[10px] sm:text-xs tracking-[0.2em] lg:tracking-[0.3em] font-light text-center mt-2 lg:mt-4'>
                      {slide.subtitle[0]}<br/>{slide.subtitle[1]}<br/>{slide.subtitle[2]}
                    </p>
                  </div>
                </div>

                {/* Mobile text fallback */}
                <div className='md:hidden absolute w-full h-full flex flex-col justify-center items-center text-center p-4 bg-black/20 pointer-events-none'>
                  <h1 className='font-["Bebas_Neue"] text-6xl text-white leading-none'>
                      {slide.title}
                    </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className='absolute left-4 top-1/2 -translate-y-1/2 shadow-lg bg-white/60 hover:bg-white text-black p-3 rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 z-10'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide}
            className='absolute right-4 top-1/2 -translate-y-1/2 shadow-lg bg-white/60 hover:bg-white text-black p-3 rounded-full transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 z-10'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Bottom Pagination Dots */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => goToSlide(i)}
                className={`transition-all duration-300 rounded-full border-2 border-black ${
                  i === currentSlide ? 'bg-[#111111] w-3 h-3 scale-110' : 'bg-transparent w-2.5 h-2.5'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Shop Now Button Sections */}
        <div className='flex justify-center my-5'>
          <style>
            {`
              @keyframes bounceSubtle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
              }
              .animate-bounce-subtle {
                animation: bounceSubtle 2s infinite ease-in-out;
              }
            `}
          </style>
          <Link to="/collection">
            <button className='bg-[#111111] hover:bg-[#333333] text-white font-bold uppercase tracking-[2px] px-10 py-3.5 rounded text-sm transition-colors duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-bounce-subtle'>
              SHOP NOW &rarr;
            </button>
          </Link>
        </div>

        {/* Trust Bar Section */}
        <div className='w-full bg-[#E8F9F5] py-4 px-4 sm:px-10 border-t border-b border-[#D0EBE4] mb-8'>
          <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#c1e6db]'>
            
            {/* Trust Item 1 */}
            <div className='flex items-center gap-4 px-4 w-full sm:w-1/3 justify-center py-2 sm:py-0'>
              <div className='shrink-0 p-2 bg-[#d1f3eb] rounded-full text-[#111111]'>
                <span className="font-bold text-xl px-1">₹</span>
              </div>
              <div>
                <p className='font-bold text-[#111111] text-sm md:text-base'>10% Cashback</p>
                <p className='text-[#444444] text-xs md:text-sm'>on all App orders</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className='flex items-center gap-4 px-4 w-full sm:w-1/3 justify-center py-2 sm:py-0'>
              <div className='shrink-0 p-2 bg-[#d1f3eb] rounded-full text-[#111111]'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <div>
                <p className='font-bold text-[#111111] text-sm md:text-base'>30 days Easy Returns</p>
                <p className='text-[#444444] text-xs md:text-sm'>& Exchanges</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className='flex items-center gap-4 px-4 w-full sm:w-1/3 justify-center py-2 sm:py-0'>
              <div className='shrink-0 p-2 bg-[#d1f3eb] rounded-full text-[#111111]'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M13 8h4.586a1 1 0 01.904.553l2.414 4.828A1 1 0 0121 14.276V16a1 1 0 01-1 1h-1" /></svg>
              </div>
              <div>
                <p className='font-bold text-[#111111] text-sm md:text-base'>Free & Fast Shipping</p>
                <p className='text-[#444444] text-xs md:text-sm'>On orders above ₹999</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
