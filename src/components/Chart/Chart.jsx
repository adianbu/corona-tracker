import React, { useState, useEffect } from 'react';
import {Line,Bar} from 'react-chartjs-2';
import {fetchDailyData} from '../../api';
import styles from './Chart.module.css';

const Chart = ({data:{confirmed,recovered,deaths}, country}) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchApi = async () =>{
            setDailyData(await fetchDailyData())
         }

         fetchApi();
    },[]);

    const line = dailyData.length?(<Line
        data={{labels: dailyData.map(({date}) => date),
        datasets: [{
            data: dailyData.map(({confirmed}) => confirmed),
            label: 'Infected',
            borderColor:  "#0779e4" ,
            fill: true,
        }, {
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: "#e84a5f",
            fill: true,

        }]}}
    />):null;

    const bar = dailyData.length?(
        <Bar 
        data={{
            labels:['Infected', 'Recovered' , 'Deaths'],
        datasets: [{
            data: [confirmed.value,recovered.value,deaths.value],
            label: 'People',
            backgroundColor: ['rgb(0, 195, 255)',
            'rgb(106, 224, 106)',
            'rgb(255, 77, 77)'
            ],
        }]
        }}
        options={{
            legend: {display:false},
            title: {display: true,text:'Current count in '+country}
        }}
        />
    ):null

    return(
        <div className={styles.container}>
       { country ? bar: line}
        </div>
    )
}

export default Chart