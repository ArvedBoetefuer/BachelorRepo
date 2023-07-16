import React from "react";
import { Radio } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export default function Survey4() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
    <FormControl style={{
      marginLeft: '10%',
      marginRight: '10%'

    }}>
      <h1  className="text-xl text-blue2-1">Ich habe in den letzten 2 Stunden Stimmen gehört die sonst keiner hören konnte</h1>  
      <RadioGroup 
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-"
        value={value}
        onChange={handleChange}
        sx={{
            '& .MuiSvgIcon-root': { 
              fontSize: 28,
              '&.Mui-checked': {
            color: 'primary',
          },

            },
            
          }}
        >
          <FormControlLabel value="+++" control={<Radio />} label="Stimme voll zu" />
          <FormControlLabel value="++" control={<Radio />} label="Stimme zu" />
          <FormControlLabel value="+" control={<Radio />} label="Stimme eher zu" />
          <FormControlLabel value="0" control={<Radio />} label="neutral" />
          <FormControlLabel value="-" control={<Radio />} label="Stimme eher nicht zu" />
          <FormControlLabel value="--" control={<Radio />} label="Stimme nicht zu" />
          <FormControlLabel value="---" control={<Radio />} label="Stimme gar nicht zu"/>
      </RadioGroup>
    </FormControl>
    
  );

  }