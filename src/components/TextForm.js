
import React, {useState} from 'react';


export default function TextForm(prop)
{
    const handleOnChange=(event)=>
    {
        console.log("TextAreaOnChnage");
        settextAreaText(event.target.value);
    }
    const handleOnClick=()=>
    {
        settextAreaText("")
    }
    const handleUpClick=()=>
    {
        console.log("upperCase was fired");
        settextAreaText("you have clicked on handleClick")
       const newText= textAreaText.toUpperCase();
       settextAreaText(newText)

    }

    const [textAreaText,settextAreaText]=useState("Enter Text Here");

    return(
        <>
        <div className='container'>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label" style={{color: prop.mode==='light'?'black':'white'}}>{prop.heading}</label>
            <textarea className="form-control"value={textAreaText} onChange={handleOnChange} onClick={handleOnClick} id="mybox" rows="8" style={{backgroundColor: prop.mode==='light'?'white':'gray',color: prop.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert To Upper</button>
      </div>
      <div className="container my-2">
        <h1 style={{color: prop.mode==='light'?'black':'white'}}>Your Text Summary</h1>
        <p style={{color: prop.mode==='light'?'black':'white'}}> Word {textAreaText.split(" ").length} and {textAreaText.length} characters</p>
        <p style={{color: prop.mode==='light'?'black':'white'}}>{0.008*textAreaText.split(" ").length} Minutes to read</p>
      </div>
        </>
        

    )

  
}