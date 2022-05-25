import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { AiFillCaretDown, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import Axios from '../../Utils/axios'

function NavBar(props) {
  const [innerWidth, setInnerWidth] = useState()
  const [searched, setSearched] = useState([])
  const [input, setInput] = useState('')
  const [searchClose, setSearchClose] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    window.addEventListener('resize', (e) => {

      setInnerWidth(e.target.innerWidth)
    })
  }, [window.innerWidth])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50)
        setScroll(true);
      else
        setScroll(false)
    })

    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  const searchHandler = (e) => {
    const query = e.target.value;
    setInput(query)
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=df06cdde7ccaf0e80f38eb7206914180&language=en-US&query=${query}&page=1&include_adult=true`).then((response) => {
      setSearched(response.data.results)
      
      props.setMovieHandler(response.data.results)
    })
  }

  return (
    <div className={`navbar-container ${scroll ? 'background-color' : ''} `}>
      <img onClick={() => window.scroll(0, 0)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix Logo" className="logo" />
      {window.innerWidth < 1000 ? (<div class="dropdown">
        <button class="dropbtn">Browse<AiFillCaretDown /></button>
        <div class="dropdown-content">
          <NavLink style={{ textDecoration: 'none' }} to={'/'}><p>Home</p></NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={'/tv-show'}><p>TV Shows</p></NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={'/music'}><p>Music</p></NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={'/upcoming'}><p>Upcoming</p></NavLink>

        </div>
      </div>) : (<div className="navbar-links">
        <NavLink style={{ textDecoration: 'none' }} to={'/'}><p>Home</p></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={'/tv-show'}><p>TV Shows</p></NavLink>
        <p>Music</p>
        <NavLink style={{ textDecoration: 'none' }} to={'/upcoming'}><p>Upcoming</p></NavLink>
      </div>)}

      <div className="search-container">
        <input type="text" onChange={(e) =>{ 
          searchHandler(e)
          setSearchClose(true)
        }}
         className={`search-input   ${window.location.pathname == '/searched' ? 'show-inp' : ''}  `} value={input} />
        {searchClose ?
          <AiOutlineCloseCircle onClick={()=> navigate(-1)} /> :
          <BsSearch onClick={() => {
           
            navigate('/searched')
          }
          } />}
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" className="avatar" />
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={(e)=>e.target.pauseVideo()} />; */}

    </div>
  )
}


export default NavBar