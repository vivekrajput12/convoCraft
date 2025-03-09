import React from 'react'
import { ChannelOptions } from './channelOption'
import '../../../../media/css/channelNavigation.css'
import { EventCreation } from './eventCreation'
import { useSelector } from 'react-redux'
export const ChannelNav = (props) => {
  const commonLocalStore= useSelector(state=>state.commonLocalStore)
  return (
    <div className='channelContainer'>
    <ChannelOptions
    selectedChannel={commonLocalStore.selectedChannel}
    />
    <EventCreation/>
    </div>
  )
}
