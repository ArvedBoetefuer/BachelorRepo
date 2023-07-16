import React from "react";
import Survey1 from "../components/Survey1";
import Survey2 from "../components/Survey2";
import Survey3 from "../components/Survey3";
import Survey4 from "../components/Survey4";
import { ThemeProvider , createTheme} from "@mui/material";
import Header from "../components/Header";
import AudioButton from "../components/AudioButton";
import Survey6 from "../components/Survey6";
import Survey7 from "../components/Survey7";
import Survey8 from "../components/Survey8";
import Survey9 from "../components/Survey9";
import Survey10 from "../components/Survey10";


const theme = createTheme({
    palette: {
      primary:{
        main: '#004b5a',
      },
    },
    typography:{
      fontFamily: 'MyriadPro',
    }
  })
function MainSurvey() {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Header></Header>
            <br></br>
            <Survey1></Survey1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <br></br>
            <Survey2></Survey2>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>


            <Survey3></Survey3>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>


            <Survey4></Survey4>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>


            <Survey6></Survey6>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

            <Survey7></Survey7>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

            <Survey8></Survey8>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

            <Survey9></Survey9>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

            <Survey10></Survey10>
            <br></br>
            <hr></hr>
            <br></br>
            

            <div style={{
              diplay: 'flex',
              justifyContent: 'center',
               alignContent: 'center',
              }}>
              <AudioButton></AudioButton>
            </div>
            
        </div>
        </ThemeProvider>
    )
}

export default MainSurvey;