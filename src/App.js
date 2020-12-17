import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPart from './components/mainPart/MainPart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import OtherTrades from './components/OtherTrades/OtherTrades';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import ExchangeData from './assets/ExchangeData';
import { useState, useEffect } from 'react';

export default function App() {
    const [currentRate, setCurrentRate] = useState({});
    const [myProduct, setMyProduct] = useState('CORN');
    const [myProductAmount, setMyProductAmount] = useState('');
    const [desiredProduct, setDesiredProduct] = useState('CORN');
    const [desiredProductAmount, setDesiredProductAmount] = useState('');

    const apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((dataFromApi) => {
                const newData = {};
                Object.keys(dataFromApi.conversion_rates).forEach((key) => {
                    if (key in ExchangeData) {
                        newData[ExchangeData[key]] =
                            dataFromApi.conversion_rates[key];
                    }
                });
                setCurrentRate(newData);
            });
    }, []);

    const countPrice = () => {
        setDesiredProductAmount(
            Math.round(
                (myProductAmount * currentRate[myProduct]) /
                    currentRate[desiredProduct]
            )
        );
    };

    const updateRatios = () => {
        let newDataWithFluctuation = { ...currentRate };
        const min = -0.05;
        const max = 0.05;
        Object.keys(newDataWithFluctuation).forEach((key) => {
            newDataWithFluctuation[key] =
                newDataWithFluctuation[key] +
                (Math.random() * (max - min) + min);
        });
        setCurrentRate(newDataWithFluctuation);
    };


    return (
        <div className="App" className="background">
            <div className="app-main-div">
                <Header />

                <Switch>
                    <Route
                        path="/Page1"
                        render={(props) => <Page1 {...props} />}
                    />
                    <Route
                        path="/Page2"
                        render={(props) => <Page2 {...props} />}
                    />
                    <Route
                        path="/Page3"
                        render={(props) => <Page3 {...props} />}
                    />

                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <MainPart
                                myProductAmount={myProductAmount}
                                desiredProductAmount={desiredProductAmount}
                                setMyProduct={setMyProduct}
                                setMyProductAmount={setMyProductAmount}
                                setDesiredProduct={setDesiredProduct}
                                setDesiredProductAmount={
                                    setDesiredProductAmount
                                }
                                updateRatios={updateRatios}
                                countPrice={countPrice}
                            />
                        )}
                    />
                </Switch>

                <Footer />
            </div>
        </div>
    );
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
