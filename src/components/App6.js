import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  render () {
    if (this.state.flag) {
      return (
        <div>true</div>
      )
    }else{
      return (
        <div>false</div>
      )
    }
  }
}

export default App