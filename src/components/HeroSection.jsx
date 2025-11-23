const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #FFF8E7 0%, #F5E6D3 50%, #E8F5E9 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-goa-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-goa-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center slide-up">
          {/* Main tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-6 leading-tight">
            🍱 The taste that reminds you of home…
            <br />
            <span className="text-goa-teal">but on a holiday</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Where home food meets beach mood 🌴
          </p>

          {/* Location */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            📍 18th June Rd, Panjim, Goa.
          </p>

          {/* Snap Eat Repeat */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium">
            Snap • Eat • Repeat 📸
          </p>

          {/* Hashtags */}
          <p className="text-sm md:text-base text-gray-500 mb-12 italic">
            #Thalitales #goa #panjim
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="px-8 py-4 bg-goa-teal text-white rounded-full font-semibold text-lg hover:bg-goa-blue transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Menu
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="px-8 py-4 bg-white text-goa-teal border-2 border-goa-teal rounded-full font-semibold text-lg hover:bg-goa-teal hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Table
            </button>
          </div>

          {/* Additional taglines */}
          <div className="mt-16 space-y-4 text-gray-600">
            <p className="text-lg md:text-xl">
              Welcome to ThaliTales 🍛
            </p>
            <p className="text-base md:text-lg">
              A new food story begins in Goa ✨
            </p>
            <p className="text-sm md:text-base italic">
              🏝️ #Goa • Retro vibes • Aesthetic plates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

