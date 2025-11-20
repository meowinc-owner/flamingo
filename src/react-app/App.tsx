import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HomePage from "@/react-app/pages/Home";
import SplashScreen from "@/react-app/components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <div className="scaled-content">
          <Router basename="/flamingo/">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}
