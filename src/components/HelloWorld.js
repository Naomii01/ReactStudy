import React from 'react'

function HelloWorld({numberprops, name}) {

    const greeting = "Hello World";
    const introduction = " My name is Naomi";
    const link ="https://www.google.com";
    

  return (
    <div style= {myStyle}>
        <div>{greeting} ! {name}</div>
        <div>{introduction}</div>
        <div>This number is from props, {numberprops}</div>
        <a href={link} >Go to Google</a>
        <div className='call-app-css'>Call App CSS Class</div>
        </div>
  );
}
const myStyle = {backgroundColor: 'pink', padding:'10px', fontSize: '20px', color: 'red'};

export default HelloWorld;