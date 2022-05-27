import React, { useContext, useEffect, useReducer } from 'react'
import ADD_TYPE from '../shared/ACTIONS.JS';
import { eventsReducer } from '../shared/eventsReducer';
import { MyContext } from '../shared/MyContext';




//init for my reducer
const init = () => {
        
    return JSON.parse(localStorage.getItem('todos')) || [];

}



const EachHour = ({h, num}) => {

    const myContext = useContext(MyContext);  
    const { month, year} = myContext;

    const [ todos, dispatch ] = useReducer(eventsReducer, [], init);

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify( todos ));
    
    }, [todos])


    const handleClick = () => {

        const event = prompt('Enter your event')
        if(event.length < 3){
            alert('try again')
            return;
        }
        const completeEvent = {
            year,
            month,
            day: num,
            hour: h,
            event
        }
        
        dispatch({
            type: ADD_TYPE,
            payload: completeEvent
        })
    }

    //array of the list for thar day
    const x =  todos.filter( (todo) => (todo.year === year && todo.month === month && todo.day === num ));
    // console.log(x.hour)


    return (
        <div className='row mt-1'>
                    <h4 className='hour col-10'>
            {h} <ul>
                {
                    
                    x.map( (situation,i) => (
                        // console.log(h)
                        // console.log(h)
                        (h.includes(situation.hour)) ? <li key={i}> {situation.event} </li> : null
                        
                    ))
                    
                }
            </ul>
            
        </h4>
        <button className='btn btn-success col-2 ml-1 ' onClick={handleClick}>+</button>

        </div>
    )
}

export default EachHour