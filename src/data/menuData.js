// Menu data structure for THALItales
export const menuData = {
  veg: {
    name: "Veg Thali",
    description: "A wholesome vegetarian spread with authentic Goan flavors and coastal spices.",
    image: "/vegplate.jpg",
    dishes: [
      "Dal Fry with Coconut",
      "Aloo Gobi Masala",
      "Bhindi Masala",
      "Goan Vegetable Curry",
      "Steamed Rice",
      "Chapati",
      "Pickle & Papad",
      "Sweet Dish"
    ]
  },
  fish: {
    name: "Fish & Prawns Thali",
    description: "Fresh catch from the Arabian Sea, cooked with traditional Goan spices and coconut.",
    image: "/fishprawn.jpg",
    dishes: [
      "Goan Fish Curry",
      "Rawa Fried Fish",
      "Prawns Xacuti",
      "Fish Fry",
      "Steamed Rice",
      "Chapati",
      "Pickle & Papad",
      "Sweet Dish"
    ]
  },
  chicken: {
    name: "Chicken & Mutton Thali",
    description: "Hearty non-vegetarian delights with rich Goan masalas and aromatic spices.",
    image: "/chickenplate.jpg",
    dishes: [
      "Chicken Xacuti",
      "Mutton Curry",
      "Chicken Cafreal",
      "Goan Chicken Vindaloo",
      "Steamed Rice",
      "Chapati",
      "Pickle & Papad",
      "Sweet Dish"
    ]
  }
};

// All menu items for booking form
export const allMenuItems = [
  { id: 'veg-thali', name: 'Veg Thali', category: 'veg', price: '₹250' },
  { id: 'fish-thali', name: 'Fish & Prawns Thali', category: 'non-veg', price: '₹350' },
  { id: 'chicken-thali', name: 'Chicken & Mutton Thali', category: 'non-veg', price: '₹380' },
  { id: 'fish-curry', name: 'Goan Fish Curry (Extra)', category: 'non-veg', price: '₹180' },
  { id: 'prawns-xacuti', name: 'Prawns Xacuti (Extra)', category: 'non-veg', price: '₹220' },
  { id: 'chicken-xacuti', name: 'Chicken Xacuti (Extra)', category: 'non-veg', price: '₹200' },
  { id: 'dal-fry', name: 'Dal Fry (Extra)', category: 'veg', price: '₹120' },
  { id: 'aloo-gobi', name: 'Aloo Gobi (Extra)', category: 'veg', price: '₹140' },
];

