import React, { useState, useRef, useEffect } from 'react';
import { IconSearch, IconChevronDown, IconCheck } from './Icons';

export default function SearchableCitySelect({
  cities = [],
  value,
  customValue,
  onChange,
  onCustomChange,
  label = "City / Municipality *"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const wrapperRef = useRef(null);
  const searchInputRef = useRef(null);

  const isCustom = value === 'CUSTOM_OTHER' || (value && !cities.includes(value));

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

  const filteredCities = cities.filter(city => {
    if (!searchQuery.trim()) return true;
    return city.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  const displayCity = isCustom 
    ? (customValue || value || 'Custom City') 
    : (value || (cities.length > 0 ? cities[0] : 'Select City'));

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
        <span style={{ fontWeight: '600', color: '#031122', fontSize: '0.9rem' }}>
          {displayCity}
        </span>

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
          maxHeight: '300px',
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
                placeholder="Search city in selected country..."
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

          {/* List of Cities */}
          <div style={{ overflowY: 'auto', flexGrow: 1, padding: '0.35rem 0' }}>
            {filteredCities.map((cityName) => {
              const isSelected = !isCustom && value === cityName;
              return (
                <div
                  key={cityName}
                  onClick={() => {
                    onChange(cityName);
                    setIsOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 1rem',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(0, 93, 184, 0.08)' : 'transparent',
                    borderLeft: isSelected ? '3px solid #005DB8' : '3px solid transparent',
                    fontSize: '0.88rem',
                    color: '#031122',
                    fontWeight: isSelected ? '700' : '500'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>{cityName}</span>
                  {isSelected && <IconCheck size={14} color="#005DB8" />}
                </div>
              );
            })}

            {/* Custom City Option */}
            <div
              onClick={() => {
                onChange('CUSTOM_OTHER');
                setIsOpen(false);
              }}
              style={{
                borderTop: '1px solid #E2E8F0',
                padding: '0.65rem 1rem',
                cursor: 'pointer',
                color: '#005DB8',
                fontWeight: '700',
                fontSize: '0.85rem',
                background: isCustom ? '#F0F7FF' : 'transparent'
              }}
            >
              + Enter Other / Custom City...
            </div>
          </div>
        </div>
      )}

      {/* If Custom City Selected */}
      {isCustom && (
        <input
          type="text"
          placeholder="Type custom city / municipality name..."
          value={customValue || (value !== 'CUSTOM_OTHER' ? value : '')}
          onChange={(e) => onCustomChange(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1.5px solid #005DB8',
            marginTop: '0.5rem',
            background: '#F0F7FF',
            fontSize: '0.9rem'
          }}
        />
      )}
    </div>
  );
}
