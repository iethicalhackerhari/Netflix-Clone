import React, { useState} from 'react'
import { useLocation } from 'react-router-dom';
import Grid from '../../Components/Grid/Grid'
import NavBar from '../../Components/NavBar/NavBar'
import { motion } from 'framer-motion';
import './SearchedPage.css'


function SearchedPage() {
    const location = useLocation()
    const [movie,setMovie]=useState([])
    let data=[]
    
    
    const setMovieHandler = (mov)=>{
        if(mov)
        {setMovie(mov)
        }
        
    }

  return (
    <motion.div
    
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.5 }}

    >
    <div>
        <NavBar setMovieHandler={setMovieHandler} />
        <div className="searched-movie-div">
        <Grid movie={movie?movie:''} />
        </div>
    </div>
    
    </motion.div>
  )
}

export default SearchedPage