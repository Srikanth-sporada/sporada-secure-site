import { Shield, Briefcase, Info, Mail, LayoutGrid } from "lucide-react";

export const navLinks = [
  {
    name: "Solutions",
    path: "/solutions",
    icon: <Shield className="w-4 h-4" />
  },
  {
    name: "Industries",
    path: "/industries",
    icon: <Briefcase className="w-4 h-4" />
  },
  {
    name: "About Us",
    path: "/about",
    icon: <Info className="w-4 h-4" />
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Mail className="w-4 h-4" />
  }
];
