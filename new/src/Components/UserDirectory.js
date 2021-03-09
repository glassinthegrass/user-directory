import React, { Component } from 'react'
import Navigation from './Navigation'
import InfoCard from './InfoCard'
import data from '../data'

class UserDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: data,
            index: 0,
            message: ''
        }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    if (this.state.index < this.state.recipes.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  }
  // In the decrease method, check to see if the value of index is greater than 0. If so, use setState to decrement index by 1.
  decrease() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  }
  // e is the event that came from the listener
  click = (e) => {
    this.setState({ index: e.target.value })
  }
  // Bind these methods, giving them the context of this.

  //Pass these methods as props to Nav the component.

  render() {
    // Pass recipes and index as props to RecipeCard.

    return (
      <div className="container">
        {/* onClick event listener-- necessary to listen to event occuring */}
        <InfoCard onClick={this.click} data={this.state.recipes[this.state.index]} index={this.state.index} />
        <Navigation increase={this.increase} decrease={this.decrease} />
      </div>
    );
  }
}
 export default UserDirectory