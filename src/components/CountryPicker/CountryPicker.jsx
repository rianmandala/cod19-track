import {useEffect, useState} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

function CountryPicker({handleCountryChange}) {

    const [countries, setCountries] = useState([])

    useEffect(()=>{
        let fetchApi = async ()=>{
            setCountries(await fetchCountries())
        }

        fetchApi()
        return ()=>{
            fetchApi = null
        }
    },[setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e=> handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map((country,idx)=>(<option key={idx} value={country}>{country}</option>))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
