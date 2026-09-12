import React, { useState, useRef, useEffect } from 'react';
import { countriesData, getFlagEmoji } from '../../data/countriesData';
import { IconSearch, IconChevronDown, IconCheck } from './Icons';

export default function SearchableCountrySelect({ 
  value, 
  onChange, 
  label = "Country of Residence *",
  placeholder = "Search country by name or code..."
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const wrapperRef = useRef(null);
  const searchInputRef = useRef(null);

  const selectedCountry = countriesData.find(
    c => c.name.toLowerCase() === (value || '').toLowerCase()
  ) || countriesData[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 50);
    }
    if (!isOpen) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredCountries = countriesData.filter(c => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const cleanQ = q.replace(/^\+/, '');
    const cleanDial = c.dialCode.replace(/^\+/, '');
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      (cleanQ.length > 0 && cleanDial.startsWith(cleanQ)) ||
      c.iso.toLowerCase().includes(q)
    );
  });

  const handleSelect = (country) => {
    onChange(country);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      {label && (
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#334155', marginBottom: '0.35rem' }}>
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          border: isOpen ? '2px solid #005DB8' : '1.5px solid #CBD5E1',
          background: '#FFFFFF',
          cursor: 'pointer',
          textAlign: 'left',
          boxShadow: isOpen ? '0 0 0 3px rgba(0, 93, 184, 0.15)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>
            {getFlagEmoji(selectedCountry.iso)}
          </span>
          <span style={{ fontWeight: '700', color: '#031122', fontSize: '0.92rem' }}>
            {selectedCountry.name}
          </span>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#005DB8',
            background: 'rgba(0, 93, 184, 0.08)',
            padding: '0.15rem 0.5rem',
            borderRadius: '6px'
          }}>
            {selectedCountry.dialCode}
          </span>
        </div>

        <IconChevronDown 
          size={14} 
          color="#64748B" 
          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'none' }} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          right: 0,
          zIndex: 99999,
          background: '#FFFFFF',
          borderRadius: '14px',
          border: '1.5px solid #CBD5E1',
          boxShadow: '0 15px 35px rgba(3, 17, 34, 0.18)',
          overflow: 'hidden',
          maxHeight: '320px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Search Input Bar */}
          <div style={{ padding: '0.65rem', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '10px', color: '#94A3B8', display: 'flex' }}>
                <IconSearch size={15} color="#94A3B8" />
              </span>
              <input
                ref={searchInputRef}
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 0.75rem 0.55rem 2.1rem',
                  borderRadius: '8px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '0.85rem',
                  outline: 'none',
                  background: '#FFFFFF'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    color: '#94A3B8'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* List of Countries */}
          <div style={{ overflowY: 'auto', flexGrow: 1, padding: '0.35rem 0' }}>
            {filteredCountries.length === 0 ? (
              <div style={{ padding: '1.5rem 1rem', textAlign: 'center', color: '#64748B', fontSize: '0.85rem' }}>
                No country matching "{searchQuery}"
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = selectedCountry.name.toLowerCase() === c.name.toLowerCase();
                return (
                  <div
                    key={c.name}
                    onClick={() => handleSelect(c)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      cursor: 'pointer',
                      background: isSelected ? 'rgba(0, 93, 184, 0.08)' : 'transparent',
                      borderLeft: isSelected ? '3px solid #005DB8' : '3px solid transparent',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = '#F8FAFC';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>
                        {getFlagEmoji(c.iso)}
                      </span>
                      <span style={{ fontWeight: isSelected ? '700' : '500', color: '#031122', fontSize: '0.88rem' }}>
                        {c.name}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        color: isSelected ? '#005DB8' : '#64748B',
                        background: isSelected ? '#FFFFFF' : '#F1F5F9',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px'
                      }}>
                        {c.dialCode}
                      </span>
                      {isSelected && <IconCheck size={15} color="#005DB8" />}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
