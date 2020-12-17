import React from 'react'
import './MainPart.css'

export default function MainPart() {
    return (
        <div className="main-main-div">
            <div>
                <form>
                    <input type="number" id="number1"></input> 
                    <select>
                        <option value="pig">pig</option>
                        <option value="cow">cow</option>
                        <option value="farmer">services of a sexy farmer (1 hour)</option>
                        <option value="chicken">chicken</option>
                        <option value="egg">egg</option>
                        <option value="vegetables">crate of vegetables</option>
                        <option value="corn">corncob</option>
                        <option value="farm">one farm</option>
                    </select>
                </form>
            </div>
            <div>
                <form>
                    <input type="number" id="number1"></input> 
                    <select>
                        <option value="pig">pig</option>
                        <option value="cow">cow</option>
                        <option value="farmer">services of a sexy farmer (1 hour)</option>
                        <option value="chicken">chicken</option>
                        <option value="egg">egg</option>
                        <option value="vegetables">crate of vegetables</option>
                        <option value="corn">corncob</option>
                        <option value="farm">one farm</option>
                    </select>
                </form>
            </div>
            <div>
                <button>Fix trade</button>
                <button>Reset</button>
            </div>
            <div>
                <img src="https://via.placeholder.com/150" />
                <p>-></p>
                <img src="https://via.placeholder.com/150" />
            </div>
            <div>
                <button>Update ratios</button>
                <button>Reverse trade</button>
                <button>Ratio fluctuation</button>
                <button>Other trades</button>
            </div>
        </div>
    )
}
