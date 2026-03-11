import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">404</h1>
      <h2 className="text-2xl font-semibold mt-4 text-foreground">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
