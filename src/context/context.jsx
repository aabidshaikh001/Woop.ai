import { createContext, useState} from "react";
import run from "../Config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setinput] = useState("")
    const [recentPromt,setrecentPromt]=useState("")
    const [prevPromts,setprevPromts]=useState([])
    const [showResult,setshowResult]=useState(false)
    const [loading,setloading]=useState(false)
    const [resultdata,setresultdata]=useState("")
    const delayPara = (index,nextWord)=>{
      setTimeout(function () {
        setresultdata(prev=>prev+nextWord)
      },75*index)

    };
    const newChat =()=>{
      setloading(false)
      setshowResult(false)
    }
  const onSent = async (prompt) => {
    setresultdata("")
    setloading(true)
    setshowResult(true)
    let response;
    if (prompt !== undefined) {
      response = await run(prompt)
      setrecentPromt(prompt)
     
    }
   else{
     setprevPromts(prev=>[...prev,input])
    setrecentPromt(input)
    response =  await run(input);

   }
   let responseArray = response.split('**');
   let newArray = "" ;
   for(let i=0;i<responseArray.length;i++)
   {
    if (i===0 || i%2 !== 1) {
      newArray += responseArray[i]

    }
    else {
      newArray += '<b>'+responseArray[i]+'</b>';

    }
   }
   let response2 = newArray.split('*').join("<br/>")
   let newresponseArray = response2.split(" ")
   for (let i = 0; i < newresponseArray.length; i++) {
    const nextWord = newresponseArray[i]
    delayPara(i,nextWord+" ")
    
   }
   setloading(false)
   setinput("")
  };

 
  const contextValue = {
    prevPromts,
    setprevPromts,
    onSent,
    setrecentPromt,
    recentPromt,
    showResult,
    loading,
    resultdata,
    input,
    setinput,
    newChat

  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
