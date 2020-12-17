import React from 'react';
import './MainPart.css';
import { Component } from 'react';
import ExchangeData from './ExchangeData';

export default class MainPart extends Component {
    state = {
        data: {},
        newData: {},
        dataFromApiReceived: false,
    };

    apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;

    componentDidMount() {
        fetch(this.apiUrl)
            .then((response) => response.json())
            .then((dataFromApi) => {
                const newData = {};
                Object.keys(dataFromApi.conversion_rates).map((key) => {
                    if (key in ExchangeData) {
                        newData[ExchangeData[key]] =
                            dataFromApi.conversion_rates[key];
                    }
                });
                this.setState({
                    data: dataFromApi.conversion_rates,
                    dataFromApiReceived: true,
                    newData: newData,
                });
            });
    }

    logic = () => {
        if (this.state.dataFromApiReceived) {
            const whatWeHave = 'COW';
            const howMany = 5;
            const whatWeNeed = 'EGG';
            let howManyWeNeed =
                (howMany * this.state.newData[whatWeHave]) /
                this.state.newData[whatWeNeed];
        }
    };

    ratioFluctuation = () => {
        let newDataWithFluctuation = { ...this.state.newData };
        const min = -0.05;
        const max = 0.05;
        Object.keys(newDataWithFluctuation).map((key) => {
            newDataWithFluctuation[key] =
                newDataWithFluctuation[key] +
                (Math.random() * (max - min) + min);
        });
        console.log(newDataWithFluctuation);
    };

    render() {
        this.logic();
        this.ratioFluctuation();
        return <div>hello</div>;
    }
}
