import React from "react";
import propTypes from "prop-types";

class ClassComponent extends React.Component {
  state = { value: 0 };
  // constructor(props) {
  //   super(props);

  // this.handlePlus = this.handlePlus.bind(this);
  // this.handleMinus = this.handleMinus.bind(this);

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Hello {this.props.nama}</h2>
        <button onClick={this.handleMinus}>-</button>
        <span> {this.state.value} </span>
        <button onClick={this.handlePlus}>+</button>
        <p>komponen ini dibuat oleh class component</p>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  nama: propTypes.string.isRequired,
};
export default ClassComponent;
