import { useEffect, Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
const WhatsAppWidget = lazy(() => import("../shared/WhatsAppWidget").then(m => ({ default: m.WhatsAppWidget })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
}
