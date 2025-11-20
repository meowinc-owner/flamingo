import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HomePage from "@/react-app/pages/Home";
import SplashScreen from "@/react-app/components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      <div className="scaled-content">
        <Router basename="/flamingo/">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
