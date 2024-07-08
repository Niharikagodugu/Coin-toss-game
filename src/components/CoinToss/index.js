// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const tossResults = Math.floor(Math.random() * 2)
    this.setState(preState => {
      return {
        totalCount: preState.totalCount + 1,
        headCount:
          tossResults === 0 ? preState.headCount + 1 : preState.headCount,
        tailCount:
          tossResults === 1 ? preState.tailCount + 1 : preState.tailCount,
        imageUrl:
          tossResults === 0
            ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }
    })
  }

  render() {
    const {totalCount, headCount, tailCount, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="game-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img className="coin-image" src={imageUrl} alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="counters">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
