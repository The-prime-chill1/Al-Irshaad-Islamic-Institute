import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F8FAFD', position: 'relative' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--primary-dark)', fontFamily: 'var(--font-serif)', fontWeight: 700, margin: 0 }}>
            What Our Students & Parents Say
          </h2>
          <div style={{ width: '45px', height: '3px', background: 'var(--accent-gold)', margin: '0.85rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* 3-Column Testimonials Grid matching Screenshot 5 */}
        <div className="grid-3" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
          {testimonialsData.testimonials.slice(0, 3).map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>

        {/* Development Note */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {testimonialsData.disclaimer}
          </span>
        </div>

      </div>
    </section>
  );
}
