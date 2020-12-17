import React from 'react'
import './MainPart.css'

export default function MainPart() {
    return (
        <div className="main-main-div">
            <div>
                <form>
                    <input type="number" id="number1"></input> 
                    <select>
                    <option value="egg">egg</option>
                        <option value="cabbage">cabbage</option>
                        <option value="farmer">services of a sexy farmer (1 hour)</option>
                        <option value="potato">potato</option>
                        <option value="apples">apples</option>
                        <option value="bread">bread</option>
                        <option value="wine">wine</option>
                        <option value="beer mug">beer mug</option>
                        <option value="jar">jar of "happy" mushrooms</option>
                        <option value="chicken">chicken</option>
                        <option value="pig">fat pig</option>
                        <option value="cow">cow</option>
                        <option value="horse">horse</option>
                    </select>
                </form>
            </div>
            <div>
                <form>
                    <input type="number" id="number1"></input> 
                    <select>
                        <option value="egg">egg</option>
                        <option value="cabbage">cabbage</option>
                        <option value="farmer">services of a sexy farmer (1 hour)</option>
                        <option value="potato">potato</option>
                        <option value="apples">apples</option>
                        <option value="bread">bread</option>
                        <option value="wine">wine</option>
                        <option value="beer mug">beer mug</option>
                        <option value="jar">Jar of "happy" mushrooms</option>
                        <option value="chicken">chicken</option>
                        <option value="pig">fat pig</option>
                        <option value="cow">cow</option>
                        <option value="horse">horse</option>
                    </select>
                </form>
            </div>
            <div>
                <button>Fix trade</button>
                <button>Reset</button>
            </div>
            <div>
                <img src="https://via.placeholder.com/150" alt="" />
                <p>--</p>
                <img src="https://via.placeholder.com/150" alt=""/>
            </div>
            <p>text from props</p>
            <div>
                <button>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button>
                <button>Other trades</button>
            </div>
        </div>
    )
}
