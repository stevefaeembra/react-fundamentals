// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// matches what the text says it should be as well as `fontStyle: 'italic'`
//const smallBox =  <div className="box box--small" style={{fontStyle: 'italic', backgroundColor : "lightblue"}}>small lightblue box</div>
//const mediumBox = <div className="box box--medium" style={{fontStyle: 'italic', backgroundColor : "pink"}}>medium pink box</div>
//const largeBox = <div className="box box--large" style={{fontStyle: 'italic', backgroundColor : "orange"}}>large orange box</div>

function Box({style, size, ...rest}) {
  const classes = `box box--${size}`
  return <div 
    className={classes} 
    style={{fontStyle: 'italic', ...style}}
    {...rest}
  />
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size="medium" style={{backgroundColor: 'orange'}}>medium orange box</Box>
      <Box size="large" style={{backgroundColor: 'pink'}}>medium orange box</Box>
    </div>
  )
}

export default App
