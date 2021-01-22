import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPart from './components/mainPart/MainPart';
import OtherTrades from './components/OtherTrades/OtherTrades';
import ExchangeData from './assets/ExchangeData';
import { useState, useEffect } from 'react';
import eggsIcon from './assets/icons/023-eggs.png';
export default function App() {
    const [currentRate, setCurrentRate] = useState({});
    const [myProduct, setMyProduct] = useState('');
    const [myProductAmount, setMyProductAmount] = useState('');
    const [desiredProduct, setDesiredProduct] = useState('');
    const [desiredProductAmount, setDesiredProductAmount] = useState('');
    const [myProductIcon, setMyProductIcon] = useState({ default: eggsIcon });
    const [desiredProductIcon, setDesiredProductIcon] = useState({
        default: eggsIcon,
    });
    const [tradeFairness, setTradeFairness] = useState('fair');
    const [allPrices, setAllPrices] = useState([]);
    useEffect(() => {
        const apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;
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
        console.log(currentRate[myProduct])
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

    useEffect(countPrice, [
        myProduct,
        myProductAmount,
        desiredProduct,
        currentRate,
    ]);

    useEffect(countAllPrices, [
        myProduct,
        myProductAmount,
        desiredProduct,
        currentRate,
    ]);

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
