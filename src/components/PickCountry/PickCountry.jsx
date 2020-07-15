import React, { useState, useEffect } from 'react';
import { FormControl , NativeSelect } from '@material-ui/core';
import {countryNames} from '../../api';
import styles from './PickCountry.module.css';

const PickCountry = ({handleChange}) =>{
    const [country,setCountry] = useState([]);

useEffect(()=>{
    const countryData = async () =>{
       setCountry(await countryNames());
    }
   countryData();
    console.log(country);
},[setCountry]);
    return(
        <FormControl className={styles.form}>
            <NativeSelect onChange={(e) => handleChange(e.target.value)}>
              <option value=''>Global</option>
              {country.length? (country.map( (name,i) => <option key={i} value={name} >{name}</option>)):"Loading"}
            </NativeSelect>
        </FormControl>
    )
}

export default PickCountry;