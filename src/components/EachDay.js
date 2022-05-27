import React, { useContext, useEffect, useState } from 'react'
import { currDate, currMonth, currYear } from '../shared/date';
import { MyContext } from '../shared/MyContext';
import MyModal from './MyModal';

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const EachDay = ({num, handleClick}) => {

    // const tds = JSON.parse(localStorage.getItem('todos')) || [];


    // console.log("im back")

    
    const myContext = useContext(MyContext);
    const { month, year} = myContext;

    // modal state
    const [active, setActive] = useState(false)



    // show or hide my modal
    const handleModal = () => {
        setActive(!active);
    }

        
    

    // const eStorage = JSON?.parse(localStorage.getItem('todos'));
    //array for the list of each day
    const x =  todos?.filter( (todo) => (todo.year === year && todo.month === month && todo.day === num )) || [];
    const l = x[0] || []; // for only showing one todo and then clicking the modal opens and will appear other todos

    


    //array for the list of each day
    // const x =  eStorage.filter( (todo) => (todo.year === year && todo.month === month && todo.day === num )) || [];
    // const l = x[0] || []; // for only showing one todo and then clicking the modal opens and will appear other todos
     

    return (
        <>
            {
                (num === currDate) && (month === currMonth) && (year === currYear) 
                    ? 
                    <li 
                        className='today day-num'
                        onDoubleClick={handleModal}
                    > {num} 
                        <div className='container'>
                            <ul className='container events-ul'>
                            
                                {
                                    (l.length < 1)
                                    ?
                                    null
                                    :

                                    <p><span>double click to add/see more</span>{l.event}...</p>
                                }
                            </ul>
                        </div>
                        <MyModal num={num} active={active} handleModal={handleModal} handleClick={handleClick} month={month} year={year}/>

                    </li>   
                    : 
                    <li 
                        className='day-num'
                        onDoubleClick={handleModal}
                        
                    > {num } 
                    <div className='container'>
                        <div className='container'>
                            
                                {
                                    (l.length < 1)
                                    ?
                                    null
                                    :
                                    <p><span>double click to add/see more</span>{l.event}...</p>
                                    
                                    
                                }

                        </div>

                    </div>
                    <MyModal num={num} active={active} handleModal={handleModal} month={month} year={year}/>
                    </li>
            }

        </>
    )
}

export default EachDay