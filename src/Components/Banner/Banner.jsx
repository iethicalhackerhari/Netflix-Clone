import React, { useEffect, useState } from 'react'
import Axios, { requests } from '../../Utils/axios'
import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import genres from '../../Utils/genres'
import './Banner.css'
import CardDetails from '../CardDetails/CardDetails'
import { motion } from 'framer-motion'




function Banner(props) {

    const [banner, setBanner] = useState({})
    const [showCardMovie, setShowCardMovie] = useState()

    useEffect(() => {
        if(props.tv){
            Axios.get(requests.fetchTopRatedTV).then((response) => {
                const randomNumber = Math.floor(Math.random() * (response.data.results.length - 1))
                setBanner(response.data.results[randomNumber]);
               
            })

        }else{
        Axios.get(requests.fetchTrending).then((response) => {
            const randomNumber = Math.floor(Math.random() * (response.data.results.length - 1))
            setBanner(response.data.results[randomNumber]);
            
        })
    }
    }, [])

   

   const handleClick = (banner)=>{
   setShowCardMovie(banner)
   window.scroll(0,0)
   }

    return (

        <div className='banner-container' style={{ minWidth: '100%', minHeight: '30vh' }}>
            {/* ${banner ? banner.backdrop_path : */}
            <div className="banner-background" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,}}>
        
                <h1 className="banner-title">{banner? banner.original_title || banner.name:''}</h1>
                <p className="banner-description">{banner? banner.overview:''}</p>
                {banner.genre_ids && <ul className="genre">
                    {banner?banner.genre_ids.map(genre=>{
                       return genres.map((g,index)=>{
                            if(g.id===genre)
                            return <li key={index}>{g.name}</li>
                        })
                    }):''}
                </ul>}
                
                <div className="banner-buttons">
                    <button className="banner-button play" onClick={()=>{handleClick(banner)}}><BsFillPlayFill/>Play</button>
                    <button className="banner-button more-info"><AiOutlineInfoCircle/>More Info</button>
                </div>

            </div>
            <div className="gradient"></div>
         
                    <CardDetails tv={props.tv} clickHandler={handleClick} movie={showCardMovie}/>
                    
        </div>
    )
}

export default Banner