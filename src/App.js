import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/news";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={this.setProgress} category="general" />
              }
            />
            <Route path="/business" element={<News setProgress={this.setProgress} category="business" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} category="sports" />} />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} category="technology" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} category="entertainment" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;