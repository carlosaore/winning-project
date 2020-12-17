import React from "react";
import "./OtherTrades.css";
import {Link} from 'react-router-dom'

export default function OtherTrades(props) {
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
        <h3>
          Your
          {" " + props.myProductQuantity + " "}
          {props.myProduct}
          {props.myProductQuantity > 1 ? "s " : " "}
          are also worth (options):
        </h3>
        <hr />
        <div className="options-container">
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
        </div>

        <div className="options-container">
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
        </div>

        <div className="options-container">
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
          <div className="options">
            <p>2 cows</p>
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
        </div>
      </div>


      <button className='go-back-button'><Link to="/">GO BACK</Link></button>
    </div>
  );
}
