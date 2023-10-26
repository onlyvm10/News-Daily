import React, { Component } from 'react'
import loader from './loading-97.gif'


export class Loader extends Component {
  render() {
    return (
       <div className=" my-2 d-flex justify-content-center" >
      <img src={loader} style={{width:"6rem"}} alt="" />
      </div>
    )
  }
}

export default Loader
