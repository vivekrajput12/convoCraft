import React, { useEffect, useState } from 'react'
import {setSelectedChannel} from '../../slice/commonSlice'
import { useDispatch,useSelector } from 'react-redux'
const smallLeftSideBar = (props) => {
  // const [commonState , setState] = useState({})
  const [active , setActive] = useState(false)
  const dispatch = useDispatch();

  const profileSelector = (obj)=>{
    dispatch(setSelectedChannel(obj))
  }
  const leftSideBarProfileData = [
    {
      name:'vivek',
      imgSrc:'',
      msgNo:12
    },
    {
      name:'vivek 1',
      imgSrc:'',
      msgNo:12
    },
    {
      name:'vivek 12',
      imgSrc:'',
      msgNo:12
    },
    {
      name:'vivek 13',
      imgSrc:'',
      msgNo:12
    },
    {
      name:'vivek 14',
      imgSrc:'',
      msgNo:12
    }
  ]
  const commonLocalStore = useSelector(((state)=>state.commonLocalStore))
  const createProfieLi=()=>{
    const profileList = leftSideBarProfileData.map((data,index)=>{
    return (<li className = '' key={index}>
      <div className="smallProfiler posRelative">
        <div className="profileIconContainer" onClick={()=>{profileSelector({...data,index})}}>
        <span className={`activeProfile ${commonLocalStore.selectedChannel && commonLocalStore.selectedChannel.index == index ? 'active' : ''}`}></span>
          <img src="images/selfie.jpg" alt="profile" className = "profileIcon"/>
        </div>
      <span className="msgNo">{data.msgNo}</span>
      <span className="nameToolTip">{data.name}</span>
      </div>
     </li>)
    })
    return profileList
  }
  return (
    <>
    <ul className="smallLeftSideBarUl minFullHeight">
      <li>
        <div className="smallSideBarIconContainer" onClick={()=>{profileSelector(null)}}>
        <img src="images/appIconWhite.svg" alt="icon" className = "appIcon" />
        </div>
        <span className="logoSeperator"></span>
      </li>
      {createProfieLi()}
      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
          <span className={`activeProfile ${active ? 'active' : ''}`}></span>
            <img src="images/greenPlusIcon.png" alt="profile" className = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>

      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
            <img src="images/greenDownLoad.png" alt="profile" className = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>

      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
            <img src="images/compass.png" alt="profile" className = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>
    </ul>
    </>
  )
}

export default smallLeftSideBar