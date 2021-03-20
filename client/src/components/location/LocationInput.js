import React from 'react';

const LocationInput = () => {

// const [selectedCity, setCity] = useState('');
// const [selectedState, setState] = useState('');
// const [selectedCountry, setCountry] = useState();

// const onCityChange = async (e) => {
//     setCity(e.target.value);
//     getCityData(e.target.value, selectedState, selectedCountry);
// };
// const onStateChange = (e) => {
//     setState(e.target.value);
//     getSupportedCities(selectedCountry, e.target.value);
// };
// const onCountryChange = (e) => {
//     setCountry(e.target.value);
//     getSupportedStates(e.target.value);
// };
// function clearAllFilters() {
//     clearFilters();
// };
    return (
        <div className='location-input'>
                    <h1>Get Covid Data Near You!</h1>
            <div className='input-container'>
                <select defaultValue={'DEFAULT'}>
                    <option value='DEFAULT'> -- select an option -- </option>
                </select>
            </div>

            <div className='input-container'>
                <select defaultValue={'DEFAULT'}>
                    <option value='DEFAULT'> -- select an option -- </option>
                </select>
            </div>

            <div className='input-container'>
                <select defaultValue={'DEFAULT'}>
                    <option value='DEFAULT'> -- select an option -- </option>
                </select>
            </div>
            <div className='location-input--btn-container'>
                <span className='location-btn'>Get Location</span>
                <span className='refresh'>Clear Search</span>
            </div>
        </div>
    );
};

export default LocationInput;