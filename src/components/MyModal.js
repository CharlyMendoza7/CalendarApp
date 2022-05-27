import React, { useContext, useEffect, useReducer } from 'react';
import { Button, Modal } from 'react-bootstrap';
import UPDATE_TYPE from '../shared/ACTIONS.JS';
import { datesReducer } from '../shared/datesReducer';
import { hours } from '../shared/hours';
import { MyContext } from '../shared/MyContext';
import EachHour from './EachHour';

const init = () => {
        
    return JSON.parse(localStorage.getItem('actualPage')) || [];

}

const MyModal = ({num, active, handleModal}) => {
    const myContext = useContext(MyContext);
  
    const { month, year} = myContext;

    const [state, dispatch] = useReducer(datesReducer, [], init);

    useEffect(() => {
      
        

    
    }, [state])
    

    const handleUpdate = () => {

        alert('Saving...')
        const m = JSON.parse(localStorage.getItem('actualPage')).month;
        const y = JSON.parse(localStorage.getItem('actualPage')).year;

        const actualPageDate = {
            month: m,
            year: y,
        }

        dispatch({
            type: UPDATE_TYPE,
            payload: actualPageDate
        });

        handleModal();

        document.location.reload(true);
        
    }

    return (
        <>
            <Modal show={active}>
                <Modal.Header>
                    {num}/{month+1}/{year}
                    <button className='btn btn-danger' onClick={handleModal}>x</button>
                </Modal.Header>
                    <Modal.Body>
                    <div id='h'>
                                    {
                                        hours.map( (h,i) => (
                                            
                                            <EachHour h={h} key={i} num={num}/>

                                        ))
                                    }
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleUpdate} className='btn btn-primary'>Aceptar</button>
                        <Button onClick={handleModal}>Cancelar</Button>
                    </Modal.Footer>
            </Modal>
        </>
  )
}

export default MyModal