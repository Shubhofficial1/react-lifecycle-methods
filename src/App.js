import React, { Component } from 'react'
import Child from './Child'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Shubham',
    }
    console.log('Constructor')
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        innerWidth: window.innerWidth,
      })
    }
    console.log('ComponentWillMount')
  }
  componentDidMount() {
    console.log('ComponentDidMount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextprops, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillupdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  changeState() {
    this.setState({ name: 'shubham kumar' })
  }

  unmountChild() {
    this.setState({
      name: 'kumar',
    })
  }

  render() {
    console.log('render')

    if (this.state.name === 'kumar') {
      return <div />
    }
    return (
      <div className='app'>
        <h1>Hello World</h1>
        <h2>{this.state.name}</h2>
        <h3>{this.state.innerWidth}</h3>
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State </button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    )
  }
}

export default App
