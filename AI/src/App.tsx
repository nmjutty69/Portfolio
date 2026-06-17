/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Socials } from './components/sections/Socials';
import { Career } from './components/sections/Career';
import { Testimonials as Skills } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen text-[#111] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Socials />
      <Career />
      <Skills />
      <Contact />
    </div>
  );
}
