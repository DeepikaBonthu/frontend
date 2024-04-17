import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        <center>
            <h2>Name:{this.props.name} ,Age:{this.props.age} and Place:{this.props.place}</h2>
        </center>
      </div>
    )
  }
}
