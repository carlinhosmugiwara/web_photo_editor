import React, { useState } from 'react';
import './App.css';
import Slider from './Slider'
import SideBar from './SideBar'

const EFFECTS_AVAILABLE = [
 
  {
    name: 'Brightness' ,
    property: 'brightness', //Make sure to use the right css name for the effect
    
    // the initial value, the min and the maximum
    value: 100,
    range:{
      min: 0,
      max: 200
    },
    unit: '%' // it needs to be in % because it is in css
  },

  {
    name: 'Contrast' ,
    property: 'contrast',
    value: 100,
    range:{
      min: 0,
      max: 200
    },
    unit: '%'
  },

  {
    name: 'Saturation' ,
    property: 'saturate', //Make sure to use the right css name for the effect
    value: 100,
    range:{
      min: 0,
      max: 200
    },
    unit: '%' 
  },

  {
    name: 'Grayscale' ,
    property: 'grayscale', //Make sure to spell it with an "a"
    value: 0,
    range:{
      min: 0,
      max: 100
    },
    unit: '%' 
  },

  {
    name: 'Sepia' ,
    property: 'sepia', //Make sure to use the right css name for the effect
    value: 0,
    range:{
      min: 0,
      max: 100
    },
    unit: '%' 
  },

  {
    name: 'Hue Roatate' ,
    property: 'hue-rotate', // Make sure to use the right css name for the effect
    value: 0,
    range:{
      min: 0,
      max: 360 // maximum is 360 degrees
    },
    unit: 'deg' // don't forget to put "deg"
  },

  {
    name: 'Blur' ,
    property: 'blur', 
    value: 0,
    range:{
      min: 0,
      max: 15
    },
    unit: 'px' 
  }

]


function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(EFFECTS_AVAILABLE)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({target}){
    setOptions(prevOptions => {
      return prevOptions.map((option, index) =>{
        if (index !== selectedOptionIndex) return option
        return {...option, value : target.value}
      }) 
    })
  }

  function getImageStyle(){
    const filters = options.map(option => { // Maspping through every option to transform to css properties
      return `${option.property}(${option.value}${option.unit})`
    })

    return {filter: filters.join(' ')}

  }

  return (
  <div className="container">
    
    <div className="main-image" style={getImageStyle()} /> 
    <div className="sidebar">
      {options.map((option, index) =>{

        return (
        <SideBar
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={() => setSelectedOptionIndex(index)}
        />
        )
      })}
    </div>
    <Slider 
      min={selectedOption.range.min} // Just calling the variables from EFFECTS_AVAILABLE
      max={selectedOption.range.max}
      value={selectedOption.value}
      handleChange={handleSliderChange}
    /> 

  </div>

  )
}

export default App;
