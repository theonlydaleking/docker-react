import React, {Component} from 'react'
import axios from 'axios'
import AppProvider, { AppContext } from './Context'


export default class Api extends Component {
  state = {response: ""}

  static contextType = AppContext
  renderResponse = async () => {
    const response = await axios.get('http://www.mocky.io/v2/5bda458e2f0000ab3c06d449')
    console.log(response.data);
    this.setState({response: response.data})
  }

  componentDidMount() {
    this.renderResponse()
  }

  render(){
    return(
      <div className="">{this.context.number}</div>
  )}
}
