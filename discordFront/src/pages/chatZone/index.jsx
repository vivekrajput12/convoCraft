import React, { Fragment } from 'react'
import SmallLeftSideBar from '../../components/smallLeftSideBar'
import { RightMainArea } from './RightMainArea'
import '../../media/css/common.css'
import '../../media/css/smallLeftSideBar.css'
import '../../media/css/chatZone.css'
const ChatZone = () => {
    const handleChat = ()=>{
        
    }
  return (
    <div className='outterMostContainer displayFlex'>
    <SmallLeftSideBar/>
    <RightMainArea/>
    </div>
  )
}

export default ChatZone