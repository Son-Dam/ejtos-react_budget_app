import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency,dispatch} = useContext(AppContext);
    
    const updateBudget = (val) => {
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Currency:&nbsp; <select className = "btn btn-success" value={currency} onChange = {(event) => updateBudget(event.target.value)}>
                    <option value = "$">$ Dollar</option>
                    <option value = "£">£ Pound</option>
                    <option value = "€">€ Euro</option>
                    <option value = "₹">₹ Ruppee</option>
                </select>
                </span>
            
        </div>
    );
};

export default Currency;
