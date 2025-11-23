import { useState, useEffect } from 'react';
import { allMenuItems } from '../data/menuData';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tableNumber: '',
    foodType: '',
    items: [],
    time: '',
    specialRequests: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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

    const section = document.getElementById('booking');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleItemChange = (itemId) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.includes(itemId)
        ? prev.items.filter((id) => id !== itemId)
        : [...prev.items, itemId],
    }));
    if (errors.items) {
      setErrors((prev) => ({
        ...prev,
        items: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.tableNumber) {
      newErrors.tableNumber = 'Please select a table number';
    }

    if (!formData.foodType) {
      newErrors.foodType = 'Please select Veg or Non-Veg';
    }

    if (formData.items.length === 0) {
      newErrors.items = 'Please select at least one item';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Log to console for debugging
    console.log('Booking submitted:', formData);

    // Show success message
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        tableNumber: '',
        foodType: '',
        items: [],
        time: '',
        specialRequests: '',
      });
      setSubmitted(false);
    }, 10000);
  };

  const getSelectedItemsNames = () => {
    return formData.items
      .map((id) => allMenuItems.find((item) => item.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  const filteredItems =
    formData.foodType === ''
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === formData.foodType);

  if (submitted) {
    return (
      <section
        id="booking"
        className="py-20"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f0f8f0 50%, #ffffff 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center slide-up border border-gray-200">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-display font-bold text-black mb-4">
              Thank you, {formData.name}!
            </h2>
            <p className="text-lg text-black mb-2">
              Your table <strong>{formData.tableNumber}</strong> booking request
              has been noted.
            </p>
            <p className="text-base text-black mb-4">
              Selected items: <strong>{getSelectedItemsNames()}</strong>
            </p>
            <p className="text-sm text-black/70 italic">
              (Demo only – not a real booking)
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      className="py-20"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f8f0 50%, #ffffff 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-4">
              Book Your Table & Thali
            </h2>
            <p className="text-lg text-black mb-2">
              Reserve & Relish
            </p>
            <p className="text-sm text-black/70 italic">
              * This is a dummy demo form (no real booking)
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-black font-medium mb-2"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-green transition-colors`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-black font-medium mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-green transition-colors`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Table Number */}
            <div>
              <label
                htmlFor="tableNumber"
                className="block text-black font-medium mb-2"
              >
                Table Number <span className="text-red-500">*</span>
              </label>
              <select
                id="tableNumber"
                name="tableNumber"
                value={formData.tableNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.tableNumber ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:border-green transition-colors`}
              >
                <option value="">Select a table</option>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    Table {num}
                  </option>
                ))}
              </select>
              {errors.tableNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tableNumber}
                </p>
              )}
            </div>

            {/* Food Type */}
            <div>
              <label className="block text-black font-medium mb-2">
                Veg / Non-Veg <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="foodType"
                    value="veg"
                    checked={formData.foodType === 'veg'}
                    onChange={handleChange}
                    className="w-5 h-5 text-green focus:ring-green"
                  />
                  <span className="text-black">Veg</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="foodType"
                    value="non-veg"
                    checked={formData.foodType === 'non-veg'}
                    onChange={handleChange}
                    className="w-5 h-5 text-green focus:ring-green"
                  />
                  <span className="text-black">Non-Veg</span>
                </label>
              </div>
              {errors.foodType && (
                <p className="text-red-500 text-sm mt-1">{errors.foodType}</p>
              )}
            </div>

            {/* Items Selection */}
            <div>
              <label className="block text-black font-medium mb-2">
                Select Items <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                {filteredItems.length === 0 ? (
                  <p className="text-black/70 text-sm">
                    Please select Veg or Non-Veg first
                  </p>
                ) : (
                  <div className="space-y-2">
                    {filteredItems.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={formData.items.includes(item.id)}
                          onChange={() => handleItemChange(item.id)}
                          className="w-5 h-5 text-green focus:ring-green rounded"
                        />
                        <span className="text-black flex-1">
                          {item.name}
                        </span>
                        <span className="text-black/70 text-sm">{item.price}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              {errors.items && (
                <p className="text-red-500 text-sm mt-1">{errors.items}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div>
              <label
                htmlFor="time"
                className="block text-black font-medium mb-2"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green transition-colors"
              />
            </div>

            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-black font-medium mb-2"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green transition-colors resize-none"
                placeholder="Any special requests or dietary preferences..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green to-saffron text-white rounded-full font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

