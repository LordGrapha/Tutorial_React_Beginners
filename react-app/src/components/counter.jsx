import React, { Component } from "react";

class Counter extends Component {
    //Now we are pasing all counter obj, we need to fix and adapt the code to it! Look counters to know counter structure
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? <h3>Zero</h3> : value;
  }
}

export default Counter;
