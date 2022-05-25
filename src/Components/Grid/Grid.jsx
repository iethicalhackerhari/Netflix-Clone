import React,{useState,useEffect} from 'react'
import CardDetails from '../CardDetails/CardDetails'
import Axios from '../../Utils/axios'
import './Grid.css'
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion'
export default function Grid(props) {
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />

  const [card, setCard] = useState([])
  const [movie, setMovie] = useState()

  useEffect(() => {   
    if(!props.movie)
       { Axios.get(props.request).then((response) => {
            setCard(response.data.results);
          })}        
          else{
            setCard(props.movie)
          }  
    }, [props.movie])
    
    const clickHandler = (mov)=>{
      setMovie(mov)
      window.scroll(0,0)
  
    }





    
  return (
  
    <>
    
    <div className='grid-div'>
      
    {

      card?card.map((card,index)=>{
        return (
          <img key={index} onClick={()=>{clickHandler(card)}} className='grid-img' src={`https://image.tmdb.org/t/p/original/${card.poster_path}`} alt="" />
        )
      }):''

    }

    </div>

    <div className="card-details-div">
      
    <CardDetails tv={props.tv} clickHandler={clickHandler} movie={movie}/>
    
    </div>
    </>
  )
}
