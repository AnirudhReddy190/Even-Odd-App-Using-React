// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {

  state = {number : 0 , val : "Count is Even"}

  randomNumGenerator = () => {
      let randomNum=Math.ceil(Math.random() * 100)
      this.setState((prevState)=>({number : randomNum}))
      
      if (randomNum % 2 !== 0){
        this.setState((prevState)=>({val :  "Count is Odd"}))
      }else{
        this.setState((prevState)=>({val :  "Count is Even"}))
      }
      
  }

  render() {
    const {number,val}=this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Count <span>{number}</span>
          </h1>

          <p className="para">
            {val}
          </p>
          <button className="button" type="button" onClick={this.randomNumGenerator}>
            Increment
          </button>
          <p>Increase By random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
