import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  const theme = createTheme({
    palette: {
      primary:{
        main: '#0f6c86',
      },
    },
    typography:{
      fontFamily: 'MyriadPro',
    }
  })

function SurveyAudio4() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
        width: 250,
        marginTop: "40px",

    }}>
      <div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
      }}>
          <h1 className='text-blue2-1 font-face-gm text-center text-2xl'>Haben Sie in der letzten Audiospur einen Ton gehört?</h1>
      </div>
      <div style={{
        marginTop: "20px",
        marginLeft: "20px"
      }}>
        <h1 className='text-left text-xl font-face-gm text-blue2-1'>Sehr sicher </h1>

      </div>
      <div style={{
        marginTop: '20px'
      }}>
      <Box sx={{ height: 200 }}>
        
        <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
          orientation="vertical"
          color='primary'
          valueLabelDisplay="auto"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
        />
      </Box>
        
      
      </div>
      <div style={{
        marginTop: "20px",
        marginLeft: "20px"
      }}>
        <h1 className='text-left font-face-gm text-xl text-blue2-1'>Sehr sicher nicht</h1>
      </div>

    
    
      <div style={{
          
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
         }}>
      <button style={{
          width: "150",
          paddingLeft: "28px",
          paddingRight: "28px",
          paddingTop: "30px",
          paddingBottom: "30px",
          marginBottom: "80px",
          position: 'absolute',
          bottom: "0"
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/audioTest5">Weiter zu 5</Link></button>
      </div>
      </Box>
    </ThemeProvider>
  )
}

export default SurveyAudio4
