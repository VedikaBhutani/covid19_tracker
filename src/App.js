import React, { Component } from 'react'
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/covid_virus_img.png'
class App extends Component {
    state={
        data:{},
        country:'',
    }
    async componentDidMount()
    {
        const fetchedData=await fetchData();
        this.setState({data:fetchedData});
    }
    handleCountryChange=async(country)=>{
        const fetchedData=await fetchData(country);
        this.setState({data:fetchedData,country:country});

    }
    render() {
        const {data,country}=this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Covid-19"></img>
                <Cards data={data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
                <Chart data={data} country={country}></Chart>
            </div>
        )
    }
}

export default App
