// Write your code here
import {useState} from 'react'
import './index.css'
const CreditCard = () => {
  const [shownu, setShownu] = useState('')
  const [showna, setShowna] = useState('')

  const text = event => {
    setShowna(event.target.value)
  }
  const number = event => {
    setShownu(event.target.value)
  }
  return (
    <div className="main">
      <div className="left">
        <h1>Credit Card</h1>
        <img
          src="https://assets.ccbp.in/frontend/hooks/credit-card-bg.png"
          alt="card"
        />
        <p className="number">{shownu}</p>
        <p className="name">{showna.toUpperCase()}</p>
        <p className="heading">CardHolder Name</p>
      </div>
      <div className="right">
        <h3>Payment Method</h3>
        <input
          type="text"
          placeHolder="Card number"
          value={shownu}
          onChange={number}
        />
        <input
          type="text"
          placeHolder="CardHolder name"
          value={showna}
          onChange={text}
        />
      </div>
    </div>
  )
}
export default CreditCard
