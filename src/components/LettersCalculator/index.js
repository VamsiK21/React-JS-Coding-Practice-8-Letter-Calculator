// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    const {value} = event.target

    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state

    const counter = searchInput.length

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="input-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="label-container">
              <label htmlFor="name" className="sub-heading">
                Enter the phrase
              </label>
              <input
                onChange={this.onChangeSearchInput}
                className="input-style"
                type="text"
                placeholder="Enter the phrase"
                value={searchInput}
                id="name"
              />
            </div>

            <p className="button">No.of letters: {counter}</p>
          </div>

          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
