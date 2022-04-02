import React from "react"

const Charts = (props) => {

  console.log(props.data)
  
  return (
    <div>
      {props.data.enunciation}
    </div>
  )
}

export default Charts