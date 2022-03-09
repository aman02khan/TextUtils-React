import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const upclicked=()=>{
        console.log("clicked")
        let newtext=text.toUpperCase()
        setText(newtext)
    }
    const lowclicked=()=>{
        console.log("clicked")
        let newtext=text.toLowerCase()
        setText(newtext)
    }
    const clear=()=>{
        console.log("clear")
        let newtext=""
        setText(newtext)
    }
    const changed=(event)=>{
        setText(event.target.value)
        console.log("changed")
    }

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
    {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
    <textarea className="form-control" placeholder='enter your text' value={text} onChange={changed} id="exampleFormControlTextarea1" rows="7"></textarea>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={upclicked}>convert to uppercase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={lowclicked}>convert to lowercase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={clear}>clear text</button>
    </div>
    <div className='container my-3'>
        <h2>
            Your text summary
        </h2>
        <p>{text.split(' ').length} words and {text.length} alphabets</p>
        <p>{0.008*(text.split(' ').length)} minutes read</p>

        <h1>Preview</h1>
        <p>{text}</p>

        </div>
    </>
  )
}
