import React from 'react'
import Banner from '../../Components/Banner/Banner'
import CardRow from '../../Components/CardRow/CardRow'
import NavBar from '../../Components/NavBar/NavBar'
import {motion} from 'framer-motion'
const TvShowPage = () => {
  return (
    <motion.div
    
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.5 }}
    
    >
    <div>
        <NavBar/>
        <Banner tv={true}/>
        <CardRow tv={true}/>
    </div>
    </motion.div>
  )
}

export default TvShowPage