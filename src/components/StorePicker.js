import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment> {/*So that we can return sibling elements*/}
        <form action="" className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit store</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;
