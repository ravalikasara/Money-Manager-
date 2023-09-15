import {Component} from 'react'

import './index.css'

import {v4 as ids} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    list: [],
    input: '',
    amount: '',
    option: 'INCOME',
    isAdded: false,
    incomeAmount: 0,
    expenseAmount: 0,
  }

  input = event => {
    this.setState({input: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  option = event => {
    this.setState({option: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {input, amount, option} = this.state
    const item = transactionTypeOptions.filter(each => each.optionId === option)
    const {displayText} = item[0]
    console.log(displayText)
    const obj = {
      id: ids(),
      input,
      amount,
      type: displayText,
      option,
    }

    if (option === 'INCOME') {
      this.setState(prev => ({
        list: [...prev.list, obj],
        input: '',
        amount: '',
        isAdded: true,
        incomeAmount: prev.incomeAmount + Number(amount),
      }))
    } else {
      this.setState(prev => ({
        list: [...prev.list, obj],
        input: '',
        amount: '',
        isAdded: true,
        expenseAmount: prev.expenseAmount + Number(amount),
      }))
    }
  }

  onDelete = (uid, option) => {
    const {list} = this.state
    const element = list.filter(each => each.id === uid)
    const {amount} = element[0]

    if (option === 'INCOME') {
      this.setState(prev => ({
        list: prev.list.filter(each => each.id !== uid),
        incomeAmount: prev.incomeAmount - Number(amount),
      }))
    } else {
      this.setState(prev => ({
        list: prev.list.filter(each => each.id !== uid),
        expenseAmount: prev.expenseAmount - Number(amount),
      }))
    }
  }

  render() {
    const {
      list,
      input,
      amount,
      option,
      isAdded,
      incomeAmount,
      expenseAmount,
    } = this.state
    const balance = incomeAmount - expenseAmount

    return (
      <div className="bg-container">
        <div className="top-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="manager">Money Manager</span>
          </p>
        </div>
        <ul className="ul-lists">
          <MoneyDetails
            key="90"
            list={transactionTypeOptions}
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
            balance={balance}
          />
        </ul>
        <div className="bottom-card">
          <div className="input-card">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">Title</label>
              <br />
              <input
                onChange={this.input}
                id="title"
                className="input"
                type="text"
                placeholder="Title"
                value={input}
              />
              <br />
              <label htmlFor="amount">Amount</label>
              <br />
              <input
                onChange={this.amount}
                id="amount"
                className="input"
                type="text"
                placeholder="Amount"
                value={amount}
              />
              <br />
              <label htmlFor="selection">Type</label>
              <br />
              <select onChange={this.option} className="selection input">
                <option value={transactionTypeOptions[0].optionId}>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <br />
            </form>
            <button type="submit" onClick={this.onAdd} className="btn">
              Add
            </button>
          </div>
          <div className="input-card">
            <h1>History</h1>

            <ul>
              <li className="b-card">
                <p className="titles">Title</p>
                <p className="titles">Amount</p>
                <p className="titles">Type</p>
              </li>
              {isAdded
                ? list.map(each => (
                    <TransactionItem
                      key={each.id}
                      lists={each}
                      Delete={this.onDelete}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
