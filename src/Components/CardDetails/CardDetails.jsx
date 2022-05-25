import React, { useState, useEffect } from 'react'
import Trailer from '../Trailer/Trailer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Axios from '../../Utils/axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CardDetails.css'
import { motion } from 'framer-motion';
function CardDetails(props) {
 
  const [cardDetails, setCardDetails] = useState('none')
  const [trailer, setTrailer] = useState('')
  const [otherTrailers, setOtherTrialers] = useState([])
  const [cast, setCast] = useState([])
  const [showTailers,setShowTrailers]=useState(false)

  useEffect(() => {
    if (props.movie) {
      if (trailer) {
        setTrailer('')
      } else {
        const c = props.movie
        const movirOrTv = props.tv ? 'tv' : 'movie'
        Axios.get(`https://api.themoviedb.org/3/${movirOrTv}/${c.id}/videos?api_key=df06cdde7ccaf0e80f38eb7206914180&language=en-US`).then((response) => {
          setOtherTrialers(response.data.results);
          setTrailer(response.data.results[0].key)
        })

        Axios.get(`https://api.themoviedb.org/3/${movirOrTv}/${c.id}/credits?api_key=df06cdde7ccaf0e80f38eb7206914180&language=en-US`).then((response) => {
          setCast(response.data.cast)
          
        })


      }


      setCardDetails('flex')
    }
  }, [props.movie])

  useEffect(()=>{
    setTrailer(trailer)
  },[trailer])

  const [large,setLarge]=useState(false)
  useEffect(()=>{
      if(window.innerWidth > 1100)
      setLarge(true)
      window.addEventListener('resize',(e)=>{
        if(e.target.innerWidth > 1100)
        setLarge(true)
        else
        setLarge(false)
        
      })
    },[window.innerWidth])


  return (
 
      <div className="main">
          
      <div className='card-details' style={{ display: cardDetails }}>
        <div className="card-details-container" style={{ display: cardDetails }}>
          <div className="top">
            <AiOutlineCloseCircle
              onClick={() => {
                setTrailer('')
                setCardDetails('none')
                setShowTrailers(false)
                props.clickHandler('')
              }} />
            <Trailer trailer={trailer} />
            {/* <div className="gradient"></div> */}
          </div>
          <div className="bottom">
            
            {
            showTailers?
            (otherTrailers.length>1 ? 
            (<div className="other-trailers">
             
              <Splide aria-label="My Favorite Images"
            options={{ 
              width:'100%',
              perPage:large?5:Math.floor(((window.innerWidth)/165)),
              gap:'1rem',
              arrows:large?true:false,
              
             }}>
              
              
              {
                otherTrailers.map((trailers,index)=>{
                 
                return  (index==0?'':<SplideSlide key={index}> <div className="other-trailers-overlay" onClick={()=>{setTrailer(trailers.key)}}> <img className='trailer-img' src={`https://i.ytimg.com/vi/${trailers.key}/hq720.jpg`} alt="" /></div></SplideSlide>)
                })
              }
              
            </Splide>
            </div>) : (<p className='more-videos'>Sorry, No More Videos Available.</p>)):( <p className='more-videos' onClick={()=> setShowTrailers(true)}>More Videos ?</p> )}
            {/* <div className="gradient"></div> */}

            <div className="title">
              <div className="card-title">{props.movie ? props.movie.title || props.movie.name : ''}</div>
              <div className="release-date"><span>Release Date</span>{props.movie ? props.movie.release_date || props.movie.first_air_date : ''}</div>
            </div>
            <div className="description">{props.movie ? props.movie.overview : ''}</div>
            <div className="cast">
              {
                cast ? cast.map((cast,index) => {
                  return (
                    <div key={index} className="castdetails">
                      <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path ? cast.profile_path : props.movie.poster_path}`} alt="" />
                      <small>{cast.character}</small>
                      <p className='cast-name'>{cast.name}</p>
                    </div>
                  )
                }) : ''
              }

            </div>
          </div>
        </div>
      </div>
      </div>
 
 
 
 )
}

export default CardDetails