import { useEffect } from "react"
import { useState } from "react"
import React from "react";

export class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = { favoriteColor: "red", show: true };
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.favoriteColor == 'red') {
            setTimeout(() => this.setState({favoriteColor: 'yellow'}), 1500)
        }
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate")
        if (prevState.favoriteColor == 'red') {
            console.log('wow');
            
        }
        return null
    }


    render() {
    return (
        <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={() => this.setState({favoriteColor: 'blue'})}>change to blue</button>
        </>
    )
    }
  }
