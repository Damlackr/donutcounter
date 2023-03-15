import React, { useState } from "react";

function CountDonuts() {
    const[donutCounter, setDonutCounter] = useState(0);

    const artir = () => {
        setDonutCounter(donutCounter+1);
    }
    const ButtonStyle = { margin: "0px 10px" };
    return(
        <div>
            <h1>Count no. of Donuts:{donutCounter}</h1>
            <button onClick={artir}>Artırınız.</button>
        </div>
    )
}

export default CountDonuts;