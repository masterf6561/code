import React, {useState} from "react";

function Hello(){
    var [count, setCount] = useState(0);

    const [isBlue, setBlue] = useState(false);

    const increment = () => {
        if(count %2 != 0){
            setBlue(true);
        }
        else{
            setBlue(false);
        }
        setCount(count + 1);    
    }

    const resetCount = () => {
        setCount(0);
    }
    
    const name = "Moritz Lechner";
    const sayHello = () => {
        console.log("hello");
      };

    
    return(
        <div className="header">
            <h1 className={isBlue ? "Blue": ""}>
                {"Website von " + name}
            </h1>
                <button className="button" onClick={resetCount}>Say Hello</button>
                <button className="button" onClick={increment}>Increment</button>
                <h3>{count}</h3>
        </div>
    )
}

export default Hello;