import React from 'react';
import '../../styles/slider.scss';


export const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-prev">&#8249;</div>

      <div className="slider-list">
        <div className="slider-card">...</div>
        <div className="slider-card">...</div>
        <div className="slider-card">...</div>
      </div>

      <div className="slider-next">&#8250;</div>

      <div className="slider-indicator">7/15</div>
    </div>
  )
}
