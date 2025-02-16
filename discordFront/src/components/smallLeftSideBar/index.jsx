import React, { useEffect, useState } from 'react'
const smallLeftSideBar = (props) => {
  const [commonState , setState] = useState({})
  const [active , setActive] = useState(false)
  const profileSelector = (obj)=>{
    console.log("obj ",obj)
    setState({
      selectedProfile:obj
    })
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
  const createProfieLi=()=>{
    console.log("enter")
    const profileList = leftSideBarProfileData.map((data,index)=>{
    return (<li className = '' key={index}>
      <div className="smallProfiler posRelative">
        <div className="profileIconContainer" onClick={()=>{profileSelector({...data,index})}}>
        <span className={`activeProfile ${commonState.selectedProfile && commonState.selectedProfile.index == index ? 'active' : ''}`}></span>
          <img src="images/selfie.jpg" alt="profile" class = "profileIcon"/>
        </div>
      <span className="msgNo">{data.msgNo}</span>
      <span className="nameToolTip">{data.name}</span>
      </div>
     </li>)
    })
    console.log("profileList ",profileList)
    return profileList
  }
  return (
    <>
    <ul className="smallLeftSideBarUl minFullHeight">
      <li>
        <div className="smallSideBarIconContainer">
        <img src="images/appIconWhite.svg" alt="icon" class = "appIcon" />
        </div>
        <span className="logoSeperator"></span>
      </li>
      {createProfieLi()}
      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
          <span className={`activeProfile ${active ? 'active' : ''}`}></span>
            <img src="images/greenPlusIcon.png" alt="profile" class = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>

      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
            <img src="images/greenDownLoad.png" alt="profile" class = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>

      <li className = 'overflowHidden'>
        <div className="smallProfiler posRelative">
          <div className="profileIconContainer greenPlusIconContainer displayFlexCenterAlign">
            <img src="images/compass.png" alt="profile" class = "profileIcon greenPlus"/>
          </div>
        </div>
      </li>
    </ul>
    </>
  )
}

export default smallLeftSideBar