import { SEOHead } from "@/components/shared/SEOHead";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Warehouse Security",
    excerpt: "Discover how machine learning models are identifying threats in real-time within complex logistics environments.",
    date: "March 10, 2026",
    category: "Technology"
  },
  {
    id: 2,
    title: "Top 5 Benefits of Cloud-Based Surveillance",
    excerpt: "Moving your security infrastructure to the cloud offers unprecedented scalability and remote access.",
    date: "March 5, 2026",
    category: "Best Practices"
  },
  {
    id: 3,
    title: "Reducing Retail Shrinkage with Smart Analytics",
    excerpt: "Retailers are seeing a 40% reduction in loss by implementing advanced video behavior analysis.",
    date: "February 28, 2026",
    category: "Case Study"
  }
];

export default function Blog() {
  return (
    <div className="pt-16 pb-12 min-h-screen bg-background">
      <SEOHead 
        title="Blog | Sporada Secure" 
        description="Stay updated with the latest in AI surveillance, e-surveillance, and video analytics from the experts at Sporada Secure."
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Newspaper className="w-3 h-3" />
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Security Insights & News</h1>
          <p className="text-muted-foreground text-lg">
            Expert perspectives on the future of e-surveillance, AI integration, and cost-effective security solutions for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary uppercase">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-muted-foreground">Receive the latest security whitepapers and industry trends directly in your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-64"
            />
            <Button size="lg">Subscribe Now</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
