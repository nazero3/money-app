import styles from'./PaymentForm.css'
import { useState } from "react";


function PaymentForm() {
    const [expense, setExpense] = useState({ category: 'essentials', amount: '' });
    const handleExpenseChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h2>Enter payment</h2>
            <form className={styles.container}>
                <label>amount
                    <input
                        type="text"
                        name="amount"
                        placeholder="enter amount"
                        value={expense.amount}
                        onChange={handleExpenseChange}
                    />
                </label>
                <br />
                <label>select category 
                    <br/>
                    <select name="category" value={expense.category} onChange={handleExpenseChange}>
                        <option value="essentials">Essentials</option>
                        <option value="luxury">Luxury</option>
                        <option value="savings">Savings</option>
                    </select>
                </label>
                <br />
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default PaymentForm;