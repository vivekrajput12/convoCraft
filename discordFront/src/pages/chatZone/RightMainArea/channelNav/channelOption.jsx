import React, { useState } from 'react'
import SearchFilter from '../../../../components/searchFilter';
export const ChannelOptions = (props) => {
  const [commonState , setCommonState] = useState({});
  const handleChannelOption = ()=>{
    setCommonState({channelClicked:!commonState.channelClicked})
  }
  const channelOptions = [
    {label:'Invite People',value:'1',icon:'/images/invitePeople.svg',className:'blueTxt'},
    {label:'Server Setting',value:'2',icon:'/images/invitePeople.svg'},
    {label:'Create Channel',value:'3',icon:'/images/invitePeople.svg'},
    {label:'Create Category',value:'4',icon:'/images/invitePeople.svg'},
    {label:'Create Event',value:'5',icon:'/images/invitePeople.svg'},
    {label:'App Dictionary',value:'6',icon:'/images/invitePeople.svg'},
    {label:'Notification Setting',value:'7',icon:'/images/invitePeople.svg',className:''},
    {label:'Privacy Setting',value:'8',icon:'/images/invitePeople.svg',className:''},
    {label:'Edit Server Profile',value:'9',icon:'/images/invitePeople.svg'},
    {label:'Hide Muted Channels',value:'10',icon:'/images/invitePeople.svg'},
  ]
  const createAllOptions = ()=>{
    return channelOptions.map((option,index)=>{
        return <li key = {index} className='displayFlexVerticallyAlign justifyContentSpaceBetween'>
            <span className={option.className}>{option.label}</span>
            <img src={option.icon} alt="icon" className='itemIcon'/>
        </li>
    })
  }
  return (
    <div className='channelOptionsContainer'>
   {props.selectedChannel && <div className='channelOptions' onClick={()=>handleChannelOption()}>
    <span>{props.selectedChannel.name}</span>
    <div className={`downArrow flRight ${commonState.channelClicked ? 'active' : ''}`}></div>
    </div>}
    {!props.selectedChannel && <div className='channelOptions'>
    <span>
      <SearchFilter
      placeHolder='Find or start a converstation'
      openSearchAtCenter={true}
      placeHolderForCenterBox='where would you like to go?'
      />
    </span>
    </div>}
    {commonState.channelClicked && <>
        <ul className='channelOptionList'>
           {createAllOptions()} 
        </ul>
    </>}
    </div>
  )
}