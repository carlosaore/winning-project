import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import MainPart from "./components/mainPart/MainPart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Page1 from "./components/page1/Page1";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";

class App extends React.Component {
  state = {
    test: "text from state",
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route
            path="/Page1"
            render={(props) => <Page1 {...props} text={this.state.test} />}
          />
          <Route path="/Page2" render={(props) => <Page2 {...props} />} />
          <Route path="/Page3" render={(props) => <Page3 {...props} />} />

          <Route exact path="/" render={(props) => <MainPart {...props} />} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

/*
class App extends React.Component {
  state = {
    home : "Home text from props"
  }

  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route
            exact path="/"
            render={props =>
              <Home {...props} text={this.state.home} />
            }
          
          />  
          <Route
            path="/about"
            render={props =>
              <About {...props} />
            }  
          />
          <Route
            path="/contact"
            render={props =>
              <Contact {...props} />
            }
          />
        </Switch> 
      </>
    )
  }
}

*/

export default App;
