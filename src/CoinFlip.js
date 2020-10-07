import React, { Component } from 'react';
import './CoinFlip.css';
import Coin from './Coin';

class CoinFlip extends Component {
  // add default props

  static defaultProps = {
    faces: ['heads', 'tails'],
  };
  constructor(props) {
    super(props);
    this.state = {
      headsOrTails: 'heads',
      heads: 0,
      tails: 0,
      flipping: false,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    const rand = Math.floor(Math.random() * 2);

    this.setState({ flipping: true, headsOrTails: '' });

    setTimeout(() => {
      this.setState({ headsOrTails: this.props.faces[rand] });
      if (this.props.faces[rand] === this.props.faces[0]) {
        this.setState((prevState) => ({ heads: prevState.heads + 1 }));
      } else {
        this.setState((prevState) => ({ tails: prevState.tails + 1 }));
      }
    }, 100);
    setTimeout(() => {
      this.setState({ flipping: false });
    }, 2000);
  }
  render() {
    return (
      <div className='CoinFlip'>
        <Coin side={this.state.headsOrTails} />
        <p>
          Out of {this.state.heads + this.state.tails} flips, there have been{' '}
          {this.state.heads} heads and {this.state.tails} tails
        </p>
        <button onClick={this.handleFlip} disabled={this.state.flipping}>
          {this.state.flipping ? 'Flipping! 😜' : 'Click to Flip'}
        </button>
      </div>
    );
  }
}
export default CoinFlip;
