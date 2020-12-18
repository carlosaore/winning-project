import { Link } from "react-router-dom";
import OtherTradesComponent from "./OtherTradesComponent";
import React from "react";
import "./OtherTrades.css";
import ExchangeData from "../../assets/ExchangeData";
import { useEffect } from "react";

export default function OtherTrades(props) {
  // useEffect(() => {
  //     props.setDesiredProduct(ExchangeData[0].value);
  // }, [props.myProduct]);
  console.log(props.allPrices[1]);
  return (
    <div className="main-main-div">
      <div className="form-container">
        <form>
          <input
            type="number"
            id="number1"
            value={props.myProductAmount}
            onChange={(event) => {
              props.setMyProductAmount(event.target.value);
            }}
          ></input>
          <select
            onChange={(event) => {
              props.setMyProduct(event.target.value);
              props.setDesiredProduct(ExchangeData[0].data);
            }}
            value={props.myProduct}
          >
            {ExchangeData.map((data) => (
              <option value={data.value}>{data.name}</option>
            ))}
          </select>
        </form>
      </div>

      <div>
        <h3>
          Your
          {" " + props.myProductQuantity + " "}
          {props.myProduct}
          {props.myProductQuantity > 1 ? "s " : " "}
          are also worth (options):
        </h3>
        <hr />

        <OtherTradesComponent 

            
        />

        {props.allPrices.map((price, index) => {
          return (
            <div className="options">
              <p>
                {props.allPrices[index]} {ExchangeData[index].value}
              </p>
              <img src="https://via.placeholder.com/50" alt="" />
            </div>
          );
        })}
      </div>

      <button className="go-back-button">
        <Link className="link" to="/">
          GO BACK
        </Link>
      </button>
    </div>
  );
}
