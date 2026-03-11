import { Home, ScanSearch, Building2, ShieldCheck, Zap, MessageSquare } from "lucide-react";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="w-5 h-5" />
  },
  {
    name: "Solutions",
    path: "/solutions",
    icon: <ScanSearch className="w-5 h-5" />
  },
  {
    name: "Industries",
    path: "/industries",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    name: "About Us",
    path: "/about",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    name: "Blog",
    path: "/blog",
    icon: <Zap className="w-5 h-5" />
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <MessageSquare className="w-5 h-5" />
  }
];
