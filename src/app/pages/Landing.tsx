import { Link } from "react-router";
import { Sprout, Brain, Calendar, Droplets, Sun, LineChart, Shield, Smartphone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Landing() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized recommendations based on your garden conditions and climate",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated reminders for watering, fertilizing, and harvesting",
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Optimize water usage with intelligent irrigation tracking",
    },
    {
      icon: Sun,
      title: "Weather Integration",
      description: "Real-time weather updates to protect and nurture your plants",
    },
    {
      icon: LineChart,
      title: "Growth Tracking",
      description: "Monitor your plants' progress with detailed analytics",
    },
    {
      icon: Shield,
      title: "Disease Detection",
      description: "Early identification of plant diseases and pest problems",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b border-green-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">TerraGrow</span>
                <span className="text-xs text-gray-600">Grow Fresh Grow Smart</span>
              </div>
            </div>
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-6">
              AI-Powered Home Gardening
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              Grow Fresh<br />
              <span className="text-green-600">Grow Smart</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete AI gardening assistant for healthier plants, better harvests, 
              and a thriving home garden. Perfect for beginners and experts alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg"
              >
                Start Gardening
              </Link>
              <Link
                to="/plants"
                className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-lg"
              >
                Explore Plants
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739633829573-c68cb790973f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZ2FyZGVuJTIwdmVnZXRhYmxlcyUyMGZyZXNofGVufDF8fHx8MTc3MTE2NzAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Home garden"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and AI-powered features for your gardening journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">How TerraGrow Works</h2>
            <p className="text-xl text-gray-600">Simple steps to your dream garden</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Add Your Plants",
                description: "Scan or search for plants to add to your digital garden",
              },
              {
                step: "2",
                title: "Get AI Recommendations",
                description: "Receive personalized care instructions based on your location and conditions",
              },
              {
                step: "3",
                title: "Track & Grow",
                description: "Monitor progress, get reminders, and watch your garden thrive",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smartphone className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl mb-4 text-gray-900">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of home gardeners growing smarter with TerraGrow
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            Start Your Garden Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">TerraGrow</span>
                <span className="text-xs text-gray-400">Grow Fresh Grow Smart</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 TerraGrow. MBA Project Prototype.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
