import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ padding: '8rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-ivory)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <span className="badge-gold" style={{ marginBottom: '1rem' }}>404 Error</span>
        <h1 style={{ color: 'var(--primary)', fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-sm">
            Return to Homepage
          </Link>
          <Link to="/programs" className="btn btn-outline btn-sm">
            Browse Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
