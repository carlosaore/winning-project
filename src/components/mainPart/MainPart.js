import './MainPart.css';
import React from 'react';
import ExchangeData from '../../assets/ExchangeData';
import { Link } from 'react-router-dom';
import icon from './arrows.png';
export default function MainPart(props) {
    return (
        <div className="main-main-div">
            <div className="form-container">
                <form>
                    <input
                        type="number"
                        id="number1"
                        min="1"
                        step="1"
                        value={props.myProductAmount}
                        onChange={(event) => {
                            props.setMyProductAmount(event.target.value);
                        }}
                    ></input>
                    <select
                        onChange={(event) => {
                            props.setMyProduct(event.target.value);
                            const iconSrc = ExchangeData.find(
                                (data) => data.value === event.target.value
                            ).icon;
                            import(`../../assets/icons/${iconSrc}.png`).then(
                                (icon) => {
                                    props.setMyProductIcon(icon);
                                }
                            );
                        }}
                        value={props.myProduct}
                    >
                        {ExchangeData.map((data, index) => (
                            <option key={index} value={data.value}>{data.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="form-container">
                <form>
                    <select
                        className="select-desired-product"
                        onChange={(event) => {
                            props.setDesiredProduct(event.target.value);
                            const iconSrc = ExchangeData.find(
                                (data) => data.value === event.target.value
                            ).icon;
                            import(`../../assets/icons/${iconSrc}.png`).then(
                                (icon) => {
                                    props.setDesiredProductIcon(icon);
                                }
                            );
                        }}
                        value={props.desiredProduct}
                    >
                        {ExchangeData.map((data, index) => (
                            <option key={index} value={data.value}>{data.name}</option>
                        ))}
                    </select>
                </form>
            </div>
            <div className="upper-buttons-container">
                <button onClick={props.updateRatios}>Update</button>
                <button
                    onClick={() => {
                        props.setMyProductAmount('');
                        props.setDesiredProductAmount('');
                    }}
                >
                    Reset
                </button>
            </div>
            <div className="img-Container">
                <img src={props.myProductIcon.default} alt="" />
                <img id="arrows" src={icon} alt="arrows" />
                <img src={props.desiredProductIcon.default} alt="" />
            </div>
            <p className="text-area">
                {isNaN(props.myProductAmount)
                    ? 'Please select what you want to trade'
                    : `You can trade ${props.myProductAmount} ${props.myProduct} for ${props.desiredProductAmount} ${props.desiredProduct}. This is a ${props.tradeFairness} trade.`}
            </p>
            <div className="lower-buttons-container">
                {/* <button onClick={props.updateRatios}>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button> */}
                <button className="show-other-trades-button">
                    <Link className="link" to="/other_trades">
                        Show Other trades
                    </Link>
                </button>
            </div>
        </div>
    );
}
