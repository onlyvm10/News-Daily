import React, { Component } from 'react'
import Me from './Me.png'

export class AboutUs extends Component {
  render() {
    return (
       
        <div className="card" style={{ width: "30rem",marginTop:"200px " }}>
            <img src={Me} className="card-img-top" alt="" />
            <div className="card-body" style={{color:`${this.props.mode==='dark'?'white':'black'}`,backgroundColor:`${this.props.mode==='dark'?'#212529':'white'}`}}>
                <h1 className="card-title">Vatsal Mishra</h1>
                <h3 className="card-text">
                   Vatsal is a graduate proficient in C, C++, and Data Structures with expertise in Operating Systems and Database Management Systems. 
                   He also has strong foundation in web development basics. 
                </h3>
                <a href="https://www.linkedin.com/in/vatsal-mishra-a852981b1/" className="btn btn-primary">
                    LinkedIn
                   
                </a>
            </div>
           
        </div>

    )
  }
}

export default AboutUs
