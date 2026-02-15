import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { PlantLibrary } from "./pages/PlantLibrary";
import { AIAssistant } from "./pages/AIAssistant";
import { MyGarden } from "./pages/MyGarden";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/plants",
    Component: PlantLibrary,
  },
  {
    path: "/ai-assistant",
    Component: AIAssistant,
  },
  {
    path: "/my-garden",
    Component: MyGarden,
  },
]);
