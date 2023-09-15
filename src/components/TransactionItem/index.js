// Write your code here
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {lists, Delete} = this.props
    const {id, input, amount, type, option} = lists
    console.log(type)
    const onDelete = () => {
      Delete(id, option)
    }
    return (
      <li className="b-card">
        <p className="items">{input}</p>
        <p className="items">Rs {amount}</p>
        <p className="items">{type}</p>
        <div>
          <button
            data-testid="delete"
            type="button"
            className="delete-container items"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default TransactionItem
