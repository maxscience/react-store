import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    //take a copy of the existing state (using object spread) so that it's not a mutation
    const fishes = { ...this.state.fishes };
    //add the fish using milliseconds as suffix for the indices
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes object to state
    this.setState({
      //property and value are the same (equivalent to fishes: fishes)
      fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
