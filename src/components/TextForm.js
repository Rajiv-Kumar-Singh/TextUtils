import React, { useState } from 'react'


function TextForm(props) {
    const [text, setText] = useState('');
    let newText = text.toUpperCase();
    const handleUpClick = () => {
        // console.log("UpperCase was clicked"+ text);
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () => {
        // console.log("UpperCase was clicked"+ text);
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
        
    }
    const handleCopy = () => {
        // console.log("On change");
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        // console.log("On change");
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear All Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-5" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mintues reading time</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text in the above text box to preview it here"}</p>
            </div>

        </>
    )
}

export default TextForm
