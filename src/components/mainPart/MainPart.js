import './MainPart.css';
import React from 'react';

export default function MainPart(props) {
    return (
        <div className="main-main-div">
            <div>
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
                        }}
                    >
                        <option value="EGG">egg</option>
                        <option value="CABBAGE">cabbage</option>
                        <option value="FARMER">
                            services of a sexy farmer (1 hour)
                        </option>
                        <option value="POTATO">potato</option>
                        <option value="APPLE">apples</option>
                        <option value="BREAD">bread</option>
                        <option value="WINE">wine</option>
                        <option value="PLATE">beer mug</option>
                        <option value="JAR">jar of "happy" mushrooms</option>
                        <option value="CHICKEN">chicken</option>
                        <option value="PIG">fat pig</option>
                        <option value="COW">cow</option>
                        <option value="HORSE">horse</option>
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
                        <option value="EGG">egg</option>
                        <option value="CABBAGE">cabbage</option>
                        <option value="FARMER">
                            services of a sexy farmer (1 hour)
                        </option>
                        <option value="POTATO">potato</option>
                        <option value="APPLE">apples</option>
                        <option value="BREAD">bread</option>
                        <option value="WINE">wine</option>
                        <option value="PLATE">beer mug</option>
                        <option value="JAR">jar of "happy" mushrooms</option>
                        <option value="CHICKEN">chicken</option>
                        <option value="PIG">fat pig</option>
                        <option value="COW">cow</option>
                        <option value="HORSE">horse</option>
                    </select>
                </form>
            </div>
            <div>
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
            <div>
                <img src="https://via.placeholder.com/150" alt="" />
                <p>--</p>
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <p>text from props</p>
            <div>
                <button onClick={props.updateRatios}>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button>
                <button>Other trades</button>
            </div>
        </div>
    );
}
