import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    headCount: 0,
    tossCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoinBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => {
      let result
      if (tossResult === 0) {
        result = {
          count: prevState.count + 1,
          headCount: prevState.headCount + 1,
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }
      } else {
        result = {
          count: prevState.count + 1,
          tossCount: prevState.tossCount + 1,
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        }
      }

      return result
    })
  }

  render() {
    const {count, headCount, tossCount, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button
            className="toss-coin-btn"
            type="button"
            onClick={this.onClickTossCoinBtn}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tossCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
