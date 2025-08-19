import { CountryInput } from './components/CountryInput'
import './App.css'
// import { HolidayList } from './components/HolidayList'
import { useEffect, useState } from 'react';

function App() {
const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            await fetch('https://openholidaysapi.org/Countries').then(res => {
                if (!res.ok) console.log("Nah");
                return res.json();
            }).then(data => {
                const c = data.map((obj, i)=> ({
                    name: obj.name[0].text,
                    isoCode: obj.isoCode,
                    index: i
                }));
                setCountries(c);

                console.log(countries);
                setSelectedCountry(countries[25]?.isoCode || "")
            }).catch(err => {
                console.error(err);
            });
        }
        fetchData();
    }, []);



  return (
    <div className='app-container'>
    <CountryInput countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
    {/* <button className="submit-btn">Find Holidays</button> */}
    {/* <HolidayList holidayList={holidayList}/> */}
    </div>
  )
}

export default App
