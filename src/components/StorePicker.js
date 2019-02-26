import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeName = React.createRef();

  //property goToStore
  goToStore = event => {
    event.preventDefault(); //don't submit the form!
    this.props.history.push(`/store/${this.storeName.current.value}`); //change the page with react router. We have access to the router since StorePicker is a child
  };

  render() {
    return (
      // {/* So that we can return sibling elements */}
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.storeName}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store</button>
      </form>
    );
  }
}

export default StorePicker;
