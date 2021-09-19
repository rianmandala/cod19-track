import {useEffect, useState} from 'react'
import {Cards, Chart, CountryPicker} from './components'
import {fecthData} from './api'
import styles from './App.module.css'

function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(()=>{
    handleCountryChange()
  },[])

  const handleCountryChange = async(country=null)=>{
    setCountry(country)
    const fetchedData = await fecthData(country)
    setData(fetchedData)
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
