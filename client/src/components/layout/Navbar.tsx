import { Home, BookOpen, User, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useLocation } from "wouter";

const navItems = [
  { name: "Home", url: "#/", icon: Home },
  { name: "About", url: "#/about", icon: User },
  { name: "Contact", url: "#/contact", icon: Mail },
];

export function Navbar() {
  return (
    <NavBar items={navItems} />
  );
}