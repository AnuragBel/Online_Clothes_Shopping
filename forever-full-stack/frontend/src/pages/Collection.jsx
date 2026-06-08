import React, { useContext, useEffect, useState, useRef } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const [latestSlide, setLatestSlide] = useState(0);
  const [isLatestHovered, setIsLatestHovered] = useState(false);
  const latestTimerRef = useRef(null);

  const collectionSlides = [
    {
      bgImage: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop',
      title: "WINTER COLLECTION",
      subtitle: "Discover cozy styles for the cold days"
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop',
      title: "STREETWEAR",
      subtitle: "Urban aesthetics built to stand out"
    },
    {
      bgImage: 'https://thumbs.dreamstime.com/b/fashion-model-wearing-red-hoodie-inscription-los-angeles-posing-city-parking-urban-outfit-casual-everyday-clothing-149257709.jpghttps://thumbs.dreamstime.com/b/young-man-looking-closely-grey-knit-sweater-clothing-outlet-evaluating-quality-feel-everyday-casual-wear-colder-days-438229206.jpg',
      title: "CASUAL EVERYDAY",
      subtitle: "Comfortable and chic for your daily routine"
    }
  ];

  const latestDropSlides = [
    {
      bgImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
      title: "NEW SEASON APPAREL",
      subtitle: "Fresh fits for the changing weather"
    },
    {
      bgImage: 'https://www.zegna.com/content/dam/zegna-commerce/editorials/ratio137/editorial-pages/fw25/leather-outerwear/fw25-elevated-menswear-outerwear-fw25-1-M13-desktop-ratio137.webp',
      title: "PREMIUM OUTERWEAR",
      subtitle: "Layer up in style"
    },
    {
      bgImage: 'https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/news27novstep10licenseindia1027635dde858b68750.jpg',
      title: "EXCLUSIVE DENIM",
      subtitle: "Designed for the perfect fit"
    }
  ];

  const totalSlides = collectionSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextLatestSlide = () => {
    setLatestSlide((prev) => (prev + 1) % latestDropSlides.length);
  };

  const prevLatestSlide = () => {
    setLatestSlide((prev) => (prev - 1 + latestDropSlides.length) % latestDropSlides.length);
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

  useEffect(() => {
    if (!isLatestHovered) {
      latestTimerRef.current = setInterval(() => {
        nextLatestSlide();
      }, 3500);
    }
    return () => {
      if (latestTimerRef.current) clearInterval(latestTimerRef.current);
    };
  }, [isLatestHovered, latestSlide]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col gap-10 pt-10'>
      
      {/* Slider Section */}
      <div 
        className='relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-xl group'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className='flex h-full w-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {collectionSlides.map((slide, index) => (
            <div key={index} className='w-full h-full shrink-0 relative'>
              <img src={slide.bgImage} alt="" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6'>
                <h2 className='text-3xl md:text-5xl font-bold mb-4 tracking-wide'>{slide.title}</h2>
                <p className='text-lg md:text-2xl font-light'>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide} 
          className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 active:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-110'
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button 
          onClick={nextSlide} 
          className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 active:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-110'
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        {/* Carousel Indicators */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
          {collectionSlides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Latest Drops Section for Collection */}
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'DROPS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Check out our newest handpicked arrivals in the collection.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          products.slice(0, 5).map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>

      <hr className='my-6 border-gray-200' />

      {/* Main Collection Filter and Grid */}
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10'>
        
        {/* Filter Options */}
        <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Porduct Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

      </div>

      {/* Latest Drop Bottom Slider */}
      <div 
        className='relative w-full h-[30vh] md:h-[50vh] mt-16 mb-8 overflow-hidden rounded-xl group'
        onMouseEnter={() => setIsLatestHovered(true)}
        onMouseLeave={() => setIsLatestHovered(false)}
      >
        <div 
          className='flex h-full w-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${latestSlide * 100}%)` }}
        >
          {latestDropSlides.map((slide, index) => (
            <div key={index} className='w-full h-full shrink-0 relative'>
              <img src={slide.bgImage} alt="" className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6'>
                <p className='text-sm md:text-lg font-light tracking-widest text-[#FF3B3B] mb-2'>JUST DROPPED</p>
                <h2 className='text-2xl md:text-4xl font-bold mb-3 tracking-wider'>{slide.title}</h2>
                <p className='text-md md:text-xl font-light'>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevLatestSlide} 
          className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 active:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-110'
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button 
          onClick={nextLatestSlide} 
          className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 active:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-110'
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        {/* Carousel Indicators */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10'>
          {latestDropSlides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setLatestSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${latestSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Collection
