import React, { useContext, useReducer, useEffect } from 'react';
import { months } from '../shared/months';
import { eventsReducer } from '../shared/eventsReducer';
import { MyContext } from '../shared/MyContext';
import ADD_TYPE from '../shared/ACTIONS.JS';


const init = () => {
        
  return JSON.parse(localStorage.getItem('todos')) || [];

}

const NavMonth = ({handlePrev, handleNext}) => {

  const myContext = useContext(MyContext);
  const { month, year } = myContext;

  const [ todos, dispatch ] = useReducer(eventsReducer, [], init);

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify( todos ));
        localStorage.setItem('actualPage', JSON.stringify( { year, month} ));
    
    }, [todos,year,month])

  const getJSON = async(url) => {
    const resp = await fetch(url);
    const result = await resp.json();

    const obj = result.map( r => {
        return {
            yearNum: new Date(`${r.time}`).getFullYear(),
            monthNum: new Date(`${r.time}`).getMonth(),
            dayNum: new Date(`${r.time}`).getDate(),
            hourNum: new Date(`${r.time}`).getHours()+5,
            event: r.name

        }
    });

    return obj;
}

const handleApi = (e) => {
  e.preventDefault();
  const url = e.target.jsonE.value;
  const evs = getJSON(url);
  evs.then( events => {


    events.map( event => (
      dispatch({
        type: ADD_TYPE,
        payload: {
          year: event.yearNum,
          month: event.monthNum,
          day: event.dayNum,
          hour: event.hourNum,
          event: event.event
        }
      })
    ))
  })
  // setTimeout(() => {
  // }, 2000);
  document.location.reload(true)

  
}
  
  return (
    <nav className='navbar row'>
        <div className='d-inline-flex'>
            <button onClick={handlePrev} className='btn btn-sm btn-outline-secondary topButtons'>
              Back
            </button>
            <button onClick={handleNext} className='btn btn-sm btn-outline-secondary topButtons '>
              Next
            </button>
        </div>
        <h2 className='myMonth'>{year} {months[month]}</h2>
        <form onSubmit={handleApi}>
          <div className="input-group mb-3">
            <input type="text" name='jsonE' className="form-control" placeholder="Enter your api url..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button type='submit' className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </form>
    </nav>
  )
}

export default NavMonth