import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const NotFound = () => (
  <PageTransition>
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <motion.div
        className="absolute top-1/3 right-[20%] w-72 h-72 bg-primary/15 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[15%] w-60 h-60 bg-teal-glow/10 rounded-full blur-[100px]"
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-heading font-black text-gradient-emerald mb-4">404</h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-heading font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/">
            <Button size="lg" className="btn-premium-lg text-primary-foreground font-heading font-semibold border-0">
              <ArrowLeft size={18} /> Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </PageTransition>
);

export default NotFound;
