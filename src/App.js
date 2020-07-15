import React, { Component } from 'react';
// import Api from './api/api';
import {fetchData} from './api'
import { Cards,Chart,PickCountry} from './components'
import styles from './App.module.css';
import Image from './images/covid.png';

class App extends Component {
    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data:fetchedData})
    }

    handleChange= async (country) =>{
        // console.log(country);
        const fetchedData = await fetchData(country);
         this.setState({data:fetchedData, country: country})

    }
    render() { 
        const { data ,country } = this.state;

        return ( <div className={styles.container}>
            <img className={styles.heading} src={Image} alt='Corona Tracker'></img>
            <Cards data={data}/>
            <PickCountry handleChange={this.handleChange}/>
            <Chart data={data} country={country}/>
        </div>);
    }
}
 
export default App;