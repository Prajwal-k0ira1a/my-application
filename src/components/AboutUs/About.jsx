import React, { useState, useEffect } from 'react';
import aboutImg from '../Assets/about.jpg';

const About = () => {
  const staticText = "We provide goods like";
  const rotatingWords = ["kirana", "stationery", "many more"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];

    if (charIndex <= currentWord.length) {
      const timeout = setTimeout(() => {
        setAnimatedText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 1200);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentWordIndex]);

  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-base-200 to-base-100 flex items-center justify-center px-8 py-24">
      <div className="w-full max-w-[1800px] bg-white dark:bg-gray-900 shadow-2xl rounded-3xl flex flex-col lg:flex-row overflow-hidden min-h-[95vh]">
        
        {/* Left: Image Section */}
        <div className="lg:w-1/2 h-[600px] lg:h-auto">
          <img
            src={aboutImg}
            alt="About Bhawana Kirana"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content Section */}
        <div className="lg:w-1/2 p-10 flex flex-col justify-center space-y-8">
          <h1 className="text-5xl font-bold text-primary dark:text-white">About Us</h1>

          {/* Typewriter effect */}
          <p className="text-2xl text-gray-700 min-h-[2.5rem]">
            {staticText}{" "}
            <span className="text-primary font-semibold">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <p className="text-gray-600 text-lg">
            Bhawana Kirana is committed to serving our community with top-quality products.
            We specialize in essential daily goods and believe in putting customers first.
          </p>

        

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary btn-lg hover:bg-primary/80 hover:brightness-110 transition-colors duration-200">Meet the Team</button>
            <button className="btn btn-outline btn-lg bg-white bg-opacity-80 dark:bg-gray-100 dark:text-gray-900 border-primary border-2 hover:bg-primary hover:text-white transition-colors duration-200">Our Story</button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-gray-500">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
