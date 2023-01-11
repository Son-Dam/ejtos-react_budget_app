import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency,budget,dispatch,expenses } = useContext(AppContext);
    
    const updateBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost)
        },0)
        
        if(val>20000) {
            alert("The budget value cannot exceed "+currency+"20000")
            return
        }
        else if(val<totalExpenses){
            alert("The budget value cannot be lower than spending")
            return            
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step ="10"
                        style={{  size: 10}}
                        onInput={(event) => updateBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};

export default Budget;
