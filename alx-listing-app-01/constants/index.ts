// constants/index.ts

export const PROPERTY_LISTING_SAMPLE = [
  {
    image: '/assets/house1.jpg',
    name: 'Cozy Cottage',
    price: 120,
    rating: 4.8,
  },
  {
    image: '/assets/villa.jpg',
    name: 'Luxury Villa',
    price: 250,
    rating: 4.9,
  },
];

export const FILTERS = [
  'Top Villa',
  'Self Checkin',
  'Countryside',
  'Beachfront',
];


import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    discount: "",
    description: "A luxury villa with ocean breeze and tranquil surroundings in Bali's upscale Seminyak.",
    reviews: [
      {
        name: "Alice Tan",
        rating: 4.9,
        comment: "Amazing stay! The ocean view was unforgettable.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "David Lee",
        rating: 4.8,
        comment: "The private pool and location made it worth every penny.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://images.unsplash.com/photo-1600585154340-3e97ad015097",
    discount: "30",
    description: "Cozy up in a beautiful chalet with stunning mountain views and a warm fireplace in Aspen.",
    reviews: [
      {
        name: "Sophia Carter",
        rating: 4.7,
        comment: "Loved the snowy views and cabin feel. Would return again!",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        name: "Mark Jordan",
        rating: 4.6,
        comment: "Very peaceful and well-maintained.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://images.unsplash.com/photo-1618773928121-c32242f1d3ce",
    discount: "",
    description: "A relaxing desert escape perfect for couples or solo travelers looking for peace and privacy.",
    reviews: [
      {
        name: "Emily Smith",
        rating: 5.0,
        comment: "Perfect little getaway in the desert. Clean and peaceful.",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
      },
      {
        name: "Tom Baker",
        rating: 4.8,
        comment: "Loved the views and cozy vibes.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      }
    ]
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    discount: "15",
    description: "A luxurious penthouse overlooking New York’s skyline with modern amenities and stylish décor.",
    reviews: [
      {
        name: "Linda Moore",
        rating: 4.9,
        comment: "Incredible views and modern design. Worth every cent.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
      },
      {
        name: "Ben Harris",
        rating: 4.8,
        comment: "Great location and high-end interior. I’ll come back.",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    discount: "20",
    description: "Scenic riverside cabin with kayaking and serene forest views in Queenstown.",
    reviews: [
      {
        name: "Nina White",
        rating: 4.7,
        comment: "Beautiful location with lots of activities.",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
      },
      {
        name: "Carl Jensen",
        rating: 4.8,
        comment: "Loved the river access. Great for families.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
      }
    ]
  },
  {
    id: 6,
    name: "Tropical Beach House",
    address: { state: "Hawaii", city: "Maui", country: "USA" },
    rating: 4.95,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 2500,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    discount: "25",
    description: "A stunning beach house with breathtaking ocean views and a private pool in Maui.",
    reviews: [
      {
        name: "Olivia Brown",
        rating: 5.0,
        comment: "Absolutely loved our stay! The views were incredible.",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
      },
      {
        name: "Liam Wilson",
        rating: 4.9,
        comment: "Perfect getaway for families. Highly recommend!",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg"
      }
    ]
  },
  {
    id: 7,
    name: "Modern Loft in the City",
    address: { state: "California", city: "Los Angeles", country: "USA" },
    rating: 4.8,
    category: ["City View", "Modern", "Self Checkin"],
    price: 3500,
    offers: { bed: "1", shower: "1", occupants: "1-2" },
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    discount: "10",
    description: "A stylish loft in the heart of the city with stunning views and modern amenities.",
    reviews: [
      {
        name: "Sophia Turner",
        rating: 4.9,
        comment: "Amazing place! The view from the balcony was breathtaking.",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg"
      },
      {
        name: "James Wilson",
        rating: 4.7,
        comment: "Great location and very comfortable. Will definitely return!",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg"
      }
    ]
  },
  {
    id: 8,
    name: "Luxury Villa",
    address: { state: "California", city: "Los Angeles", country: "USA" },
    rating: 4.9,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 5000,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    discount: "15",
    description: "A luxurious villa with stunning ocean views, a private pool, and top-notch amenities.",
    reviews: [
      {
        name: "Emma Johnson",
        rating: 5.0,
        comment: "The perfect getaway! The villa was stunning and the service was impeccable.",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg"
      },
      {
        name: "Michael Brown",
        rating: 4.8,
        comment: "Amazing experience! Highly recommend for a family vacation.",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg"
      }
    ]
  }
];
