"use client";

import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-1 bg-gradient-to-r from-rose-400 to-amber-800"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
