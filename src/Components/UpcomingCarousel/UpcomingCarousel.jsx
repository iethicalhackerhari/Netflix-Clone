import React, {useState, useRef} from 'react'
import Grid from '../Grid/Grid'
import { requests } from '../../Utils/axios'
import './UpcomingCarousel.css'
function UpcomingCarousel() {
    const [active,setActive]=useState('movies')

  return (
    <div className='UpcomingCarousel'> 
    <div className="select">
        <div className='inner'>
        <p className={active==='movies'?'active':''} onClick={()=>setActive('movies')}>Movies</p>
        <p className={active==='tvshow'?'active':''} onClick={()=>setActive('tvshow')}>TV shows</p>
        </div>
        <div className="grid-component" >    
        {active==='movies'?<Grid request={requests.fetchUpcomingMovies}/>:''}
        {active==='tvshow'?<Grid tv={true} request={requests.fetchPopularTV}/>:''}
    </div>
    </div>

    </div>
  )
}

export default UpcomingCarousel