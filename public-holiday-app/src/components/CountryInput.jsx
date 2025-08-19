import { useState } from 'react';
import './CountryInput.css'
import { HolidayList } from './HolidayList';

export function CountryInput({countries, selectedCountry, setSelectedCountry}){
    const [holidayList, setHolidayList] = useState([]);
    function findHoliday(){
        if(!selectedCountry) alert("Not selected");
        else{
            fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${selectedCountry}&validFrom=2024-12-31&validTo=2025-12-31&languageIsoCode=EN`)
            .then(res=>{return res.json()})
            .then(data =>{
                const d = data.map((obj)=>({
                    holidayDate:obj.startDate,
                    holidayName:obj.name[0].text
                }));
                setHolidayList(d);
            })
        }
    }

    return (
    <>
        <div className="country-container">
            <div className="dropdown-div">

            {/* <label className="label1">Choose a country: </label> */}
            <select className="dropdown" name="" id="countries" value={selectedCountry} onChange={(e)=> setSelectedCountry(e.target.value)}>
                <option value="">-- Select a country --</option>
                {countries.map(({name, isoCode, index} )=>{
                    return <option key={index} value={isoCode}>{name}({isoCode})</option>
                })}
            </select>
            </div>

             <button className="submit-btn" onClick={findHoliday}>Find Holidays</button>
        </div>
                <HolidayList holidayList={holidayList}/>
                </>
    )

}