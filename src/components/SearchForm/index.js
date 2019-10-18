import React, {useState} from 'react';

import SearchItem from "./SearchItem";
import Button from "../Button";

import './index.css';

const SearchForm = () => {

    const [date, setDate] = useState(new Date());
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [passengers, setPassengers] = useState(1);

    console.log(departure, arrival, passengers);

    return <div className="search-form">
        <div className="search-text">Book your journey</div>
        <div className="but-container">
            <div className="search-container">
                <SearchItem placeholder="From" type="text" onChange={e => setDeparture(e.target.value)}/>
                <SearchItem placeholder="To" type="text" onChange={e => setArrival(e.target.value)}/>
                <SearchItem placeholder="Departure" type="date" startDate={date} onChange={date => setDate(date)}/>
                <SearchItem placeholder="Passengers" type="passenger" onChange={e => setPassengers(e.target.value)}/>
            </div>
            <div className="but-wrapper">
                <Button text="Search"/>
            </div>
        </div>
    </div>
};

export default SearchForm;