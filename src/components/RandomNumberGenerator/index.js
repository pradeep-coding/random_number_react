import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateRandomNumber = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({number: newNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
