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
import eggsIcon from './assets/icons/023-eggs.png';

export default function App() {
    const [currentRate, setCurrentRate] = useState({});
    const [myProduct, setMyProduct] = useState('EGGS');
    const [myProductAmount, setMyProductAmount] = useState('');
    const [desiredProduct, setDesiredProduct] = useState('EGGS');
    const [desiredProductAmount, setDesiredProductAmount] = useState('');
    const [myProductIcon, setMyProductIcon] = useState({ default: eggsIcon });
    const [desiredProductIcon, setDesiredProductIcon] = useState({
        default: eggsIcon,
    });
    const [tradeFairness, setTradeFairness] = useState('fair');
    const [allPrices, setAllPrices] = useState([]);

    const apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((dataFromApi) => {
                const newData = {};
                Object.keys(dataFromApi.conversion_rates).forEach(
                    (currency) => {
                        const data = ExchangeData.find(
                            (data) => data.currency === currency
                        );
                        if (data) {
                            newData[data.value] =
                                dataFromApi.conversion_rates[currency];
                        }
                    }
                );
                setCurrentRate(newData);
            });
    }, []);

    useEffect(() => {
        countPrice();
        countAllPrices();
    }, [myProduct, myProductAmount, desiredProduct, currentRate]);

    const countPrice = () => {
        const amount =
            (myProductAmount * currentRate[myProduct]) /
            currentRate[desiredProduct];
        const roundedAmount = Math.round(amount);
        const floorAmount = Math.floor(amount);
        const ceilAmount = Math.ceil(amount);
        let fairness =
            floorAmount === ceilAmount
                ? 'fair'
                : roundedAmount === floorAmount
                ? 'loosing'
                : 'winning';
        setTradeFairness(fairness);

        setDesiredProductAmount(roundedAmount);
    };

    const countAllPrices = () => {
        let allPrices = [];
        Object.keys(currentRate).forEach((key) => {
            allPrices.push(
                Math.round(
                    (myProductAmount * currentRate[myProduct]) /
                        currentRate[key]
                )
            );
        });
        setAllPrices(allPrices);
    };

    const updateRatios = () => {
        let newDataWithFluctuation = { ...currentRate };
        const min = -0.05;
        const max = 0.05;
        Object.keys(newDataWithFluctuation).forEach((key) => {
            newDataWithFluctuation[key] =
                newDataWithFluctuation[key] *
                (1 + Math.random() * (max - min) + min);
        });
        setCurrentRate(newDataWithFluctuation);
    };

    return (
        <div className="background">
            <div className="app-main-div">
                {/* <Header /> */}

                <Switch>
                    <Route
                        path="/other_trades"
                        render={(props) => (
                            <OtherTrades
                                myProduct={myProduct}
                                myProductIcon={myProductIcon}
                                desiredProductIcon={desiredProductIcon}
                                desiredProduct={desiredProduct}
                                myProductAmount={myProductAmount}
                                desiredProductAmount={desiredProductAmount}
                                setMyProduct={setMyProduct}
                                setMyProductIcon={setMyProductIcon}
                                setDesiredProductIcon={setDesiredProductIcon}
                                setMyProductAmount={setMyProductAmount}
                                setDesiredProduct={setDesiredProduct}
                                setDesiredProductAmount={
                                    setDesiredProductAmount
                                }
                                allPrices={allPrices}
                            />
                        )}
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
                                myProduct={myProduct}
                                myProductIcon={myProductIcon}
                                desiredProductIcon={desiredProductIcon}
                                desiredProduct={desiredProduct}
                                myProductAmount={myProductAmount}
                                desiredProductAmount={desiredProductAmount}
                                setMyProduct={setMyProduct}
                                setMyProductIcon={setMyProductIcon}
                                setDesiredProductIcon={setDesiredProductIcon}
                                setMyProductAmount={setMyProductAmount}
                                setDesiredProduct={setDesiredProduct}
                                setDesiredProductAmount={
                                    setDesiredProductAmount
                                }
                                updateRatios={updateRatios}
                                countPrice={countPrice}
                                tradeFairness={tradeFairness}
                            />
                        )}
                    />
                </Switch>

                {/* <Footer /> */}
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
