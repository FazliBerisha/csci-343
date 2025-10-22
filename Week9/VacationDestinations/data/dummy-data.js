import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "Italy", "#009246"), // Italian Green
  new Country("c2", "Japan", "#BC002D"), // Japanese Red
  new Country("c3", "France", "#0055A4"), // French Blue
  new Country("c4", "Greece", "#0D5EAF"), // Greek Blue
  new Country("c5", "Thailand", "#A51931"), // Thai Red
  new Country("c6", "Spain", "#AA151B"), // Spanish Red
  new Country("c7", "Australia", "#00008B"), // Australian Blue
  new Country("c8", "Iceland", "#02529C"), // Icelandic Blue
  new Country("c9", "Peru", "#D91023"), // Peruvian Red
  new Country("c10", "Egypt", "#CE1126"), // Egyptian Red
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Colosseum",
    2500,
    80,
    4.8,
    "An iconic symbol of Imperial Rome, the Colosseum is an ancient amphitheater that once hosted gladiatorial contests and public spectacles. A must-see architectural marvel.",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
  ),
  new Destination(
    "d2",
    "c1",
    "Venice Canals",
    3200,
    421,
    4.7,
    "Experience the romantic waterways of Venice, with gondola rides through historic canals, stunning architecture, and beautiful bridges at every turn.",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800"
  ),
  new Destination(
    "d3",
    "c2",
    "Mount Fuji",
    2800,
    null,
    4.9,
    "Japan's tallest mountain and an active volcano, Mount Fuji is a sacred symbol of Japan offering breathtaking views and hiking opportunities.",
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800"
  ),
  new Destination(
    "d4",
    "c2",
    "Kyoto Temples",
    2400,
    794,
    4.8,
    "Explore ancient temples and shrines in Japan's cultural heart, featuring stunning zen gardens, traditional architecture, and peaceful bamboo forests.",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
  ),
  new Destination(
    "d5",
    "c3",
    "Eiffel Tower",
    3500,
    1889,
    4.6,
    "The iconic iron lattice tower in Paris, offering spectacular city views and a symbol of French engineering and romance.",
    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800"
  ),
  new Destination(
    "d6",
    "c3",
    "French Riviera",
    4200,
    null,
    4.7,
    "The glamorous Mediterranean coastline featuring beautiful beaches, luxury resorts, and charming coastal towns like Nice and Cannes.",
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800"
  ),
  new Destination(
    "d7",
    "c4",
    "Santorini",
    3800,
    null,
    4.9,
    "A stunning Greek island known for white-washed buildings with blue domes, dramatic cliffs, and spectacular sunsets over the Aegean Sea.",
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
  ),
  new Destination(
    "d8",
    "c4",
    "Acropolis of Athens",
    2200,
    447,
    4.8,
    "Ancient citadel containing the remains of several historically significant buildings, including the Parthenon, overlooking the city of Athens.",
    "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800"
  ),
  new Destination(
    "d9",
    "c5",
    "Phi Phi Islands",
    1800,
    null,
    4.7,
    "Tropical paradise featuring crystal-clear waters, limestone cliffs, vibrant coral reefs, and pristine beaches perfect for snorkeling and diving.",
    "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800"
  ),
  new Destination(
    "d10",
    "c5",
    "Grand Palace Bangkok",
    1500,
    1782,
    4.6,
    "A complex of ornate buildings that served as the official residence of Thai Kings, featuring stunning Thai architecture and the sacred Emerald Buddha.",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800"
  ),
  new Destination(
    "d11",
    "c6",
    "Sagrada Familia",
    2600,
    1882,
    4.9,
    "Gaudí's masterpiece basilica in Barcelona, a UNESCO World Heritage site featuring extraordinary architecture that blends Gothic and Art Nouveau styles.",
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800"
  ),
  new Destination(
    "d12",
    "c6",
    "Alhambra Granada",
    2300,
    889,
    4.8,
    "A stunning palace and fortress complex showcasing Islamic architecture, beautiful gardens, and intricate decorative details from Moorish Spain.",
    "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800"
  ),
  new Destination(
    "d13",
    "c7",
    "Great Barrier Reef",
    4500,
    null,
    4.9,
    "The world's largest coral reef system with incredible marine biodiversity, offering world-class diving and snorkeling experiences.",
    "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=800"
  ),
  new Destination(
    "d14",
    "c7",
    "Sydney Opera House",
    3200,
    1973,
    4.7,
    "An architectural icon with distinctive sail-like design, hosting world-class performances with stunning harbor views.",
    "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=800"
  ),
  new Destination(
    "d15",
    "c8",
    "Blue Lagoon",
    3800,
    1976,
    4.6,
    "A geothermal spa with milky-blue mineral-rich waters surrounded by black lava fields, offering a unique and relaxing experience.",
    "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800"
  ),
  new Destination(
    "d16",
    "c8",
    "Northern Lights Tours",
    4200,
    null,
    4.9,
    "Witness the magical Aurora Borealis dancing across Arctic skies in one of the best locations on Earth for this natural phenomenon.",
    "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800"
  ),
  new Destination(
    "d17",
    "c9",
    "Machu Picchu",
    3400,
    1450,
    5.0,
    "Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders of the World with breathtaking mountain scenery.",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800"
  ),
  new Destination(
    "d18",
    "c9",
    "Lake Titicaca",
    2100,
    null,
    4.5,
    "The highest navigable lake in the world, home to floating islands and traditional communities preserving ancient Andean cultures.",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800"
  ),
  new Destination(
    "d19",
    "c10",
    "Pyramids of Giza",
    2400,
    -2560,
    4.8,
    "Ancient wonders of the world, these massive stone structures have stood for over 4,500 years as tombs for pharaohs, guarded by the Great Sphinx.",
    "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800"
  ),
  new Destination(
    "d20",
    "c10",
    "Nile River Cruise",
    2800,
    null,
    4.7,
    "Sail along the historic Nile River, visiting ancient temples and tombs while experiencing the timeless beauty of Egypt's landscapes.",
    "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800"
  ),
];
