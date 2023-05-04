import { useEffect, useState } from "react";


useEffect(() => {
    const controller = new AbortController();
    const signal = controler.signal;

    fetch("https://www.swapi.tech/api/", { signal })
        .then((res) => res.json())
        .then((data) => {
            setuser(data);
        })
      

        .catch(err=> {
            if(err.name === "AbortError"){
                console.log("cancelled!")
            }else{

            }
        })

    return () => {
        
        console.log("cancelled!")
        controller.abort();
    };

}, []);

return (
    <div>


    </div>
)

export default 
