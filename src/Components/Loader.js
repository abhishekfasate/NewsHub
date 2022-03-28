import React, { Component } from 'react'
import loading from './sket.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Please Wait while Loading" />
        <strong>Please Wait While We Are Fetching</strong>
      </div>
    )
  }
}

export default Loader
