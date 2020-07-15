import React, { Component , useState} from 'react';


 let Api = () => {
    var [state,setState] = useState({});
    const Api = 'https://api.covid19api.com/summary';
    

    fetch(Api)
    .then(response => response.json())
    .then( data => {
        console.log(data);
        setState(data);
        })
    
        return <p>1</p>;
    
}
 
export default Api;
