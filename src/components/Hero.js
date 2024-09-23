import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Dr. Neha Chitale</h1>
        <p>Your trusted physiotherapist</p>
        <a href="#contact" className="btn">Book Appointment</a>
      </div>
    </section>
  );
}

export default Hero;
