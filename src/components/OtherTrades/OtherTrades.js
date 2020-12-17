import React from 'react'
import './OtherTrades.css'

export default function OtherTrades(props) {
    return (
        <div>
            <h3>
                Your 
                {" " + props.myProductQuantity + " "} 
                {props.myProduct}
                {props.myProductQuantity > 1 ? "s " : " "} 
                are also worth (options):
            </h3>
            <hr/>
            <div>
                <p>2 cows</p>
                <img src="https://via.placeholder.com/50" alt="" />
            </div>
            <div>
                <p>2 cows</p>
                <img src="https://via.placeholder.com/50" alt="" />
            </div>
            <div>
                <p>2 cows</p>
                <img src="https://via.placeholder.com/50" alt="" />
            </div>
            <div>
                <p>2 cows</p>
                <img src="https://via.placeholder.com/50" alt="" />
            </div>
            
        </div>
    )
}
