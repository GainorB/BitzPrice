import React, { Component } from 'react';

class Prices extends Component {
  state = {
    currency: 'USD'
  };

  render() {
    const { currency } = this.state;

    const list = (
      <li className="list-group-item">
        Bitcoin rate for {this.props.bpi[currency].description}:{' '}
        <span className="badge badge-primary">{this.props.bpi[currency].code}</span>{' '}
        <strong>{this.props.bpi[currency].rate}</strong>{' '}
      </li>
    );

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          className="form-control"
          onChange={e => this.setState({ currency: e.target.value })}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
