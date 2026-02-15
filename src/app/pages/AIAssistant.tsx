import { Navigation } from "../components/Navigation";
import { Card } from "../components/ui/card";
import { Send, Sparkles, Camera, HelpCircle } from "lucide-react";
import { useState } from "react";

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your TerraGrow AI assistant. I can help you with plant care, disease identification, gardening tips, and more. How can I assist you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickQuestions = [
    "Why are my tomato leaves turning yellow?",
    "When should I water my basil?",
    "How to prevent pests naturally?",
    "Best fertilizer for vegetables?",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: getAIResponse(inputValue),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInputValue("");
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("yellow") && lowerQuestion.includes("leaves")) {
      return "Yellow leaves on tomato plants can indicate several issues:\n\n1. **Overwatering or Underwatering**: Check soil moisture - it should be consistently moist but not waterlogged.\n\n2. **Nitrogen Deficiency**: Consider adding nitrogen-rich fertilizer or compost.\n\n3. **Disease**: Look for other symptoms like spots or wilting. Early blight can cause yellowing.\n\n4. **Natural Aging**: Lower leaves naturally yellow as the plant matures.\n\nRecommendation: Check your watering schedule first, then inspect for pests or disease signs. Apply balanced fertilizer if needed.";
    }
    
    if (lowerQuestion.includes("water") && lowerQuestion.includes("basil")) {
      return "Basil watering guide:\n\n• **Frequency**: Water when the top 1-2 inches of soil feels dry\n• **Amount**: Water deeply until it drains from the bottom\n• **Best Time**: Morning watering is ideal\n• **Indoor vs Outdoor**: Indoor basil needs less frequent watering\n\n**Signs of Overwatering**: Yellowing leaves, wilting despite wet soil\n**Signs of Underwatering**: Drooping, dry crispy leaves\n\nPro tip: Basil prefers consistent moisture but good drainage. Use well-draining soil and don't let it sit in water!";
    }
    
    if (lowerQuestion.includes("pest")) {
      return "Natural pest prevention strategies:\n\n1. **Companion Planting**: Plant marigolds, basil, and garlic to repel pests\n\n2. **Neem Oil Spray**: Mix 2 tbsp neem oil + 1 tsp dish soap in 1 gallon water\n\n3. **Diatomaceous Earth**: Sprinkle around plants to deter crawling insects\n\n4. **Encourage Beneficial Insects**: Attract ladybugs and lacewings with flowers\n\n5. **Regular Inspection**: Check plants weekly for early pest detection\n\n6. **Proper Spacing**: Good air circulation prevents many pest issues\n\nRemember: Healthy plants are more resistant to pests!";
    }
    
    if (lowerQuestion.includes("fertilizer")) {
      return "Best fertilizers for vegetable gardens:\n\n**Organic Options** (Recommended):\n• **Compost**: All-purpose, improves soil structure\n• **Fish Emulsion**: High in nitrogen, great for leafy greens\n• **Bone Meal**: High phosphorus for root development\n• **Worm Castings**: Gentle, nutrient-rich\n\n**Synthetic Options**:\n• **10-10-10 Balanced**: Good all-purpose choice\n• **5-10-10**: For fruiting vegetables\n\n**Application Tips**:\n• Fertilize every 2-4 weeks during growing season\n• Water before and after applying\n• Follow package directions - more isn't better!\n\nFor tomatoes and peppers, I recommend starting with compost and adding fish emulsion every 2 weeks.";
    }
    
    return "That's a great question! Based on your query, I recommend:\n\n1. Check the specific care requirements for your plant species\n2. Monitor soil moisture and adjust watering as needed\n3. Ensure proper sunlight exposure\n4. Look for signs of pests or disease\n\nWould you like more specific guidance? Feel free to ask about a particular plant or issue, and I'll provide detailed recommendations!";
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">AI Garden Assistant</h1>
          <p className="text-gray-600">Get instant expert advice for all your gardening questions</p>
        </div>

        {/* Chat Container */}
        <Card className="mb-6 overflow-hidden">
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">TerraGrow AI</span>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2 mb-3">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm">
                <Camera className="w-4 h-4" />
                Upload Image
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about gardening..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Card>

        {/* Quick Questions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg text-gray-900">Quick Questions</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all text-left text-gray-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Instant Answers</h3>
            <p className="text-sm text-gray-600">Get immediate responses to your gardening questions</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Image Analysis</h3>
            <p className="text-sm text-gray-600">Upload photos for plant and disease identification</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Expert Advice</h3>
            <p className="text-sm text-gray-600">AI-powered recommendations from garden experts</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
