import { useState, useEffect } from 'react';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('menu');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getFilteredCategories = () => {
    if (filter === 'veg') {
      return { veg: menuData.veg };
    } else if (filter === 'non-veg') {
      return { fish: menuData.fish, chicken: menuData.chicken };
    }
    return menuData;
  };

  const categories = getFilteredCategories();

  return (
    <section
      id="menu"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Our Thali Tales
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Authentic Goan home-style food served with love. Experience the coastal
            flavors and traditional spices that make every meal a celebration.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-goa-teal text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('veg')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === 'veg'
                ? 'bg-goa-teal text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Veg
          </button>
          <button
            onClick={() => setFilter('non-veg')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === 'non-veg'
                ? 'bg-goa-teal text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Non-Veg
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? 'slide-up' : 'opacity-0'
          }`}
        >
          {Object.entries(categories).map(([key, category], index) => (
            <div
              key={key}
              className="bg-goa-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 md:h-96 lg:h-[28rem] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain bg-goa-cream"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-display font-bold drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {category.dishes.map((dish, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-goa-teal mr-2">•</span>
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

