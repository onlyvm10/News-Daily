import './App.css'
import Navbar from './Components/Navbar'


import React, { Component } from 'react'
import News  from './Components/News'
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";


import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 8;

  state = {
    progress: 0
  }
  setProgress = (progress)=>
  {
    this.setState({progress:progress})
  }

  constructor() {
    super();
    this.state = {
      mode: 'light',

    }
  }





  modeToggle = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = "#4d5657";

    }
    else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = "white";
    }
  }

  render() {
    return (
      <>
        <Router>

          <Navbar modeF={this.modeToggle} mode={this.state.mode} />
          <LoadingBar
            color='#00A9FF'
            height={4}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(100)}
          />

          <Routes>

           

          

            <Route exact path="/News-Daily" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='top' key="1" />} />

            <Route exact path="/business" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='business' key="business" />} />

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='entertainment' key="entertainment" />} />

            <Route exact path="/general" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='top' key="top" />} />

            <Route exact path="/health" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='health' key="health" />} />

            <Route exact path="/science" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='science' key="science" />} />


            <Route exact path="/sports" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='sports' key="sports" />} />

            <Route exact path="/technology" element={<News setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} country='in' category='technology' key="technology" />} />

          </Routes>
        </Router>
      </>
    )
  }
}
