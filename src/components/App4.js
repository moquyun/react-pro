import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          a:'aaaa',
          b: ['a','b','c']
        },
        {
          a:'bbbb',
          b: ['a','b','c']
        }
      ]
    }
  }
  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>
        { itme.a }
      </li>)
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App