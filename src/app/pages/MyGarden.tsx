import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Plus, Calendar, Droplets, Sun, AlertCircle, TrendingUp, MoreVertical } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function MyGarden() {
  const [selectedView, setSelectedView] = useState<"grid" | "list">("grid");

  const myPlants = [
    {
      id: 1,
      name: "Cherry Tomato",
      variety: "Sweet 100",
      plantedDate: "2025-12-30",
      daysOld: 47,
      location: "Backyard Bed 1",
      health: 95,
      status: "Thriving",
      wateringSchedule: "Every 2 days",
      lastWatered: "Today",
      nextTask: "Fertilize in 3 days",
      image: "https://images.unsplash.com/photo-1764233022038-ab6b2f98404b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGhlYWx0aHl8ZW58MXx8fHwxNzcxMTY3MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Growing vigorously, first flowers appearing",
    },
    {
      id: 2,
      name: "Basil",
      variety: "Genovese",
      plantedDate: "2026-01-15",
      daysOld: 31,
      location: "Kitchen Windowsill",
      health: 88,
      status: "Good",
      wateringSchedule: "Daily",
      lastWatered: "Today",
      nextTask: "Harvest leaves tomorrow",
      image: "https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwaW5kb29yfGVufDF8fHx8MTc3MTE2NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Ready for first harvest",
    },
    {
      id: 3,
      name: "Bell Pepper",
      variety: "California Wonder",
      plantedDate: "2025-12-15",
      daysOld: 62,
      location: "Backyard Bed 2",
      health: 72,
      status: "Needs Attention",
      wateringSchedule: "Every 2 days",
      lastWatered: "Yesterday",
      nextTask: "Check for pests",
      image: "https://images.unsplash.com/photo-1604488943825-f95dc6796ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXIlMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzcxMTIzNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Showing signs of water stress",
    },
    {
      id: 4,
      name: "Lettuce",
      variety: "Buttercrunch",
      plantedDate: "2026-01-20",
      daysOld: 26,
      location: "Container Garden",
      health: 90,
      status: "Thriving",
      wateringSchedule: "Daily",
      lastWatered: "Today",
      nextTask: "Thin seedlings in 2 days",
      image: "https://images.unsplash.com/photo-1736757614152-d500988741db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwdmVnZXRhYmxlJTIwZ2FyZGVufGVufDF8fHx8MTc3MTEyMzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Growing well in cool weather",
    },
    {
      id: 5,
      name: "Cucumber",
      variety: "Marketmore",
      plantedDate: "2026-01-05",
      daysOld: 41,
      location: "Backyard Bed 3",
      health: 85,
      status: "Good",
      wateringSchedule: "Daily",
      lastWatered: "Today",
      nextTask: "Provide trellis support",
      image: "https://images.unsplash.com/photo-1752647026575-c4a024207ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWN1bWJlciUyMHBsYW50JTIwZ3JlZW58ZW58MXx8fHwxNzcxMTY3MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Vines starting to spread",
    },
    {
      id: 6,
      name: "Rosemary",
      variety: "Tuscan Blue",
      plantedDate: "2025-11-10",
      daysOld: 97,
      location: "Herb Garden",
      health: 92,
      status: "Thriving",
      wateringSchedule: "Every 3 days",
      lastWatered: "Yesterday",
      nextTask: "Harvest sprigs as needed",
      image: "https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwaW5kb29yfGVufDF8fHx8MTc3MTE2NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      notes: "Well established, strong aroma",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Thriving":
        return "text-green-600 bg-green-50 border-green-200";
      case "Good":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Needs Attention":
        return "text-orange-600 bg-orange-50 border-orange-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 85) return "bg-green-500";
    if (health >= 70) return "bg-blue-500";
    if (health >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl mb-2 text-gray-900">My Garden</h1>
            <p className="text-gray-600">Manage and monitor all your plants in one place</p>
          </div>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Plant
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Plants</p>
                <p className="text-2xl text-gray-900">{myPlants.length}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Thriving</p>
                <p className="text-2xl text-gray-900">
                  {myPlants.filter(p => p.status === "Thriving").length}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Need Attention</p>
                <p className="text-2xl text-gray-900">
                  {myPlants.filter(p => p.status === "Needs Attention").length}
                </p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Health</p>
                <p className="text-2xl text-gray-900">
                  {Math.round(myPlants.reduce((acc, p) => acc + p.health, 0) / myPlants.length)}%
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedView("grid")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedView === "grid"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setSelectedView("list")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedView === "list"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            List View
          </button>
        </div>

        {/* Plants Grid */}
        {selectedView === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPlants.map((plant) => (
              <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{plant.name}</h3>
                      <p className="text-sm text-gray-600">{plant.variety}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(plant.status)}`}>
                      {plant.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Health</span>
                      <span className="text-gray-900">{plant.health}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getHealthColor(plant.health)}`}
                        style={{ width: `${plant.health}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{plant.daysOld} days old</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">Last watered: {plant.lastWatered}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Next:</strong> {plant.nextTask}
                    </p>
                  </div>

                  <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {myPlants.map((plant) => (
              <Card key={plant.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl text-gray-900 mb-1">{plant.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{plant.variety} • {plant.location}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(plant.status)}`}>
                        {plant.status}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Health</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getHealthColor(plant.health)}`}
                              style={{ width: `${plant.health}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900">{plant.health}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Age</p>
                        <p className="text-gray-900">{plant.daysOld} days</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Last Watered</p>
                        <p className="text-gray-900">{plant.lastWatered}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-800">
                        <strong>Next task:</strong> {plant.nextTask}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
