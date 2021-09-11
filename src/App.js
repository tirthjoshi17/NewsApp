import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    query:"everything",
    progress:0
  }

  searching = (e) =>{
    // console.log(e.target.parentNode.firstElementChild.value);
    this.setState({query:e.target.parentNode.firstElementChild.value});
    // console.log(this.state);
}

  setProgress = (progress) =>{
    this.setState({progress:progress});
  }

  render() {
    return (
      <>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Router>
          <NavBar search={this.searching} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <NewsComponent key={this.state.query} load={true}  progress={this.setProgress} query={this.state.query} category="All"/>
              </Route>
              <Route exact path="/general">
                <NewsComponent key="general" load={true}  progress={this.setProgress} category="general" />
              </Route>
              <Route exact path={`/business`}>
                <NewsComponent key="business" load={true}  progress={this.setProgress} category="business" />
              </Route>
              <Route exact path={`/entertainment`}>
                <NewsComponent key="entertainment" load={true}  progress={this.setProgress} category="entertainment" />
              </Route>
              <Route exact path="/health">
                <NewsComponent key="health" load={true}  progress={this.setProgress} category="health" />
              </Route>
              <Route exact path="/science">
                <NewsComponent key="science" load={true}  progress={this.setProgress} category="science" />
              </Route>
              <Route exact path="/sports">
                <NewsComponent key="sports" load={true}  progress={this.setProgress} category="sports" />
              </Route>
              <Route exact path="/technology">
                <NewsComponent key="technology" load={true}  progress={this.setProgress} category="technology" />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}