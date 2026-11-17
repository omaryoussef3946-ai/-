// Aura Luxury Travel - Data Repository & Package Catalog

const travelData = {
  company: {
    name: "Aura Luxury Expeditions",
    tagline: "Curated Journeys • Unrivaled Luxury",
    phone: "+1 (800) 892-AURA",
    whatsapp: "+18008922872",
    whatsappFormatted: "+1 (800) 892-2872",
    email: "concierge@auraluxurytravel.com",
    address: "742 Evergreen Promenade, Suite 900, New York, NY 10022",
    experienceYears: "10+",
    happyTravelers: "15,400+",
    destinationsCount: "65+",
    satisfactionRate: "99.4%"
  },

  destinations: [
    {
      id: "dubai",
      name: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      subtitle: "Futuristic luxury, Arabian desert safaris & iconic ultra-resorts.",
      priceFrom: 1850,
      rating: 4.9,
      reviewsCount: 382,
      duration: "5 - 7 Days",
      bestSeason: "Nov - Apr",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      badge: "Popular",
      highlights: [
        "Burj Al Arab & Palm Jumeirah private helicopter tour",
        "Overnight ultra-luxury desert oasis glamping under the stars",
        "VIP private yacht charter along Dubai Marina at sunset",
        "Michelin-starred culinary journey at Atlantis The Royal"
      ],
      description: "Dubai represents the pinnacle of modern luxury and Arabian opulence. From gravity-defying architecture to tranquil golden dunes, experience world-class hospitality tailored to your highest expectations."
    },
    {
      id: "turkey",
      name: "Turkey",
      country: "Turkey",
      region: "Eurasia",
      subtitle: "Fairy-tale hot air balloons, Ottoman palaces & turquoise coasts.",
      priceFrom: 1450,
      rating: 4.8,
      reviewsCount: 429,
      duration: "7 - 10 Days",
      bestSeason: "Apr - Oct",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85",
      badge: "Must Visit",
      highlights: [
        "Private sunrise hot air balloon flight over Cappadocia's fairy chimneys",
        "Bespoke Bosphorus yacht cruise past grand Ottoman palaces",
        "Cave suite stay in Uchisar with panoramic valley terrace",
        "Thermal springs & ancient ruins VIP tour in Pamukkale & Ephesus"
      ],
      description: "Where East meets West in timeless splendor. Discover centuries of imperial heritage, otherworldly landscapes in Cappadocia, and authentic Turkish hospitality combined with five-star luxury."
    },
    {
      id: "maldives",
      name: "Maldives",
      country: "Republic of Maldives",
      region: "Tropical Island",
      subtitle: "Overwater villas, private infinity pools & pristine coral atolls.",
      priceFrom: 2650,
      rating: 5.0,
      reviewsCount: 512,
      duration: "6 - 8 Days",
      bestSeason: "Dec - Apr",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
      badge: "Honeymoon Top",
      highlights: [
        "Overwater villa with retractable roof for stargazing",
        "Private seaplane transfers directly to your secluded atoll",
        "Undersea restaurant private degustation dinner",
        "Guided bioluminescent reef dive with marine biologist"
      ],
      description: "An idyllic archipelago of powdery white sandbars, turquoise lagoons, and unrivaled seclusion. The Maldives is the definitive sanctuary for couples, honeymooners, and luxury seekers."
    },
    {
      id: "switzerland",
      name: "Switzerland",
      country: "Switzerland",
      region: "Europe",
      subtitle: "Majestic alpine summits, panoramic glacier trains & 5-star mountain retreats.",
      priceFrom: 2890,
      rating: 4.9,
      reviewsCount: 310,
      duration: "7 - 9 Days",
      bestSeason: "Year-Round",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
      badge: "Scenic Escape",
      highlights: [
        "First-Class Excellence Class journey aboard the Glacier Express",
        "Private Matterhorn glacier excursion with mountain guide",
        "Lake Lucerne private vintage motor yacht cruise",
        "Thermal alpine wellness spa suites in St. Moritz and Zermatt"
      ],
      description: "Pristine mountain air, crystal-clear glacial lakes, and timeless European sophistication. Experience the finest chalets, world-renowned chocolate, and breathtaking railway journeys through the Swiss Alps."
    },
    {
      id: "greece",
      name: "Greece",
      country: "Greece",
      region: "Mediterranean",
      subtitle: "Sun-drenched Aegean vistas, cliffside whitewashed suites & private yachts.",
      priceFrom: 2250,
      rating: 4.9,
      reviewsCount: 467,
      duration: "7 - 10 Days",
      bestSeason: "May - Oct",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
      badge: "Iconic Sunset",
      highlights: [
        "Santorini caldera cliffside suite with private infinity plunge pool",
        "Private sunset catamaran cruise through volcanic hot springs",
        "Exclusive wine tasting at centuries-old volcanic vineyards",
        "Helicopter transfer from Athens to Mykonos & secluded cove beach club"
      ],
      description: "A dreamscape of white architecture, cobalt blue domes, and glowing sunsets over the Aegean Sea. Immerse yourself in Greek warmth, fresh Mediterranean cuisine, and effortless island glamour."
    },
    {
      id: "egypt",
      name: "Egypt",
      country: "Egypt",
      region: "Middle East",
      subtitle: "Wonders of the Pharaohs, golden hour Pyramids & five-star Nile cruises.",
      priceFrom: 1650,
      rating: 4.8,
      reviewsCount: 295,
      duration: "8 - 10 Days",
      bestSeason: "Oct - Apr",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85",
      badge: "Historical Wonder",
      highlights: [
        "Private VIP after-hours access to the Great Pyramids & Sphinx",
        "Luxury 5-star Oberoi Nile riverboat cruise between Luxor & Aswan",
        "Valley of the Kings royal tomb exploration with master Egyptologist",
        "Sunset felucca sail around Elephantine Island with traditional mint tea"
      ],
      description: "Walk in the footsteps of ancient kings and queens. From the monumental Pyramids of Giza to the tranquil luxury of sailing the historic Nile, experience Egypt in unmatched style and comfort."
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      region: "Tropical Island",
      subtitle: "Lush jungle villas, sacred water temples & bohemian oceanfront tranquility.",
      priceFrom: 1720,
      rating: 4.9,
      reviewsCount: 340,
      duration: "7 - 10 Days",
      bestSeason: "May - Sep",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
      badge: "Spiritual Luxury",
      highlights: [
        "Private pool villa suspended over Ubud's Ayung River valley",
        "Personal Hindu priest blessing ceremony at Tirta Empul",
        "Uluwatu cliffside dining overlooking the Indian Ocean",
        "Private helicopter tour over Mount Batur volcano and rice terraces"
      ],
      description: "Known as the Island of the Gods, Bali captivates with serene spiritual heritage, emerald rice terraces, and some of the world's most intimate private sanctuary resorts."
    },
    {
      id: "amalfi",
      name: "Amalfi Coast",
      country: "Italy",
      region: "Mediterranean",
      subtitle: "Dramatic coastal cliffs, pastel cliffside villages & Dolce Vita romance.",
      priceFrom: 2950,
      rating: 5.0,
      reviewsCount: 288,
      duration: "6 - 8 Days",
      bestSeason: "May - Oct",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
      badge: "Dolce Vita",
      highlights: [
        "Private Riva speedboat charter to Capri and the Blue Grotto",
        "Cliff-top suite at luxury Positano landmark hotel",
        "Private lemon grove cooking masterclass with Michelin chef",
        "Scenic vintage Alfa Romeo drive along coastal highways"
      ],
      description: "The epitome of Italian romance and coastal sophistication. Enjoy sparkling Limoncello, sun-kissed cliffside terraces, and unforgettable boat charters in the Tyrrhenian Sea."
    }
  ],

  packages: [
    {
      id: "dubai-royal-mirage",
      name: "Royal Dubai & Desert Mirage",
      destination: "Dubai",
      destinationId: "dubai",
      category: "Luxury City & Desert",
      days: 6,
      nights: 5,
      rating: 5.0,
      reviews: 142,
      price: 2490,
      originalPrice: 3100,
      discount: "20% OFF",
      hotel: "Atlantis The Royal & Al Maha Desert Resort",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "Round-trip Airport VIP Chauffeur Transfer",
        "5 Nights in 5-Star Ocean View & Desert Pool Suites",
        "Private Yacht Sunset Cruise with Champagne",
        "Desert Safari with Royal BBQ & Stargazing",
        "VIP Fast-Track Access to Burj Khalifa Sky Lounge",
        "Daily Gourmet Breakfast & 2 Michelin-starred Dinners"
      ],
      excludedServices: [
        "International Flight Tickets (Can be arranged)",
        "Personal Shopping & Spa treatments outside package",
        "Travel Insurance (Available upon booking)"
      ],
      itinerary: [
        {
          day: 1,
          title: "VIP Arrival & Check-in at Atlantis The Royal",
          detail: "Private luxury chauffeur pick-up in a Mercedes Maybach. Check-in to your Ocean View Sky Suite. Welcome cocktail reception at Cloud 22 infinity pool."
        },
        {
          day: 2,
          title: "Architecture & Marina Yacht Charter",
          detail: "Morning helicopter tour over Palm Jumeirah and the World Islands. Afternoon private 52-foot yacht cruise with onboard chef, cruising by JBR and Ain Dubai."
        },
        {
          day: 3,
          title: "Journey to the Golden Dunes",
          detail: "Transfer to Al Maha Luxury Desert Resort. Afternoon vintage Land Rover desert wildlife drive, followed by falconry demonstration and five-course dinner under desert stars."
        },
        {
          day: 4,
          title: "Old Dubai Heritage & Gold Souks",
          detail: "Private cultural tour through Al Fahidi historic district, traditional Abra crossing on Dubai Creek, private gold and spice souk bespoke shopping experience."
        },
        {
          day: 5,
          title: "Burj Khalifa VIP Sky & Dinner by Nobu",
          detail: "Exclusive Level 148 Burj Khalifa Sky lounge viewing. Afternoon leisure at private beach cabana. Farewell dinner at Nobu Dubai."
        },
        {
          day: 6,
          title: "Farewell Dubai & Chauffeur Departure",
          detail: "Leisurely breakfast overlooking the Arabian Gulf. Private chauffeur airport transfer with expedited VIP customs clearance."
        }
      ]
    },
    {
      id: "turkey-grandeur-cappadocia",
      name: "Turkish Grandeur & Cappadocia Balloons",
      destination: "Turkey",
      destinationId: "turkey",
      category: "Cultural Discovery & Honeymoon",
      days: 8,
      nights: 7,
      rating: 4.9,
      reviews: 198,
      price: 1980,
      originalPrice: 2450,
      discount: "19% OFF",
      hotel: "Ciragan Palace Kempinski & Museum Hotel Cappadocia",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "Domestic Luxury Business Class Flights (IST-NAV-IST)",
        "VIP Sunrise Hot Air Balloon Flight in Cappadocia",
        "Private Bosphorus Sunset Yacht Cruise",
        "7 Nights in Iconic 5-Star Heritage Suites",
        "Private Historian Guide throughout all visits",
        "Authentic Turkish Hammam & Spa Session"
      ],
      excludedServices: [
        "International Airfare",
        "Gratuities for guides and drivers",
        "Alcoholic beverages outside dinner menus"
      ],
      itinerary: [
        {
          day: 1,
          title: "Imperial Istanbul Arrival & Bosphorus Check-in",
          detail: "Welcome to Istanbul. Chauffeur transfer to the palace gates of Ciragan Palace Kempinski. Evening welcome dinner on the Bosphorus waterfront terrace."
        },
        {
          day: 2,
          title: "Hagia Sophia & Grand Bazaar Private Access",
          detail: "Morning VIP fast-track visit to Hagia Sophia, Blue Mosque, and Basilica Cistern. Afternoon private artisan-led tour through the Grand Bazaar."
        },
        {
          day: 3,
          title: "Bosphorus Private Yacht & Flight to Cappadocia",
          detail: "Private motor yacht cruise along the Asian and European coastlines. Afternoon domestic flight to Cappadocia. Check-in to luxury cave suite at Museum Hotel."
        },
        {
          day: 4,
          title: "Sunrise Hot Air Balloon & Valley of Fairies",
          detail: "At dawn, soar gently over Cappadocia's surreal rock formations with champagne toast landing. Afternoon exploration of Göreme Open Air Museum."
        },
        {
          day: 5,
          title: "Underground Cities & Anatolian Wine Tasting",
          detail: "Private guided tour of Kaymakli Underground City. Wine tasting at a historic rock-cut cellar overlooking Red Valley sunset."
        },
        {
          day: 6,
          title: "Horseback Ride & Return to Istanbul",
          detail: "Morning horseback trail through Love Valley. Flight back to Istanbul. Traditional Turkish Hammam ritual at Hurrem Sultan Hamam."
        },
        {
          day: 7,
          title: "Modern Istanbul & Culinary Masterclass",
          detail: "Contemporary Istanbul art walk in Karakoy, private culinary tour tasting Ottoman royal cuisine. Farewell evening dinner at Mikla."
        },
        {
          day: 8,
          title: "Departure with Unforgettable Memories",
          detail: "Breakfast overlooking the Bosphorus strait. Private airport transfer with VIP lounge passes."
        }
      ]
    },
    {
      id: "maldives-coral-sanctuary",
      name: "Maldives Ultra-Luxe Coral Sanctuary",
      destination: "Maldives",
      destinationId: "maldives",
      category: "Honeymoon & Tropical Bliss",
      days: 7,
      nights: 6,
      rating: 5.0,
      reviews: 245,
      price: 3450,
      originalPrice: 4200,
      discount: "Save $750",
      hotel: "Soneva Jani / Cheval Blanc Randheli",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "Round-trip Scenic Seaplane Transfers from Male",
        "Overwater Villa with Private Infinity Pool & Water Slide",
        "Full Board Dine-Around in 6 World-Class Restaurants",
        "Private Sunset Dolphin Cruise on Traditional Dhoni",
        "Couples 90-minute Overwater Spa Treatment",
        "Complimentary Snorkeling & Non-motorized Water Sports"
      ],
      excludedServices: [
        "Scuba Diving certification courses",
        "Premium vintage champagne selection",
        "Private island castaway picnic upgrade"
      ],
      itinerary: [
        {
          day: 1,
          title: "Scenic Seaplane & Overwater Welcome",
          detail: "Touchdown in Male and board your luxury private seaplane. Aerial views over ring-shaped atolls. Villa check-in with chilled vintage champagne and fresh tropical fruit."
        },
        {
          day: 2,
          title: "Coral Reef Snorkel & Sunset Dolphin Safari",
          detail: "Morning guided house reef snorkeling with resident marine biologist. Afternoon private dolphin-watching sail into the golden horizon."
        },
        {
          day: 3,
          title: "Overwater Spa & Sandbank Dining",
          detail: "Indulge in a signature aromatherapy massage listening to the waves below. Private candlelit dinner on a deserted sandbank under thousands of stars."
        },
        {
          day: 4,
          title: "Sub-aquatic Wonders & Paddleboarding",
          detail: "Try underwater sea-scooters or stand-up paddleboarding in the calm turquoise lagoon. Evening open-air cinema screening over the ocean."
        },
        {
          day: 5,
          title: "Underwater Restaurant Degustation",
          detail: "Leisure morning in your villa hammock. Multi-course lunch surrounded by manta rays and tropical fish at an underwater glass restaurant."
        },
        {
          day: 6,
          title: "Private Catamaran & Stargazing",
          detail: "Sail on a private catamaran around neighboring uninhabited islands. Evening astronomy session using the resort's state-of-the-art observatory."
        },
        {
          day: 7,
          title: "Farewell to Paradise",
          detail: "Champagne breakfast delivered via floating tray to your pool. Seaplane transfer back to Male International Airport."
        }
      ]
    },
    {
      id: "swiss-alpine-glacier",
      name: "Swiss Alpine Elegance & Glacier Express",
      destination: "Switzerland",
      destinationId: "switzerland",
      category: "Scenic Nature & Alpine Luxury",
      days: 7,
      nights: 6,
      rating: 4.9,
      reviews: 167,
      price: 3200,
      originalPrice: 3850,
      discount: "Save $650",
      hotel: "The Chedi Andermatt & Mont Cervin Palace Zermatt",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "First-Class Swiss Travel Pass (Unlimited Rail/Boat)",
        "Glacier Express 'Excellence Class' Reserved Seating with 5-Course Meal",
        "6 Nights in Leading Hotels of the World Alpine Chalets",
        "Gornergrat Mountain Railway Private Excursion",
        "Lake Geneva & Lake Lucerne Private Steamboat Cruises",
        "Fondue & Wine Tasting in Authentic Alpine Cave"
      ],
      excludedServices: [
        "Helicopter ski-touring drop (Add-on optional)",
        "Personal shopping in Zurich or Geneva",
        "International flights"
      ],
      itinerary: [
        {
          day: 1,
          title: "Zurich Arrival & Transfer to Lucerne",
          detail: "Meet-and-greet at Zurich Airport. Panoramic 1st class rail transfer along Lake Zurich to Lucerne. Walk the historic Chapel Bridge and stay at Bürgenstock Resort."
        },
        {
          day: 2,
          title: "Mount Pilatus & Andermatt Alpine Lodge",
          detail: "Ascend the world's steepest cogwheel railway to Pilatus summit. Transfer to the prestigious The Chedi Andermatt. Evening alpine fireplace spa."
        },
        {
          day: 3,
          title: "Glacier Express 'Excellence Class'",
          detail: "Board the legendary Glacier Express. Floor-to-ceiling glass panorama windows, personal concierge, 5-course gourmet meal with paired Swiss wines across the Rhine Gorge."
        },
        {
          day: 4,
          title: "Car-Free Zermatt & The Matterhorn",
          detail: "Arrive in car-free Zermatt. Electric carriage transfer to Mont Cervin Palace. Private balcony view facing the mighty Matterhorn."
        },
        {
          day: 5,
          title: "Gornergrat Glacier & Mountain Reflection",
          detail: "Ride the Gornergrat railway up to 3,089m. Walk around Riffelsee for the mirror reflection of the Matterhorn. Swiss raclette lunch in an alpine hut."
        },
        {
          day: 6,
          title: "Montreux Riviera & Chillon Castle",
          detail: "Scenic rail descent towards Lake Geneva and the Swiss Riviera. Private tour of Château de Chillon and Lavaux UNESCO terraced vineyards."
        },
        {
          day: 7,
          title: "Geneva Departure",
          detail: "Final stroll along Jet d'Eau and Geneva Old Town. VIP chauffeur transfer to Geneva International Airport."
        }
      ]
    },
    {
      id: "santorini-mykonos-cycladic",
      name: "Santorini & Mykonos Cycladic Romance",
      destination: "Greece",
      destinationId: "greece",
      category: "Honeymoon & Romantic Luxury",
      days: 8,
      nights: 7,
      rating: 4.9,
      reviews: 215,
      price: 2850,
      originalPrice: 3400,
      discount: "Save $550",
      hotel: "Grace Hotel Santorini (Auberge) & Santa Marina Mykonos",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "Private High-Speed Catamaran or Seaplane Transfer between Islands",
        "Santorini Cliffside Caldera Suite with Heated Private Pool",
        "Private Sunset Catamaran Cruise with Fresh Seafood BBQ",
        "Private Volcanic Wine Estate Tour with Sommelier",
        "VIP Sunbed Reservation at Santa Marina Buddha-Bar Beach",
        "Daily Champagne Buffet Breakfast"
      ],
      excludedServices: [
        "International Flights",
        "Private Helicopter Charters (optional upgrade)",
        "Personal shopping in Mykonos Town"
      ],
      itinerary: [
        {
          day: 1,
          title: "Santorini Caldera Welcome",
          detail: "VIP airport escort and transfer to Oia or Imerovigli. Check into Grace Hotel Santorini. Sip Greek sparkling wine as the sun dips below the caldera."
        },
        {
          day: 2,
          title: "Oia Whitewashed Paths & Sunset Cruise",
          detail: "Morning walking tour through hidden cobblestones, blue-domed churches. Afternoon embarkation on a private 44-foot Lagoon catamaran with snorkeling and fresh grilled seafood."
        },
        {
          day: 3,
          title: "Ancient Akrotiri & Volcanic Vineyards",
          detail: "Private guided exploration of the Minoan bronze-age city of Akrotiri, followed by an exclusive tasting of Assyrtiko wines at Estate Argyros."
        },
        {
          day: 4,
          title: "High-Speed Sea Journey to Mykonos",
          detail: "Private sea transfer to cosmopolitan Mykonos. Check-in at Santa Marina Resort on Ornos Bay. Relax on the resort's only private sand beach in Mykonos."
        },
        {
          day: 5,
          title: "Delos Sacred Island & Little Venice",
          detail: "Private speedboat excursion to the archaeological sanctuary of Delos, birthplace of Apollo. Evening cocktails in Little Venice overlooking the iconic windmills."
        },
        {
          day: 6,
          title: "Mykonos Beach Clubs & Gastronomy",
          detail: "VIP day at Nammos or Scorpios beach club. Evening fine dining at Matsuhisa Mykonos with Aegean sea breezes."
        },
        {
          day: 7,
          title: "Hidden Coves & Cycladic Spa",
          detail: "Private boat day exploring the secret coves of Rhenia island. Evening couple's thalassotherapy spa ritual."
        },
        {
          day: 8,
          title: "Farewell to the Greek Islands",
          detail: "Breakfast by the sea. Chauffeur transfer to Mykonos airport or ferry port for onward international connection."
        }
      ]
    },
    {
      id: "egypt-pharaohs-nile",
      name: "Pharaohs' Gold & Nile Luxury Cruise",
      destination: "Egypt",
      destinationId: "egypt",
      category: "Ancient Heritage & River Cruise",
      days: 9,
      nights: 8,
      rating: 4.8,
      reviews: 182,
      price: 2300,
      originalPrice: 2850,
      discount: "Save $550",
      hotel: "Mena House Cairo & The Oberoi Philae Nile Cruiser",
      hotelStars: 5,
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=85",
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=85"
      ],
      includedServices: [
        "Domestic Luxury Flights (Cairo - Luxor / Aswan - Cairo)",
        "4 Nights on 5-Star Oberoi Philae Luxury Nile Cruiser",
        "4 Nights in Pyramid-View Room at Historic Marriott Mena House",
        "Private Renowned Egyptologist Guide for All Sightseeing",
        "VIP After-Hours Entrance to Valley of the Kings (King Tut Tomb)",
        "All Gourmet Meals Onboard & Signature Dinners in Cairo"
      ],
      excludedServices: [
        "Egypt Tourist Visa ($25, easily assisted)",
        "Camel ride tips and incidental expenses",
        "International airfare"
      ],
      itinerary: [
        {
          day: 1,
          title: "Cairo Arrival & Pyramid View Mena House",
          detail: "Arrival in Cairo with VIP tarmac assistance. Check-in to historic Marriott Mena House with direct views of the Great Pyramids from your private terrace."
        },
        {
          day: 2,
          title: "Great Pyramids of Giza & The Grand Egyptian Museum",
          detail: "Private sunrise access to Giza Plateau, the Sphinx, and private tour of the new Grand Egyptian Museum housing King Tutankhamun's golden treasures."
        },
        {
          day: 3,
          title: "Flight to Luxor & Embark Nile Cruiser",
          detail: "Short flight to Luxor. Board the prestigious Oberoi Philae luxury cruiser. Afternoon exploration of the majestic Karnak and Luxor Temples."
        },
        {
          day: 4,
          title: "Valley of the Kings & Queens",
          detail: "Cross the Nile to the West Bank. Enter the tomb of Tutankhamun and the stunning painted tomb of Queen Nefertari. Sail towards Edfu."
        },
        {
          day: 5,
          title: "Edfu Horus Temple & Kom Ombo Double Temple",
          detail: "Explore the impeccably preserved Temple of Horus by carriage. Afternoon navigation along the scenic Nile banks to Kom Ombo Temple."
        },
        {
          day: 6,
          title: "Aswan Philae Temple & Felucca Sunset Sail",
          detail: "Arrival in Aswan. Island visit to the Temple of Isis at Philae. Afternoon peaceful sail on a private handcrafted wooden Felucca."
        },
        {
          day: 7,
          title: "Abu Simbel Colossi by Air",
          detail: "Fly by private charter to the colossal sun temples of Ramses II and Nefertari at Abu Simbel. Return to cruise for celebratory captain's gala."
        },
        {
          day: 8,
          title: "Aswan to Cairo & Khan El Khalili Souk",
          detail: "Flight back to Cairo. Twilight walk through the medieval alleys of Khan El Khalili bazaar. Farewell feast at Naguib Mahfouz restaurant."
        },
        {
          day: 9,
          title: "Departure from Cairo",
          detail: "Leisure breakfast and private chauffeur transfer to Cairo International Airport for flight home."
        }
      ]
    }
  ],

  specialOffers: [
    {
      id: "offer-maldives",
      packageId: "maldives-coral-sanctuary",
      title: "Exclusive Maldives Summer Oasis",
      discount: "Save $750",
      discountBadge: "35% OFF",
      originalPrice: 4200,
      salePrice: 3450,
      description: "Complimentary return luxury seaplane transfer + Free upgraded private pool overwater villa + Sunset champagne cruise.",
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 78).toISOString(), // 3 days, 6 hours from now
      spotsLeft: 4,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "offer-dubai",
      packageId: "dubai-royal-mirage",
      title: "Dubai Royal Mirage & Sky Escape",
      discount: "Save $610",
      discountBadge: "25% OFF",
      originalPrice: 3100,
      salePrice: 2490,
      description: "Includes private Maybach airport chauffeurs, complimentary Burj Khalifa Sky lounge access, and Michelin dining credits.",
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 52).toISOString(),
      spotsLeft: 3,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "offer-santorini",
      packageId: "santorini-mykonos-cycladic",
      title: "Santorini Sunset Honeymoon Suite",
      discount: "Save $550",
      discountBadge: "20% OFF",
      originalPrice: 3400,
      salePrice: 2850,
      description: "Guaranteed caldera infinity pool upgrade, complimentary private catamaran sunset cruise with fresh lobster dinner.",
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 94).toISOString(),
      spotsLeft: 2,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=85"
    }
  ],

  testimonials: [
    {
      name: "Victoria & Alexander Sterling",
      role: "Honeymoon Travelers",
      location: "London, United Kingdom",
      destination: "Maldives & Dubai",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote: "Aura crafted the most celestial honeymoon imaginable. From our private seaplane arrival to the underwater dinner where manta rays drifted right above us, every moment was effortless and immaculate. Their 24/7 concierge was always one step ahead."
    },
    {
      name: "Dr. Marcus Vance",
      role: "Luxury Family Vacationer",
      location: "San Francisco, USA",
      destination: "Switzerland Glacier Express",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote: "Taking a family of five through the Swiss Alps could easily be stressful, but Aura turned it into the trip of a lifetime. The Excellence Class train booking, seamless luggage porterage, and the private ski guide in Zermatt were second to none."
    },
    {
      name: "Camille Laurent & Henri Moreau",
      role: "Cultural & Anniversary Tour",
      location: "Paris, France",
      destination: "Turkey & Cappadocia",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      quote: "Our sunrise hot air balloon flight over Cappadocia will remain etched in our memories forever. The cave suite was breathtaking, and our private historian guide in Istanbul brought Ottoman history alive. Absolutely worth every single penny."
    },
    {
      name: "Eleanor & Jonathan Davis",
      role: "VIP Private Expedition",
      location: "Sydney, Australia",
      destination: "Egypt & The Nile Cruise",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      quote: "Having private, after-hours access inside the Great Pyramids and King Tut's tomb was mind-blowing. The Oberoi Philae Nile cruise felt like a private royal yacht. We have already booked our Greece trip with Aura for next spring!"
    }
  ],

  gallery: [
    {
      title: "Overwater Villas, Maldives",
      category: "Tropical",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Hot Air Balloons, Cappadocia",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Oia Sunset Caldera, Santorini",
      category: "Romantic",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Matterhorn Peak, Switzerland",
      category: "Alpine",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Golden Hour Pyramids, Egypt",
      category: "Heritage",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Dubai Marina & Skyline",
      category: "City Luxe",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Positano Cliffside, Italy",
      category: "Coastal",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=85"
    },
    {
      title: "Sacred Temple Water Blessing, Bali",
      category: "Serenity",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85"
    }
  ],

  faqs: [
    {
      category: "Booking & Customization",
      question: "Can I customize the daily itinerary of any featured travel package?",
      answer: "Absolutely. Every itinerary displayed is a curated foundation designed by our destination specialists. Once you submit a booking request or speak with our concierge, we can adjust duration, upgrade suites, add private jet or helicopter charters, include specific culinary reservations, and cater to all personal dietary or leisure preferences."
    },
    {
      category: "Booking & Customization",
      question: "What is your Best Price & Luxury Quality Guarantee?",
      answer: "We partner directly with leading luxury hotel groups, private yacht operators, and high-end local transport providers worldwide. We guarantee that your bespoke luxury experience will include premier perks (room upgrades, early check-in/late check-out, food and beverage credits) that cannot be matched through public booking portals."
    },
    {
      category: "Payments & Protection",
      question: "What are your payment options and deposit policies?",
      answer: "To secure your bespoke luxury itinerary, we require an initial deposit of 25% to 30% depending on the destination and resort requirements. The remaining balance is payable 30 days prior to departure. We accept major international credit cards, wire transfers, and verified cryptocurrency transfers via secure encrypted gateways."
    },
    {
      category: "Payments & Protection",
      question: "What happens if I need to reschedule or cancel my trip?",
      answer: "We understand that plans can change. All our luxury packages come with flexible cancellation policies and complimentary date change windows up to 21 days before departure. We also provide comprehensive luxury travel insurance options covering medical emergencies, trip interruptions, and baggage protection."
    },
    {
      category: "Travel Experience",
      question: "How does 24/7 White-Glove Concierge support work during my trip?",
      answer: "From the moment you touch down until you return home, you have direct 24/7 access to your assigned Senior Concierge Manager via WhatsApp, phone, or email. Whether you wish to arrange a last-minute helicopter transfer, secure a table at a fully-booked Michelin-star restaurant, or modify excursion times, your concierge handles everything instantly."
    },
    {
      category: "Travel Experience",
      question: "Do your packages include international and domestic flights?",
      answer: "Domestic luxury flights, scenic seaplanes, and high-speed rail transfers within the destination are fully included in all packages where noted. For international airfare, our dedicated VIP Aviation Desk can secure first-class and business-class flights at preferential rates, or arrange private charter jets upon request."
    }
  ],

  whyChooseUs: [
    {
      icon: "fa-shield-check",
      title: "Best Price Guarantee",
      subtitle: "Unmatched Luxury Value",
      description: "Direct partnerships with 5-star properties and private suppliers guarantee preferential rates, exclusive complimentary upgrades, and unmatched value."
    },
    {
      icon: "fa-compass-drafting",
      title: "Expert Travel Planning",
      subtitle: "Bespoke Handcrafted Itineraries",
      description: "Every journey is customized by seasoned destination specialists who have personally explored every suite, yacht, and private trail we recommend."
    },
    {
      icon: "fa-headset",
      title: "24/7 Customer Support",
      subtitle: "Personal VIP Concierge Desk",
      description: "Your dedicated travel manager is on standby round the clock before, during, and after your trip, providing seamless white-glove assistance worldwide."
    },
    {
      icon: "fa-gem",
      title: "Customized Travel Packages",
      subtitle: "Tailored to Your Every Wish",
      description: "From private romantic island dinners to private aviation and after-hours museum entries, we turn extraordinary dreams into effortless reality."
    }
  ]
};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.travelData = travelData;
}
