import React from 'react'
import NavBar from '../../../components/navBar'
import {ChannelNav} from './channelNav'
import { ChatMainBox } from './chatMainBox'
export const RightMainArea = () => {
  return (
    <div className = 'rightMainBox displayFlex overflowUnset'>
      <ChannelNav/>
      <ChatMainBox/>
    </div>
  )
}
