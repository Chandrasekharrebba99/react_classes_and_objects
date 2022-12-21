// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {issubcribe: 'Subscribe'}

  changesubstatus = () => {
    const {issubcribe} = this.state
    if (issubcribe === 'Subscribe') {
      this.setState(() => ({issubcribe: 'Subscribed'}))
    } else {
      this.setState(() => ({issubcribe: 'Subscribe'}))
    }
  }

  render() {
    const {issubcribe} = this.state
    return (
      <div className="topbg">
        <div>
          <h1>Welcome</h1>
          <h3>Thank you Happy Learning</h3>
          <button type="button" onClick={this.changesubstatus}>
            {issubcribe}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
