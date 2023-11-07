import { useState } from "react";


function SalaryForm(){
    const [expense, setExpense] = useState({category: 'essentials', amount: ''});
    const handleExpenseChange = (e) =>{
        setExpense({...expense, [e.target.name]:e.target.value});
    }

    return(
        <div>
            <h2>Enter salary</h2>
            <form>
                <input
                    type="text"
                    name="amount"
                    placeholder="enter amount"
                    value={expense.amount}
                    onChange={handleExpenseChange}
                />
                
                <button type="submit">Add Salary</button>
            </form>
        </div>
    )
}

export default SalaryForm;