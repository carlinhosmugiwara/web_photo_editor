import React from 'react'

export default function Slider({min, max, value, handleChange}) {
    return (
        // creating the range slider to specify the amount of the effect
        <div className="slider-container">
            <input 
            type="range" className="slider" 
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            />

        </div>
    )
}
