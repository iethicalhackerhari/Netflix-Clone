import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import {requests} from '../../Utils/axios'
import './CardRow.css'

export default function CardRow(props) {
 

  return (
    <div>
      {<Card request={props.tv?requests.fetchTopRatedTV:requests.fetchTrending} tv={props.tv} path='poster_path' title='Trending'/>}
      {<Card request={props.tv?requests.fetchAiringTodayTV:requests.fetchAction} tv={props.tv}  path= 'backdrop_path' title={props.tv?'Airing Today':'Action'}/>}
      {<Card request={props.tv?requests.fetchComedyTV:requests.fetchComedy} path= 'backdrop_path' title='Comedy' tv={props.tv}/>}
      {<Card request={props.tv?requests.fetchActionTV:requests.fetchHorror} path= 'backdrop_path' title={props.tv?'Animated Movies':'Horror'} tv={props.tv} />}
      {<Card request={props.tv?requests.fetchRomanceTV:requests.fetchRomance} path= 'backdrop_path' title='Romance'tv={props.tv} />}
    </div>
  )
}
