import React from 'react';

import DatePicker from 'react-datepicker';
import Calendar from '../../../assets/calendar.png';
import Passenger from '../../../assets/passenger.png';
import Departure from '../../../assets/departure.png';

import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

const TextArea = ({onChange}) => <input type="text" className="search-input" onChange={onChange} spellCheck={false}/>;
const DateType = ({startDate, onChange}) => <DatePicker
    selected={startDate}
    onChange={onChange}
    className="search-input"
    dateFormat="MMMM dd, yyyy"
/>;
const PassengerSelect = ({onChange}) => <select className="search-input" onChange={onChange}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>;

const SearchItem = ({placeholder, type, onChange, startDate = new Date()}) => {

    const RenderType = type === 'text' ? TextArea : (type === 'date' ? DateType : PassengerSelect);

    return (<div className="search-item">
        <img src={type === 'text' ? Departure : (type === 'date' ? Calendar : Passenger)} alt='calendar' className='icon'/>
        <div className='form'>
            <span className="placeholder">{placeholder}</span>
            <RenderType onChange={onChange} startDate={startDate}/>
        </div>
    </div>)
};

export default SearchItem;