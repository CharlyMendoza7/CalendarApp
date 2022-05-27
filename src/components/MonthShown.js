import React, { useContext } from 'react'
import { dayNames } from '../shared/days';
import { MyContext } from '../shared/MyContext';
import EachDay from './EachDay';
import NavMonth from './NavMonth';



const MonthShown = ({handlePrev, handleNext, handleClick, handleApi}) => {


    const myContext = useContext(MyContext);  
    const { month, year } = myContext;


    const date = new Date(year, month); //date is the first day in date of the month received
    const lastDay = new Date(year, month + 1, 0).getDate(); //lastDay is the last day (number) of the month
    const prevLastDay = new Date(year, month, 0).getDate(); //prevLastDay is the last day(number) of previous month
    const firstDay = date.getDay(); //firstDay is the index of the day(sun-sat) when the month starts
    const lastDayMonth = new Date(year, month + 1,0).getDay(); //this gives me the index of what day(mon-sat) is the last day of the month
    const nextDays = 7 - lastDayMonth - 1; //how many days are to ve shown of the next month



    const prevDays = []; //in this array I will push the values of the days of previous month that will appear
    for(let x = firstDay; x > 0; x--){
        prevDays.push(prevLastDay - x + 1);
    }
    
    const numMonths = []; //in this array ) will push all days of the month
    for(let i = 1; i<=lastDay; i++){
        numMonths.push(i);
    }

    const aftDays = []; //in this array I will push the values of the days of next month that will appear
    for( let k = 1; k <= nextDays; k++){
        aftDays.push(k)
    }
    
    


    return (
        <>
        <NavMonth 
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleApi={handleApi}
        />
        <div className='brd'>
            <div>
                <ul className='disp-7'>
                    {
                        dayNames.map( (day,i) => (
                            <li key={i} className='day'>
                                {day}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <ul className='disp-7'>
                    {
                        prevDays.map( (num,i) => (
                            <li 
                                key={i}
                                className='other-months day-num'
                            >
                                {num}
                            </li>                    ))
                    }
                    {
                        numMonths.map( (num,i) => (
                            <EachDay 
                                num={num} 
                                key={i} 
                                handleClick={handleClick}
                            />
                        ))
                    }
                    {
                        aftDays.map( (num,i) => (
                            <li 
                                key={i}
                                className='other-months day-num'
                            >
                                {num}
                            </li>                    ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default MonthShown