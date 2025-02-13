import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Input from '@mui/material/Input/Input';
import { useTheme } from '@mui/styles';

type Props = {
  up: boolean
}

export default function HeaderSearch(props: Props) {
  const [input, setInput] = useState('');
  const history = useHistory();
  const { t }: { t: any } = useTranslation();
  const theme: any = useTheme();
  const handleClickSearch = () => {
    history.push(`/search/${input.trim()}`);
  };


  return (
    <FormControl sx={props.up ? { m: 1, width: '25ch' } : { m: 1, width: '90%' }} variant='outlined'>
      <InputLabel htmlFor='outlined-adornment-password'>{t('home.searchHint')}  </InputLabel>
      <Input
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            handleClickSearch();
          }
        }}
        sx={
          {
            display: 'flex',
            flex: '1 1 auto',
            marginRight: theme.spacing(1),
            '& .MuiInputBase-input': {
              color: theme.palette.getContrastText(theme.palette.background.paper),
              borderColor: 'red',

            },
            '& .MuiInputLabel-root': {
              color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : undefined,
            },
          }
        }
        id='outlined-adornment-password'
        type='text'
        value={input}
        onChange={(v) => {
          setInput(v.target.value);
        }}
        endAdornment={
          <InputAdornment position='end' onClick={handleClickSearch}>
            <IconButton
              aria-label='toggle password visibility'
              edge='end'
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}