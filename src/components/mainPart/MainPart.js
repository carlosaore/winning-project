import './MainPart.css';
import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';

export default function MainPart(props) {
    const [currentRate, setCurrentRate] = useState({ ...props.data });
    const [myProduct, setMyProduct] = useState('EGG');
    const [myProductAmount, setMyProductAmount] = useState(0);
    const [desiredProduct, setDesiredProduct] = useState('EGG');
    const [desiredProductAmount, setDesiredProductAmount] = useState(0);

    useEffect(() => {
        setCurrentRate({ ...props.data });
    }, [props.data]);

    const countPrice = () => {
        setDesiredProductAmount(
            Math.round(
                (myProductAmount * currentRate[myProduct]) /
                    currentRate[desiredProduct]
            )
        );
    };

    const updateRatios = () => {
        let newDataWithFluctuation = { ...props.data };
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
        <div className="main-main-div">
            <div>
                <form>
                    <input
                        type="number"
                        id="number1"
                        onChange={(event) => {
                            setMyProductAmount(event.target.value);
                        }}
                    ></input>
                    <select
                        onChange={(event) => {
                            setMyProduct(event.target.value);
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
                        <option value="SEXY-FARMER">services of sexy-farmer (1 hour)</option>
                        <option value="FARM-LADY">farm-lady (not sure what you'll get)</option>
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
                        value={desiredProductAmount}
                    ></input>
                    <select
                        onChange={(event) => {
                            setDesiredProduct(event.target.value);
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
                        <option value="SEXY-FARMER">services of sexy-farmer (1 hour)</option>
                        <option value="FARM-LADY">farm-lady (not sure what you'll get)</option>
                        <option value="PS5">PS5</option>
                        <option value="SPACE-MONKEY">astro space-monkey</option>
                        <option value="PIKACHU">pikachu</option>
                    </select>
                </form>
            </div>
            <div>
                <button onClick={countPrice}>Count</button>
                <button>Reset</button>
            </div>
            <div>
                <img src="https://via.placeholder.com/150" alt="" />
                <p>--</p>
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <p>text from props</p>
            <div>
                <button onClick={updateRatios}>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button>
                <button>Other trades</button>
            </div>
        </div>
    );
}
