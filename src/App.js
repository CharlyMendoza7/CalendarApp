import React, { useReducer } from 'react'
import CalendarApp from './CalendarApp'
import NEXT_TYPE from './shared/ACTIONS.JS'
import PREV_TYPE  from './shared/ACTIONS.JS'
import { currMonth, currYear } from './shared/date'
import { datesReducer } from './shared/datesReducer'
import { MyContext } from './shared/MyContext'


//prettier
//eslint
const actualMonth = JSON.parse(localStorage.getItem('actualPage')) || null;
const actualYear = JSON.parse(localStorage.getItem('actualPage')) || null;
// console.log("actual month");
// console.log(actualMonth.length)

const initialState = {
    month: (actualMonth != null ? actualMonth.month : currMonth),
    year: (actualYear != null ? actualYear.year : currYear),
}

// console.log("initialstate month")
// console.log(initialState.month)

const App = () => {

    
    const [state, dispatch] = useReducer(datesReducer, initialState);

    const { month, year } = state;



    const handlePrev = () => {
        // if month is 0 it is january and the month before is december
        if(month === 0){
            const m = {
                month: 11,
                year: year - 1
            }
            dispatch({
                type: PREV_TYPE,
                payload: m
            });
            return;
        }
        const m = {
            month: month - 1,
            year
        }
        // console.log(m)
        dispatch({
            type: PREV_TYPE,
            payload: m
        });

      }

      const handleNext = () => {
        // if month is 11 it is december so next month is 0, index 0 in my array

        if(month === 11){
            const m = {
                month: 0,
                year: year + 1
            }
            dispatch({
                type: NEXT_TYPE,
                payload: m
            });
            return;
        }
        const m = {
            month: month + 1,
            year
        }
        dispatch({
            type: NEXT_TYPE,
            payload: m
        });
    }



    return (

        <MyContext.Provider value={state}>
            <CalendarApp handlePrev={handlePrev} handleNext={handleNext}/>
        </MyContext.Provider>


    )
}

export default App