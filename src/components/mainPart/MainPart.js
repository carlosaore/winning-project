import './MainPart.css';
import React from 'react';
import icon from '../../assets/icons/002-corn.png';

export default function MainPart(props) {
    return (
        <div className="main-main-div">
            <div>
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
                        }}
                    >
                        <option value="CORN">corn</option>
                        <option value="FARM">farm</option>
                        <option value="FARMER">farmer</option>
                        <option value="FARMER-GIRL">farmer-girl</option>
                        <option value="PIG">pig</option>
                        <option value="COW">cow</option>
                        <option value="CARROTS">carrots</option>
                        <option value="CHICKEN">chicken</option>
                        <option value="SHEEP">sheep</option>
                        <option value="HORSE">horse</option>
                        <option value="EGGS">eggs</option>
                        <option value="GOOSE">goose</option>
                        <option value="WEATHER-VANE">weather-vane</option>
                        <option value="HAY-BALE">hay-bale</option>
                        <option value="SEXY-FARMER">
                            services of sexy-farmer (1 hour)
                        </option>
                        <option value="FARM-LADY">
                            farm-lady (not sure what you'll get)
                        </option>
                        <option value="PS5">PS5</option>
                        <option value="SPACE-MONKEY">astro space-monkey</option>
                        <option value="PIKACHU">pikachu</option>
                    </select>
                </form>
            </div>
            <div>
                <form>
                    <input
                        type="number"
                        id="number1"
                        value={props.desiredProductAmount}
                    ></input>
                    <select
                        onChange={(event) => {
                            props.setDesiredProduct(event.target.value);
                        }}
                    >
                        <option value="CORN">corn</option>
                        <option value="FARM">farm</option>
                        <option value="FARMER">farmer</option>
                        <option value="FARMER-GIRL">farmer-girl</option>
                        <option value="PIG">pig</option>
                        <option value="COW">cow</option>
                        <option value="CARROTS">carrots</option>
                        <option value="CHICKEN">chicken</option>
                        <option value="SHEEP">sheep</option>
                        <option value="HORSE">horse</option>
                        <option value="EGGS">eggs</option>
                        <option value="GOOSE">goose</option>
                        <option value="WEATHER-VANE">weather-vane</option>
                        <option value="HAY-BALE">hay-bale</option>
                        <option value="SEXY-FARMER">
                            services of sexy-farmer (1 hour)
                        </option>
                        <option value="FARM-LADY">
                            farm-lady (not sure what you'll get)
                        </option>
                        <option value="PS5">PS5</option>
                        <option value="SPACE-MONKEY">astro space-monkey</option>
                        <option value="PIKACHU">pikachu</option>
                    </select>
                </form>
            </div>
            <div className="upper-buttons-container">
                <button onClick={props.countPrice}>Count</button>
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
                <img src={icon} alt="" />
                <div class="triangle-right"></div>
                <img src={icon} alt="" />
            </div>
            <p>text from props</p>
            <div className="lower-buttons-container">
                <button onClick={props.updateRatios}>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button>
                <button>Other trades</button>
            </div>
        </div>
    );
}
