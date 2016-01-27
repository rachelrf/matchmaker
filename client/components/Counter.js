import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const counter = this.props.counter
    const match = this.props.match
    const setEntries = this.props.setEntries
    console.log(this.props)

    console.log('entries',this.props.entries._root.entries[1])

    return (
      <div>
        Matched: {counter} times
        <p>Name 1</p>
        <button onClick={setEntries}>Match 1</button>
        <p>Name 2</p>
        <button onClick={match}>Match 2</button>
      </div>
    )
  }
}

Counter.propTypes = {
  match: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
