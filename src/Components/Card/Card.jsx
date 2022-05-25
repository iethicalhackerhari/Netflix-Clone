import React, { useEffect, useState } from 'react'
import Axios, { requests } from '../../Utils/axios'
import genre from '../../Utils/genres';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import './Card.css'

import CardDetails from '../CardDetails/CardDetails';
import { motion } from 'framer-motion';


export default function Card(props) {
  

  const [large,setLarge]=useState(false)
  const [card, setCard] = useState([])
  const [movie,setMovie]= useState()

  useEffect(() => {
   
      Axios.get(props.request).then((response) => {
          setCard(response.data.results);
        })
        
        
  }, [])
  
  useEffect(()=>{
    if(window.innerWidth > 800)
    setLarge(true)
    window.addEventListener('resize',(e)=>{
      if(e.target.innerWidth > 800)
      setLarge(true)
      else
      setLarge(false)
      
    })
  },[window.innerWidth])

  useEffect(()=>{

  },[movie])
  const clickHandler =(c)=>{
    window.scroll(0,0)
    setMovie(c)
  }

  
  if(!card){
    return <h1>Loading...</h1>
  }else{
  return (
    <>
    <div className='card-row'>
      <h1>{props.title}</h1>
      <Splide aria-label="My Favorite Images"
      className='splide'
      options={ {
        perPage:props.path=='backdrop_path'? large? 6:3:4||props.path=='poster_path'? large? 10:4:4,
        rewind: true,
        width : '100%',
        gap   : '1rem',
        padding:large?'4.5rem':'2rem',
        arrows:large?true:false,
        pagination:false,
        autoplay:props.title=='Trending'?true:false,
        interval:'3000',
        rewindSpeed:'1000',
        speed:'500'
        
        
      } }

      >
       
         
        {
          card?card.map((c,index)=>{

            return <SplideSlide key={card.imdb_id}  className='splide-slide' onClick={()=>clickHandler(c)}>
              <div className="image">
              
              <img id={index} src={`https://image.tmdb.org/t/p/original/${props.path=='poster_path'?c.poster_path:c.backdrop_path}`} alt="Image 1" />
              </div>
            </SplideSlide>
           
          }):'Loading'
        }
        
      
      </Splide>
      <motion.div
    
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.5 }}

    >
      <div>
      <CardDetails clickHandler={clickHandler} movie={movie} tv={props.tv}/>
      </div>
      </motion.div>
      {/* <Trailer trailer={trailer}/> */}
    </div>
  </>)}
}
