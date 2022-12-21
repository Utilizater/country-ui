import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Country } from '../App';

const HEADER_COLOR = 'rgb(167,201,66)';

type OutputComponentProp = {
  country: Country;
};
export const OutputComponent: React.FC<OutputComponentProp> = ({ country }) => {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Box m={2}>
      <TableContainer component={Paper}>
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: HEADER_COLOR }}>
                <HeaderCell name='Country name' />
              </TableCell>
              <TableCell sx={{ background: HEADER_COLOR }}>
                <HeaderCell name='Capital' />
              </TableCell>
              <TableCell sx={{ background: HEADER_COLOR }}>
                <HeaderCell name='State name' />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography align='center'>{country.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography align='center'>{country.capital}</Typography>
              </TableCell>
              <TableCell>
                <BodyCell>
                  {country.state_names ? (
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        labelId='demo-simple-select-helper-label'
                        id='demo-simple-select-helper'
                        value={age}
                        onChange={handleChange}
                      >
                        {country.state_names.split(',').map((state) => {
                          return (
                            <MenuItem key={state} value={state}>
                              {state}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  ) : null}
                </BodyCell>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const CELL_WIDTH = '300px';

type HeaderCellProps = {
  name: string;
};
const HeaderCell: React.FC<HeaderCellProps> = (props) => {
  return (
    <Box p={1} width={CELL_WIDTH}>
      <Typography color='white' fontWeight='bold' align='center'>
        {props.name}
      </Typography>
    </Box>
  );
};

type BodyCellProps = {
  children: JSX.Element | null;
};
const BodyCell: React.FC<BodyCellProps> = ({ children }) => {
  return (
    <Box
      width={CELL_WIDTH}
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='80px'
    >
      {children}
    </Box>
  );
};
