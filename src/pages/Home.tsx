import React from 'react';
import Hero from '../components/Hero';
import CoursesBanner from '../components/CoursesBanner';
import Courses from '../components/Courses';
// Removed About and Testimonials to simplify homepage

const Home: React.FC = () => {
  return (
    <div className="bg-pink-50 overflow-x-hidden">
      <div className="space-y-16 md:space-y-24">
        <Hero />
        <CoursesBanner />
        <Courses />
        {/* Focus the homepage on courses and learning content */}
      </div>
    </div>
  );
};

export default Home;