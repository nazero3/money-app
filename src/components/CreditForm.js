import { useState } from "react";
import './CreditForm.css'


function CreditForm(){
    const [expense, setExpense] = useState({category: 'essentials', amount: ''});
    const handleExpenseChange = (e) =>{
        setExpense({...expense, [e.target.name]:e.target.value});
    }

    return(
        <div className="container">
            <h2>Enter credit</h2>
            <form >
                <input 
                    type="text"
                    name="amount"
                    placeholder="enter amount"
                    value={expense.amount}
                    onChange={handleExpenseChange}
                />
                
                <button  type="submit">Add Credit</button>
            </form>
        </div>
    )
}

export default CreditForm;