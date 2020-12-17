import React from "react";
import "./MainPart.css";
import { Component } from "react";
import ExchangeData from "./ExchangeData";

export default class MainPart extends Component {
  state = {
    data: {},
    dataFromApiReceived: false,
  };

  apiUrl = `https://v6.exchangerate-api.com/v6/aa7daac21e6dccc5d465cd13/latest/USD`;
  

  componentDidMount() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((dataFromApi) =>
        this.setState({
          data: dataFromApi.conversion_rates,
          dataFromApiReceived: true,
        })
      );

    this.setState({
      dataFromApiReceived: false,
    });
  }

  render() {
    console.log(ExchangeData);
    return <div>hello</div>;
  }
}
