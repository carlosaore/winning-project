import React from "react";

export default function OtherTradesComponent() {
  return (
    <div className="options-container">
      <div className="options">
        <p>farm</p>
        <img src="https://via.placeholder.com/50" alt="" />
      </div>
    </div>
  );
}

// {props.allPrices.map((price, index) => {
//     return (
//       <div className="options">
//         <p>
//           {props.allPrices[index]} {ExchangeData[index].value}
//         </p>
//         <img src="https://via.placeholder.com/50" alt="" />
//       </div>
//     );
//   })}