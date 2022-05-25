
import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'

export default function Trailer(props) {
  
  const [trailer,setTrailer]=useState('')
  useEffect(() => {
   
    setTrailer(props.trailer)
  }, [props.trailer])
  
  return (
    <div  >{props.trailer?<ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} 
    width={props.list?window.innerWidth<800?'150px':'200px':'100%'} 
   height={!props.list?window.innerWidth>800?'500px':'250px':'100px'} 
    controls={!props.list?props.upcoming?false: true:false} 
      
    muted={props.list?true:false} 
    playing={props.list?false:true}
    autoplay 
    style={{marginTop:'0.5rem', pointerEvents: props.list?'none':'' }} 
    loop={props.upcoming?true:false}  />:''}</div>
  )
}
