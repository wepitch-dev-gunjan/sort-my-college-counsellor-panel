import { Autocomplete, Stack, TextField } from '@mui/material';
import './style.scss';
import { MdOutlineChat } from "react-icons/md";

const Help = () => {
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }, 
  ];
  return (
    <div className='Help-container'>
      <div className="help-search">
        <h1>Welcome! How can we help?</h1>
        <Stack spacing={2} sx={{ width: 300 }}>
  
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
      </div>
      <div className="chat-help">
        <MdOutlineChat size={32} color='white'/>
      </div>
    </div>
  );
};

export default Help;