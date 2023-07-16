import React from 'react'
import Header from '../components/Header'
import Icon from '../components/Icon'

function EndCard() {
  return (
    <div>
      <Header></Header>
        <div style={{
          marginTop: "30px",
          marginLeft: '10%',
          marginRight: '10%'
         }}>
            <h1 className='text-3xl text-center text-blue2-1 font-face-gm'> Vielen Dank, dass Sie am Survey teilgenommen haben!</h1>
            <br></br>
            
        </div>

      <div style={{
                display: 'flex',
                justifyContent: "center"
            }}>
                <Icon></Icon>
            </div>
            <h1 style={{
                marginTop: '30px'
            }} className='text-l text-center text-blue2-1 font-face-gm'> Sie können die Anwendung nun Schließen</h1>
    </div>
  )
}

export default EndCard
