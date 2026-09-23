/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { Portfolio } from './components/Portfolio';
import { Philosophy } from './components/Philosophy';
import { TransformationSlider } from './components/TransformationSlider';
import { Education } from './components/Education';
import { Techniques } from './components/Techniques';
import { About } from './components/About';
import { InstagramFeed } from './components/InstagramFeed';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#faf8f5] selection:bg-[#c5a880]/30 selection:text-white">
      {/* Desktop Luxury Custom Cursor */}
      <CustomCursor />

      {/* Top Floating Navigation */}
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Cinematic Magazine Cover Hero */}
        <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 2. Editorial Artist Introduction & Statement */}
        <IntroStatement />

        {/* 3. Signature Works Portfolio Gallery */}
        <Portfolio onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 4. Signature Color Philosophy */}
        <Philosophy />

        {/* 5. Tactile Before / After Transformation Slider */}
        <TransformationSlider />

        {/* 6. Education / Redken Artist Masterclasses */}
        <Education onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 7. Advanced Color Techniques & Chemistry */}
        <Techniques onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 8. The Artist Behind The Color: Biography */}
        <About onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 9. Live Instagram Archive */}
        <InstagramFeed />

        {/* 10. Consultation & Booking */}
        <BookingContact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Appointment Modal */}
      {isBookingModalOpen && (
        <BookingContact
          isOpenModal={true}
          onCloseModal={() => setIsBookingModalOpen(false)}
        />
      )}
    </div>
  );
}
