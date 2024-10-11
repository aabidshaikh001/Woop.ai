import React,{useContext, useState} from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets.js'
import { Context } from '../../context/context.jsx'

function SideBar() {
  const [extended, setextended] = useState(false)
  const {onSent,prevPromts,setrecentPromt,newChat}=useContext(Context)
  const loadpromt = async(prompt)=>{
    setrecentPromt(prompt)
    await onSent(prompt)
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""  />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended?<p>New Chat</p>:null }
         
        </div>
        {extended?<div className="recent">
          <p className="recent-title">Recent</p>
          {prevPromts.map((item,index)=>{
            return(
              <div className="recent-entry" onClick={()=>loadpromt(item)}>
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>

            )

          })}
         
        </div>:null}
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
        {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
         { extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default SideBar