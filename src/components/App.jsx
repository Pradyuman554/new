import React, {useState} from "react";

function App() {
  const [heading, setheadingtext] = useState("Hellu");
  
  function handleClick(){
    setheadingtext("Bye");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick = {handleClick}>Submit</button>
    </div>
  );
}

export default App;
