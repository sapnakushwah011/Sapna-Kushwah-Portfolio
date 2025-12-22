import React from "react";
import { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hi, I'm Sapna", "I'm a Developer", "Welcome"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {texts[index]}
    </span>
  );
};

export default TextChange;