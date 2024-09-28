
import React from "react";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export class DidMount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ""
      }
    }
    componentDidMount() {
        this.fetchMessage()
    }

     fetchMessage = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/hello`)
            const data = await response.json()
            this.setState({message: data.message})
        } catch (error) {
            console.log(error);
            this.setState({ message: "Oh noooo..." });
            
        }
    }
    render() {
    return (
        <>
        <header>server message: {this.state.message}</header>
        </>
    )
    }
  }
