import React from 'react';
import './OtherTrades.css';
import { Link } from 'react-router-dom';
import ExchangeData from '../../assets/ExchangeData';
export default function OtherTrades(props) {
    // useEffect(() => {
    //     props.setDesiredProduct(ExchangeData[0].value);
    // }, [props.myProduct]);
    // console.log(props.allPrices[1]);
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
                        {ExchangeData.map((data, index) => (
                            <option key={index} value={data.value}>{data.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div>
                <h3>
                    Your
                    {' ' + props.myProductAmount + ' '}
                    {props.myProduct}
                    {props.myProductAmount > 1 ? 's ' : ' '}
                    are also worth (options):
                </h3>
                <hr />
                <div className="options-container">
                    {props.allPrices.map((price, index) => {
                        return (
                            <div key={index} className="options">
                                <p>
                                    {props.allPrices[index]}{' '}
                                    {ExchangeData[index].value}
                                </p>
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt=""
                                />
                            </div>
                        );
                    })}
                    {/* <div className="options">
                        <p>2 cows</p>
                        <img src="https://via.placeholder.com/50" alt="" />
                    </div> */}
                </div>
            </div>
            <button className="go-back-button">
                <Link to="/">GO BACK</Link>
            </button>
        </div>
    );
}