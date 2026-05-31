// All copy below is original, written for this demo project.

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Business Class", href: "/business-class" },
  { label: "Offers", href: "/offers" },
  { label: "How to Book", href: "/how-to-book" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Gift Vouchers", href: "/gift-vouchers" },
  { label: "My Trips", href: "/my-trips" },
];

export const slugify = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const airlines = ["Emirates", "Qatar Airways", "Singapore", "Cathay Pacific", "Turkish", "ANA"];

export const airlineFares = [
  { airline: "Emirates", feature: "Luxurious private suites, gourmet dining, onboard bar", price: 2000 },
  { airline: "Singapore Airlines", feature: "“Book-the-Cook” menu, luxurious bedding, in-suite bar", price: 1500 },
  { airline: "Turkish Airlines", feature: "Flying-chef service, lie-flat seats, generous lounges", price: 1500 },
  { airline: "Cathay Pacific", feature: "Reverse-herringbone seats, exceptional wine selection", price: 1800 },
  { airline: "Etihad Airways", feature: "“The Residence” suite, in-flight chefs", price: 5000 },
  { airline: "British Airways", feature: "Club Suite with privacy doors, Elemis spa products", price: 1500 },
  { airline: "Qatar Airways", feature: "Qsuite double beds, dine-on-demand service", price: 1700 },
  { airline: "Air France", feature: "La Première cabin, exclusive lounges, fine dining", price: 2000 },
];

export const stats = [
  { value: "1.6M+", label: "Clients Served" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "$2,050", label: "Average Saving / Ticket" },
  { value: "500+", label: "Live Travel Experts" },
];

export const trustCards = [
  {
    title: "A Personal Travel Manager",
    body: "Skip the search engines. You are paired with a dedicated flight designer who learns your preferences and handles every detail of your itinerary.",
  },
  {
    title: "Privately Negotiated Fares",
    body: "Our contracted rates with 70+ global carriers are reserved for offline sale only — which is exactly how we unlock fares you won't find online.",
  },
  {
    title: "After-Hours Support, Always",
    body: "Plans change. Our specialists are reachable on weekends and holidays, so there is always an expert on hand from booking until you return home.",
  },
];

export const deals = [
  { city: "London", region: "United Kingdom", from: 1919, old: 4680, save: 59, gradient: "from-[#1E417E] to-[#0A1A33]" },
  { city: "Paris", region: "France", from: 1789, old: 4590, save: 61, gradient: "from-[#6D4D8B] to-[#241433]" },
  { city: "Rome", region: "Italy", from: 1869, old: 6230, save: 70, gradient: "from-[#9A6B3F] to-[#2A1A10]" },
  { city: "Dubai", region: "United Arab Emirates", from: 2019, old: 8749, save: 70, gradient: "from-[#0E5C63] to-[#06222A]" },
  { city: "Tokyo", region: "Japan", from: 2359, old: 10222, save: 76, gradient: "from-[#8B2F46] to-[#2A0F18]" },
  { city: "Singapore", region: "Singapore", from: 2289, old: 9120, save: 74, gradient: "from-[#1F6E5A] to-[#0A2A22]" },
  { city: "Sydney", region: "Australia", from: 3019, old: 13082, save: 76, gradient: "from-[#2B5C8A] to-[#0B2034]" },
  { city: "Delhi", region: "India", from: 2689, old: 11652, save: 76, gradient: "from-[#A2682E] to-[#2E1A0C]" },
];

export const services = [
  {
    title: "Fares That Match Your Budget",
    body: "Affordable comfort with agency discounts of up to 77% on business class and 80% on international first class airfares.",
  },
  {
    title: "Everything Beyond the Flight",
    body: "Cabin upgrades, last-minute bookings, car hire, hotels, baggage protection and personalised seat and meal selection.",
  },
  {
    title: "Complex & Multi-City Routes",
    body: "Your travel agent maps out intricate, multi-leg itineraries end to end — so a complicated trip feels effortless.",
  },
  {
    title: "Premium Travel Management",
    body: "A team of 500+ agents, round-the-clock support and one dedicated expert who owns your journey from start to finish.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Get in Touch With an Expert",
    body: "Request a free quote online or call us 24/7. Tell us where you want to go and when.",
  },
  {
    n: "02",
    title: "Receive Tailored Options",
    body: "Detailed itineraries and the best-matching fares arrive in your inbox within minutes.",
  },
  {
    n: "03",
    title: "Choose and Travel",
    body: "Confirm seats, pay securely online and receive your e-tickets by email. Then simply enjoy the flight.",
  },
];

export const benefits = [
  { icon: "Headset", title: "24/7 Customer Support", body: "Your travel manager is reachable any time by phone or email — for changes, rebookings or after-hours help." },
  { icon: "Tag", title: "Private Rates & Guaranteed Savings", body: "Exclusive contracts mean deep discounts of up to 70% off on tailor-made and complex premium itineraries." },
  { icon: "Shield", title: "100% Safe Booking", body: "Trip protection safeguards your ticket investment. Whatever happens, your funds stay covered and secure." },
  { icon: "Users", title: "Seasoned Travel Experts", body: "Our team brings 15+ years of industry experience. Hand us your trip and we do all the legwork." },
  { icon: "Award", title: "Credible & Reliable", body: "Accredited, award-winning and proudly rated excellent by tens of thousands of happy travelers." },
  { icon: "Globe", title: "We Fly Worldwide", body: "Any carrier, any international route, departing from across the US. Not sure where to go? Just ask." },
];

export const reviews = [
  { name: "Margaret R.", route: "New York → Rome", text: "My travel manager found a business class fare thousands below anything I saw online. Seamless from quote to boarding." },
  { name: "David L.", route: "San Francisco → Tokyo", text: "Booked a complex multi-city trip in one phone call. Every connection was perfect and the savings were real." },
  { name: "Priya S.", route: "Chicago → Delhi", text: "I was skeptical at first, but the lie-flat seats cost less than premium economy elsewhere. I won't book any other way." },
  { name: "Thomas W.", route: "Boston → London", text: "A real person who actually understood what I needed. Quick, professional and genuinely a better price." },
  { name: "Elena M.", route: "Miami → Dubai", text: "After-hours support saved my trip when plans shifted last minute. Calm, fast and incredibly helpful." },
  { name: "James K.", route: "Los Angeles → Singapore", text: "First class for a price I could justify. The concierge handled seats and meals before I even asked." },
];

export const faqs = [
  {
    q: "How do I find affordable business class flights?",
    a: "Submit a quick request with your destination and dates, or call to speak with an agent. We compare our privately negotiated fares against published prices to find you the best value.",
  },
  {
    q: "How much can I really save?",
    a: "On average, our clients save 50–70% on business class fares. A route that lists at $6,800 online might be closer to $1,900 through our contracted rates.",
  },
  {
    q: "What kinds of deals are available?",
    a: "Round-trip, one-way, multi-city, last-minute and 2-for-1 fares, plus corporate travel. Upgrades from economy to business and from business to first are also available.",
  },
  {
    q: "Can anyone fly business class with you?",
    a: "Absolutely. Most of our clients travel for leisure. We simply make premium cabins accessible by sharing fares that are reserved for offline sale.",
  },
  {
    q: "Do you offer discounted first class fares?",
    a: "Yes — discounted international first class with savings of up to 80%, plus upgrades from business to first and select domestic first class fares within the US.",
  },
  {
    q: "What is included with a business class ticket?",
    a: "Typically priority check-in, lounge access, spacious lie-flat seats, generous baggage allowance and elevated dining — all standard on the routes we book.",
  },
  {
    q: "Why is flying business class worth it?",
    a: "On long-haul flights, lie-flat seats and superior service mean you arrive rested. With our pricing, that comfort no longer comes at a premium you can't justify.",
  },
  {
    q: "How long have you been in business?",
    a: "We have operated as an official airline retailer for over a decade, building direct relationships with 70+ carriers to negotiate fares unavailable to the public.",
  },
];

export const footerColumns = {
  "Top Countries": [
    "United States", "India", "Italy", "France", "United Kingdom",
    "Greece", "Germany", "Turkey", "Spain", "United Arab Emirates",
  ],
  "Top Cities": [
    "Paris", "London", "Athens", "Rome", "Istanbul",
    "Dubai", "Delhi", "Tel Aviv", "Mumbai", "Frankfurt",
  ],
  "Top Airlines": [
    "Etihad Airways", "Singapore Airlines", "Air India", "American Airlines",
    "Asiana Airlines", "Qatar Airways", "Turkish Airlines",
  ],
};



export const cabins = ["Business Class", "First Class", "Premium Economy"];

export const regions = [
  { name: "Europe", slug: "europe", from: 1629, gradient: "from-[#1E417E] to-[#0A1A33]", cities: ["London", "Paris", "Rome", "Athens", "Barcelona", "Frankfurt"], blurb: "Lie-flat comfort to the great capitals of Europe, from London and Paris to Rome and Athens." },
  { name: "Asia", slug: "asia", from: 2359, gradient: "from-[#8B2F46] to-[#2A0F18]", cities: ["Tokyo", "Singapore", "Bangkok", "Hong Kong", "Seoul", "Bali"], blurb: "Award-winning Asian carriers and premium suites across Tokyo, Singapore, Bangkok and beyond." },
  { name: "Middle East", slug: "middle-east", from: 2019, gradient: "from-[#0E5C63] to-[#06222A]", cities: ["Dubai", "Doha", "Abu Dhabi", "Istanbul", "Tel Aviv", "Riyadh"], blurb: "The world's most luxurious cabins to Dubai, Doha, Abu Dhabi and the wider Gulf." },
  { name: "Africa", slug: "africa", from: 2229, gradient: "from-[#7A5C2E] to-[#241A0C]", cities: ["Cairo", "Nairobi", "Cape Town", "Johannesburg", "Casablanca", "Accra"], blurb: "Comfortable long-haul routes to Cairo, Cape Town, Nairobi and across the continent." },
  { name: "India & ISC", slug: "india", from: 2689, gradient: "from-[#A2682E] to-[#2E1A0C]", cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Colombo"], blurb: "Direct and one-stop premium fares to Delhi, Mumbai, Bangalore and the subcontinent." },
  { name: "Oceania", slug: "oceania", from: 3019, gradient: "from-[#2B5C8A] to-[#0B2034]", cities: ["Sydney", "Melbourne", "Auckland", "Perth", "Brisbane", "Nadi"], blurb: "Arrive rested after the long haul to Sydney, Melbourne, Auckland and the South Pacific." },
  { name: "Latin America", slug: "latin-america", from: 1675, gradient: "from-[#1F6E5A] to-[#0A2A22]", cities: ["Mexico City", "Cancun", "Rio de Janeiro", "Buenos Aires", "Lima", "Bogota"], blurb: "Premium cabins to Mexico City, Rio, Buenos Aires and the highlights of Latin America." },
  { name: "Russia & CIS", slug: "russia-cis", from: 2225, gradient: "from-[#6D4D8B] to-[#241433]", cities: ["Tbilisi", "Yerevan", "Baku", "Almaty", "Tashkent", "Astana"], blurb: "Connected premium routes to Tbilisi, Yerevan, Baku, Almaty and Central Asia." },
];

export const milestones = [
  { year: "2012–2014", title: "The Beginning", text: "Founded on a simple idea — make premium cabins genuinely accessible. Within two years we became an official airline retailer with exclusive carrier agreements." },
  { year: "2015–2016", title: "Building Trust", text: "Earned top accreditation with an A+ rating and joined the airline reporting network. Our client base more than doubled as word spread." },
  { year: "2017–2019", title: "Rapid Growth", text: "Demand for affordable business class surged. We crossed 180,000 travelers served and joined the leading society of travel advisors." },
  { year: "2020–2021", title: "Resilience", text: "Through a turbulent period for the industry we doubled down on service, keeping partners close and travelers cared for until they were home." },
  { year: "2022–2023", title: "Industry Leadership", text: "Recognized with multiple awards for luxury air travel and ticketing, our team grew past 400 dedicated agents." },
  { year: "2024 & Beyond", title: "Thriving Today", text: "Over 1.5 million travelers served, 70+ airline partners and a commitment to making luxury travel both accessible and effortless." },
];

export const awards = [
  { title: "Best Luxury Travel Agency", org: "Luxury Lifestyle Awards", year: "2021" },
  { title: "Best Luxury Airline Ticket Agency", org: "Luxury Lifestyle Awards", year: "2022" },
  { title: "Best Luxury Airline Ticket Agency", org: "Luxury Lifestyle Awards", year: "2023" },
  { title: "North America's Leading Travel Agency", org: "World Travel Awards", year: "2023" },
  { title: "Best Luxury Airline Ticket Agency", org: "World Travel Awards", year: "2024" },
  { title: "Best First Class Experience", org: "Travel & Tourism Awards", year: "2023" },
];

export const accreditations = [
  { name: "A+ Accredited Business", text: "Proud holder of the highest accreditation grade from the Better Business Bureau, reflecting a consistent commitment to ethical, trustworthy service." },
  { name: "Society of Travel Advisors", text: "An active member of the largest association of travel professionals, upholding the industry's highest standards of practice and care." },
  { name: "Airline Reporting Accredited", text: "Accredited to process airline transactions securely and efficiently, meeting the rigorous standards set for ticketing agencies." },
];

export const team = [
  { name: "Luigi", role: "Travel Manager" },
  { name: "Anthony", role: "Travel Supervisor" },
  { name: "Alisher", role: "Travel Manager" },
  { name: "Melissa", role: "Travel Supervisor" },
  { name: "Matthew", role: "Travel Manager" },
];

export const giftAmounts = [250, 500, 1000, 2500];

export const contact = {
  phone: "855-555-0199",
  phoneLink: "tel:+18555550199",
  email: "hello@aeroluxtravel.example",
  hours: "Live experts available 24 / 7, 365 days a year",
  address: "1 Market Street, Suite 3600, San Francisco, CA 94105",
};


export const posts = [
  { category: "Cabin Guides", title: "How Business Class Lie-Flat Seats Differ by Airline", excerpt: "Seat pitch, privacy doors and bedding vary widely between carriers. Here is what actually changes your sleep on a long-haul flight.", author: "Alisher K.", date: "May 12, 2025", readMins: 6, gradient: "from-[#1E417E] to-[#0A1A33]" },
  { category: "Saving Strategies", title: "Why the Cheapest Business Class Fares Are Never Online", excerpt: "The deepest discounts come from contracts reserved for offline sale. We explain how privately negotiated fares stay off the search engines.", author: "Melissa T.", date: "Apr 28, 2025", readMins: 5, gradient: "from-[#1F6E5A] to-[#0A2A22]" },
  { category: "Destinations", title: "Five Long-Haul Routes Worth Flying Premium", excerpt: "From Sydney to Singapore, these are the journeys where a lie-flat seat pays for itself the moment you arrive rested.", author: "Anthony R.", date: "Apr 9, 2025", readMins: 7, gradient: "from-[#8B2F46] to-[#2A0F18]" },
  { category: "Travel Tips", title: "A Guide to Arriving Rested After 14 Hours in the Air", excerpt: "Hydration, seat timing and a simple onboard routine our travel managers swear by for beating jet lag on ultra-long hauls.", author: "Luigi M.", date: "Mar 22, 2025", readMins: 4, gradient: "from-[#9A6B3F] to-[#2A1A10]" },
  { category: "First Class", title: "Inside the World's Most Private First Class Suites", excerpt: "Sliding doors, double beds and personal wardrobes — a look at the cabins redefining what flying at the front feels like.", author: "Matthew D.", date: "Mar 3, 2025", readMins: 8, gradient: "from-[#6D4D8B] to-[#241433]" },
  { category: "How to Book", title: "Planning a Round-the-World Multi-City Itinerary", excerpt: "Complex routes look daunting but follow a logic. Here is how a dedicated expert maps a multi-leg trip end to end.", author: "Alisher K.", date: "Feb 14, 2025", readMins: 6, gradient: "from-[#0E5C63] to-[#06222A]" },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export const destinationList = regions.flatMap((r) =>
  r.cities.map((c) => {
    const d = deals.find((x) => x.city === c);
    return {
      city: c,
      region: r.name,
      slug: slugify(c),
      gradient: d?.gradient || r.gradient,
      from: d?.from || r.from,
      old: d?.old,
      save: d?.save,
    };
  })
);