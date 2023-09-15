// Write your code here
import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  render() {
    const {key, list, balance, incomeAmount, expenseAmount} = this.props

    return (
      <>
        <li className="list bg-1">
          <img
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="img"
          />
          <div>
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {balance}</p>
          </div>
        </li>
        <li className="list bg-2">
          <img
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="img"
          />
          <div>
            <p>Your {list[0].optionId} </p>
            <p data-testid="incomeAmount">Rs {incomeAmount}</p>
          </div>
        </li>
        <li className="list bg-3">
          <img
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="img"
          />
          <div>
            <p>Your {list[1].optionId}</p>
            <p data-testid="expensesAmount">Rs {expenseAmount}</p>
          </div>
        </li>
      </>
    )
  }
}
export default MoneyDetails
