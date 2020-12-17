import React from "react";
import "./App.css";
import MainPart from "./components/mainPart/MainPart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends React.Component {
  state = {
    test: "text from state",
  };

  render() {
    return (
      <div className="App" className="background">
        <div className="app-main-div">
          <Header />
          <MainPart />
          <Footer />
        </div>
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
