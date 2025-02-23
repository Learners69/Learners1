import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { 
  Home as HomeIcon, 
  BookOpen, 
  Settings, 
  User, 
  Mail, 
  HelpCircle 
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { ThemeToggle } from "@/components/ui/theme-toggle";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const dockTabs = [
    { title: "Home", icon: HomeIcon },
    { title: "Courses", icon: BookOpen },
    { type: "separator" as const },
    { title: "Profile", icon: User },
    { title: "Settings", icon: Settings },
    { title: "Help", icon: HelpCircle },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <Router />
        <Footer />
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <ExpandableTabs tabs={dockTabs} className="bg-background/95 border-neutral-200 dark:border-neutral-800 backdrop-blur-lg" />
        </div>
        <ThemeToggle />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;