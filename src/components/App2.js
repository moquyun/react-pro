import React from 'react'

class App extends React.Component {
  constructor (props) {
    // console.log(this)
    super(props);
    this.state = {
      test: 'aaaa'
    }
  }
  render () {
    return (
      <div>
        <h1>React</h1>
        { this.state.test}
      </div>
    )
  }
}

export default App