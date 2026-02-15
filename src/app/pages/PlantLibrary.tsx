import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Search, Filter, Plus } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function PlantLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Vegetables", "Herbs", "Fruits", "Flowers"];

  const plants = [
    {
      id: 1,
      name: "Cherry Tomato",
      scientificName: "Solanum lycopersicum",
      category: "Vegetables",
      difficulty: "Easy",
      sunlight: "Full Sun",
      water: "Moderate",
      harvestTime: "60-80 days",
      image: "https://images.unsplash.com/photo-1764233022038-ab6b2f98404b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGhlYWx0aHl8ZW58MXx8fHwxNzcxMTY3MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Sweet, bite-sized tomatoes perfect for snacking and salads.",
    },
    {
      id: 2,
      name: "Basil",
      scientificName: "Ocimum basilicum",
      category: "Herbs",
      difficulty: "Easy",
      sunlight: "Full Sun",
      water: "Regular",
      harvestTime: "30-60 days",
      image: "https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwaW5kb29yfGVufDF8fHx8MTc3MTE2NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Aromatic herb essential for Italian cuisine and pesto.",
    },
    {
      id: 3,
      name: "Lettuce",
      scientificName: "Lactuca sativa",
      category: "Vegetables",
      difficulty: "Easy",
      sunlight: "Partial Shade",
      water: "Regular",
      harvestTime: "30-45 days",
      image: "https://images.unsplash.com/photo-1736757614152-d500988741db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc3MTEyMzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Fresh, crisp greens for salads and sandwiches.",
    },
    {
      id: 4,
      name: "Bell Pepper",
      scientificName: "Capsicum annuum",
      category: "Vegetables",
      difficulty: "Medium",
      sunlight: "Full Sun",
      water: "Moderate",
      harvestTime: "60-90 days",
      image: "https://images.unsplash.com/photo-1604488943825-f95dc6796ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXIlMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzcxMTIzNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Sweet, colorful peppers rich in vitamins.",
    },
    {
      id: 5,
      name: "Cucumber",
      scientificName: "Cucumis sativus",
      category: "Vegetables",
      difficulty: "Easy",
      sunlight: "Full Sun",
      water: "High",
      harvestTime: "50-70 days",
      image: "https://images.unsplash.com/photo-1752647026575-c4a024207ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWN1bWJlciUyMHBsYW50JTIwZ3JlZW58ZW58MXx8fHwxNzcxMTY3MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Refreshing vegetables perfect for salads and pickling.",
    },
    {
      id: 6,
      name: "Mint",
      scientificName: "Mentha",
      category: "Herbs",
      difficulty: "Easy",
      sunlight: "Partial Shade",
      water: "Regular",
      harvestTime: "30-40 days",
      image: "https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwaW5kb29yfGVufDF8fHx8MTc3MTE2NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Fragrant herb for teas, desserts, and garnishes.",
    },
  ];

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50";
      case "Medium":
        return "text-orange-600 bg-orange-50";
      case "Hard":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-gray-900">Plant Library</h1>
          <p className="text-gray-600">Discover and learn about plants perfect for your garden</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <Plus className="w-5 h-5" />
              Add Custom Plant
            </button>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-green-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl text-gray-900 mb-1">{plant.name}</h3>
                    <p className="text-sm text-gray-600 italic">{plant.scientificName}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </span>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">{plant.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">☀️ Sunlight:</span>
                    <span className="text-gray-900">{plant.sunlight}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">💧 Water:</span>
                    <span className="text-gray-900">{plant.water}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">⏰ Harvest:</span>
                    <span className="text-gray-900">{plant.harvestTime}</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Add to My Garden
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No plants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
