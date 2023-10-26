import React, { Component } from 'react'
import image from "./NEWS.png"
export class AboutApp extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="card text-center mx-auto" style={{ width: "30rem",marginTop:"200px"}}>
            <img src={image} className="card-img-top" alt=""/>
            <div className="card-body" style={{color:`${this.props.mode==='dark'?'white':'black'}`,backgroundColor:`${this.props.mode==='dark'?'#212529':'white'}`}}>
                <h1 className="card-title">News Daily</h1>
                <h3 className="card-text">
                News Daily is an API based application that provides real time news from various online resources. It also provides categorization of news thanks to its algorithms that fetch news from a specified category. It is built using Bootstrap v-5.3, JavaScript library 'React' and React-route v-6.3.0.
                </h3>
               
            </div>
        </div>
        </div>
   
      </div>
    )
  }
}

export default AboutApp
