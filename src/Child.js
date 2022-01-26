import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    console.log('Child Contructor')
  }

  componentWillMount() {
    console.log('child ComponentWillMount')
  }

  componentDidMount() {
    console.log('child ComponentDidMount')
  }

  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  shouldComponentUpdate(nextprops, nextState) {
    console.log('child shouldComponentUpdate')
    // return false
    return true
  }

  componentWillUpdate() {
    console.log('child componentWillupdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('child prevProps', prevProps)
    console.log('child prevState', prevState)
    console.log('child componentDidupdate')
  }

  componentWillUnmount() {
    console.log('child ComponentWillUnmount')
  }

  render() {
    console.log('child render')
    return (
      <div className='App'>
        <h1>Child name : {this.props.name}</h1>
      </div>
    )
  }
}

export default Child
