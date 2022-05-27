import React from 'react'
import MonthShown from './components/MonthShown';


const CalendarApp = ({handlePrev, handleNext, handleClick, handleApi}) => {
  

  return (
    <>
      <div className='container'>
        <MonthShown 
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleApi={handleApi}
          handleClick={handleClick}
        />
      </div>
      
    
    </>
  )
}

export default CalendarApp