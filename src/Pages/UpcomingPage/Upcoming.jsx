import { motion } from 'framer-motion'
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import UpcomingCarousel from '../../Components/UpcomingCarousel/UpcomingCarousel'


function Upcoming() {
  return (
    <motion.div
    
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    transition={{ duration:0.5 }}
    
    >
    <div>
        <NavBar/>
       <UpcomingCarousel/>
        </div>
        </motion.div>
  )
}

export default Upcoming