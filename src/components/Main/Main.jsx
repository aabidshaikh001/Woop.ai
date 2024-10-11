import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context.jsx'

function Main() {
   const {
    prevPromts,
    setprevPromts,
    onSent,
    setrecentPromt,
    recentPromt,
    showResult,
    loading,
    resultdata,
    input,
    setinput
   } = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>WOOP.AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {
                !showResult ? <>
                <div className="greet">
                <p><span>Hello</span>👋</p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize this concept:urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Imporve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div></>:
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPromt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />{loading?
                    <div className='laoder'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
                </div>

            </div>
            }
            
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
                <div>
                    
                    {input?<img onClick={()=>onSent()} src={assets.send_icon}  />:null}
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Main