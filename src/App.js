import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { bgcolor } from '@mui/system';

import Autocomplete from '@mui/material/Autocomplete';

function App() {

  const [country,setCountry] = useState('');
  const [flag,setFlag] = useState('');

  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' }
  ]

  function CallAPI()
  {
  useEffect(()=>
  {console.log("use effect called");
},
  );}
  return (
    <>
    <Card variant='outlined' sx={{ minWidth: 125 }}>
    <Container sx={{border:'-moz-initial'}}> 
    <Box sx={{bgcolor:'blue'}}>
        <h2>React API Example</h2>
        </Box>
        <Box textAlign="center">
        <TextField id="outlined-basic" value={country} onChange={(e)=>setCountry(e.target.value)} label="User Id" variant="standard" />
        <Button variant='contained' onClick={CallAPI}>fetch</Button>
        </Box> 
    </Container>
    </Card>
    <label>FLag:
      <input value={flag} onChange={(e)=>setFlag(e.target.value)}></input>
    </label>
    {/* <label>Country:{country}</label>
    <Autocomplete
    value={country}
    onChange={(e,newValue)=>{setCountry(newValue);}}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    /> */}
    </>
      );
}

export default App;
