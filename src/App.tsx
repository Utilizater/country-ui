import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { InputComponent } from './components/InputComponent';
import { OutputComponent } from './components/OutputComponent';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
export type Country = {
  name: string;
  capital: string;
  state_names: string;
};

function App() {
  const [country, setCounty] = useState<Country>({
    name: '',
    capital: '',
    state_names: '',
  });
  const countryRequest = async (countryCode: string): Promise<void> => {
    const url = `${BASE_URL}/GetCountryDetails/${countryCode}`;
    const response = await axios.get(url);
    setCounty(response.data);
  };

  return (
    <Box
      className='app_container'
      display='flex'
      flexDirection='row'
      width='90%'
      height='90vh'
      p={3}
    >
      <Box border={1} flex={1}>
        <InputComponent countryRequest={countryRequest} />
      </Box>
      <Box border={1} flex={2} ml={2}>
        <OutputComponent country={country} />
      </Box>
    </Box>
  );
}

export default App;
