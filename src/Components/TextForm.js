import React ,{useState} from 'react'

export default function TextForm(props) {
  const handleUpCase=()=>{
    console.log("Uppercase was clicker"+text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  
  const handleLoCase=()=>{
    console.log("lowercase was clicker"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleDown=()=>{
    
      var text = document.getElementById('exampleFormControlTextarea1').value;
      // Create a Blob object containing the text
      var blob = new Blob([text], { type: 'text/plain' });
      // Create a dummy anchor element
      var downloadAnchor = document.createElement('a');
      // Set the href attribute to the URL of the Blob object
      downloadAnchor.href = URL.createObjectURL(blob);
      // Set the download attribute to the desired filename
      downloadAnchor.download = 'text_file.txt';
      // Append the anchor element to the body
      document.body.appendChild(downloadAnchor);
      // Trigger a click event on the anchor element
      downloadAnchor.click();
      // Remove the anchor element from the body
      document.body.removeChild(downloadAnchor);
    };
  
  const handleOnChange =(event)=>
  {
    setText(event.target.value);
  }
  const [text,setText] =useState('');
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" placeholder="enter the text" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-outline-success mx-2" onClick={handleUpCase}>Covert to Upper Case</button>
<button id="downloadBtn" className="btn btn-primary mx-2" onClick={handleDown}>Download</button>
<button className="btn btn-primary mx-2" onClick={handleLoCase}>Covert to Lower Case</button> 
 </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} charaters </p>

    </div>
    </>
  )
}
