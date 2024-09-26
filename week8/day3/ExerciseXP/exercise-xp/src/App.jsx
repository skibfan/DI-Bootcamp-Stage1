import { useState } from 'react'
import './App.css'
import { BuggyCounter } from './components/BuggyCounter'
import { ErrorBoundary } from './components/ErrorBoundary'
import {Color} from './components/Color'
import React from 'react'
function App() {
  
  return (
    <>
    {/* <ErrorBoundary >
      <BuggyCounter />
    </ErrorBoundary>
    <BuggyCounter />
    <Color></Color> */}
    <Child></Child>
    </>
  )
}

export default App


 export class Child extends React.Component {
  constructor() {
      super()
      this.state = {show : true}
  }

  componentWillUnmount() {
      alert('wow, unmount')
  }

  render(){
      return (<> {this.state.show ?
      <header>Hellow World!</header>
       : null}
       <button onClick={() => this.setState({show: false})}>Delete</button>
      </>)
  }
}