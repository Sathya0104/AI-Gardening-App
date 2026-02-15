import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { 
  Droplets, 
  Sun, 
  ThermometerSun, 
  Wind, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Leaf
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Dashboard() {
  const gardenStats = [
    { label: "Active Plants", value: "12", icon: Leaf, color: "text-green-600", bg: "bg-green-100" },
    { label: "Ready to Harvest", value: "3", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Tasks Today", value: "5", icon: Calendar, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Health Alerts", value: "1", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-100" },
  ];

  const weather = {
    temp: "24°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    wind: "12 km/h",
  };

  const tasks = [
    { id: 1, task: "Water tomatoes", priority: "High", time: "Morning" },
    { id: 2, task: "Fertilize herbs", priority: "Medium", time: "Afternoon" },
    { id: 3, task: "Check pepper plants for pests", priority: "High", time: "Evening" },
    { id: 4, task: "Harvest lettuce", priority: "Medium", time: "Morning" },
    { id: 5, task: "Prune cucumber vines", priority: "Low", time: "Anytime" },
  ];

  const recentPlants = [
    {
      name: "Cherry Tomato",
      status: "Thriving",
      daysOld: 45,
      health: 95,
      image: "https://images.unsplash.com/photo-1764233022038-ab6b2f98404b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBwbGFudCUyMGhlYWx0aHl8ZW58MXx8fHwxNzcxMTY3MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Basil",
      status: "Good",
      daysOld: 30,
      health: 88,
      image: "https://images.unsplash.com/photo-1553275991-b6ba99f234e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiJTIwZ2FyZGVuJTIwaW5kb29yfGVufDF8fHx8MTc3MTE2NzAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Bell Pepper",
      status: "Needs Attention",
      daysOld: 60,
      health: 72,
      image: "https://images.unsplash.com/photo-1604488943825-f95dc6796ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXIlMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzcxMTIzNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50";
      case "Medium":
        return "text-orange-600 bg-orange-50";
      case "Low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Thriving":
        return "text-green-600 bg-green-50";
      case "Good":
        return "text-blue-600 bg-blue-50";
      case "Needs Attention":
        return "text-orange-600 bg-orange-50";
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
          <h1 className="text-3xl mb-2 text-gray-900">Welcome back, Gardener! 🌱</h1>
          <p className="text-gray-600">Here's what's happening in your garden today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {gardenStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Weather Widget */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 text-gray-900">Today's Weather</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <ThermometerSun className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Temperature</p>
                    <p className="text-gray-900">{weather.temp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Condition</p>
                    <p className="text-sm text-gray-900">{weather.condition}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Humidity</p>
                    <p className="text-gray-900">{weather.humidity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Wind className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Wind</p>
                    <p className="text-gray-900">{weather.wind}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  ☀️ Great weather for outdoor gardening! Perfect time to work on your plants.
                </p>
              </div>
            </Card>

            {/* Your Plants */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 text-gray-900">Your Plants</h2>
              <div className="space-y-4">
                {recentPlants.map((plant, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{plant.name}</h3>
                      <p className="text-sm text-gray-600">{plant.daysOld} days old</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusColor(plant.status)}`}>
                        {plant.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">Health: {plant.health}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Tasks */}
            <Card className="p-6">
              <h2 className="text-xl mb-4 text-gray-900">Today's Tasks</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3 rounded-lg border border-gray-200 hover:border-green-300 transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <input
                        type="checkbox"
                        className="mt-1 rounded border-gray-300"
                      />
                      <div className="flex-1">
                        <p className="text-gray-900">{task.task}</p>
                        <p className="text-sm text-gray-600">{task.time}</p>
                      </div>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Tip */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-gray-900">AI Garden Tip</h3>
              </div>
              <p className="text-sm text-gray-700">
                Your bell pepper plants show signs of mild water stress. Consider increasing 
                watering frequency slightly and adding mulch to retain moisture.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
