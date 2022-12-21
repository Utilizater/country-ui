import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { isCountyCode, isLetter } from '../utils';

type Prop = {
  countryRequest: (countryCode: string) => Promise<void>;
};
export const InputComponent: React.FC<Prop> = ({ countryRequest }) => {
  const [text, setText] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { value } = e.target;
    if (isLetter(value) && value.length <= 2) {
      setText(value.toUpperCase());
    }
  };

  const onClick = (): void => {
    countryRequest(text);
  };
  const buttonDisabled = !isCountyCode(text);

  return (
    <Box flex={1} m={2}>
      <TextField
        value={text}
        onChange={onChange}
        id='outlined-basic'
        label='Country Code'
        variant='outlined'
        placeholder='Country Code (2 letter code)'
        fullWidth
      />
      <Box mt={1}>
        <Button variant='contained' onClick={onClick} disabled={buttonDisabled}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
