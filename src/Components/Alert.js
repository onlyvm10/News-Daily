import React, { Component } from 'react'

export class Alert extends Component {
  render() {
    return (
      <div>
        <div style={{height:"55px"}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatilize(props.alert.type)}!</strong> {props.alert.msg}
            </div>}
            </div>
      </div>
    )
  }
}

export default Alert
