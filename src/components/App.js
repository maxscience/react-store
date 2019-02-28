import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // take a copy of the existing state (using object spread) so that it's not a mutation
    const fishes = { ...this.state.fishes };
    // add the fish using milliseconds as suffix for the indices
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      // property and value are the same (equivalent to fishes: fishes)
      fishes,
    });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1; // add to the order or update the number
    this.setState({
      order,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
