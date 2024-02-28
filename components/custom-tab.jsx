import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function CustomTab(props) {
  const [currentTabIndex,setCurrentTabIndex] = useState(1)

  return (
    <>
      {props.indexVal == currentTabIndex && <div className='CustomTabContentSelected'>
        <div className='tabInfo'>
          <p>{props.title}</p>
          <FontAwesomeIcon icon={faXmark} onClick={()=>{
              
          }}/>
        </div>
      </div>}
      {props.indexVal != currentTabIndex && <div className='CustomTabContent'>
        <div className='tabInfo'>
          <p>{props.title}</p>
          <FontAwesomeIcon icon={faXmark} onClick={()=>{
              
          }}/>
        </div>
      </div>}
    </>
  )
}
