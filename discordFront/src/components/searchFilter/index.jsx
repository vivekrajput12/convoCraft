import React, { useEffect, useState } from 'react'
import '../../media/css/searchFilter.css'
const SearchFilter = (props) => {
    const [openCenterBox,setOpenCenterBox] = useState(false)
    return(
        <>     
        <div className='searchFilter'>
            <input placeholder={props.placeHolder} onClick={props.openSearchAtCenter ? ()=>setOpenCenterBox(!openCenterBox) : ''}/>
        </div>
        {openCenterBox && 
            <>
            <div className='centerSerachBoxContainer'>
                <div>
                <input type="text" placeholder={props.placeHolderForCenterBox}/>
                </div>
            </div>
            <div className='customOverLay' onClick={()=>{setOpenCenterBox(!openCenterBox)}}>
                
            </div>
            </>
        }
        </>
    )
}
export default SearchFilter