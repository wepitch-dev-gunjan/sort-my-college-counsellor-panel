import React from 'react'
import "./widget.scss"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GradeIcon from '@mui/icons-material/Grade';


const Widgets = ({type}) => {

  let data;
  switch(type){
    case "followers": 
            data={
            title:"Followers",
            isMoney: false,
            link: "See All Users",
            icon: <PeopleAltIcon className='userIcon'/>
    }; break;

    case "ratings": 
    data={
    title:"Ratings",
    isMoney: false,
    link: "See All Rating",
    icon: <GradeIcon className='userIcon'/>
    }; break;


    case "groupSession": 
    data={
    title:"Group Session",
    isMoney: false,
    link: "See All Session",
    icon: <GroupsIcon className='userIcon'/>
    }; break;


    case "privateSession": 
    data={
    title:"Private Session",
    isMoney: false,
    link: "See All Session",
    icon: <Diversity1Icon className='userIcon'/>
    }; break;

    case "nextMeeting": 
    data={
    title:"Next Meeting",
    isMoney: false,
    link: "See Next Meeting",
    icon: <ArrowForwardIosIcon className='userIcon'/>
    }; break;

    default:
      data={
        title:"",
        isMoney:false,
        link:"Default",
        icon:<ArrowForwardIosIcon className='userIcon'/>
      }
      break;
  }
  return (
    <div className="widget">
<div className="left">
    <span className='title'>{data.title}</span>
    <span className='counter' >132</span>
    <span className='link'>{data.link}</span>
</div>
<div className="right">
  <div className="percentage negative">
  <KeyboardArrowUpIcon/>
    24%
  </div>
  {data.icon}
  {/* <PersonIcon className='userIcon'/> */}
  
</div>
    </div>
  )
}

export default Widgets