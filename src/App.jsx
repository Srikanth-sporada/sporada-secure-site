import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Industries = lazy(() => import("@/pages/Industries"));
const IndustryDetail = lazy(() => import("@/pages/IndustryDetail"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const SolutionDetail = lazy(() => import("@/pages/SolutionDetail"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
