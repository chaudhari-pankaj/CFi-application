import React from 'react'
// import image from '../images/car.jpg'
import tate from '../images/tate-removebg-preview.png'
import './content.css';
import './theme.js';

const Content = () => {
  return (
    <>
    <div className="bigbox">
      <div className="uppercontent">
      <div className="content">
            <div className="contenttext">
            <h1>Hustler's University</h1>
            <p>Where people find their peace</p>
            </div>
        </div>
      </div>
    <div id="theme" class="contentcontainer">
      <div className="left">
        {/* <button>hello</button> */}
        <div className="lefttext">
        <h1>Want to escape the matrix?</h1>
        <h2>Join the like minded people who are constantly working to get free of the clutches of matrix and learn to live like real men for just $10</h2>
        <button>Apply</button>
        </div>
      </div>
      <div className="right">
      <img src={tate} alt="where's tate"></img>
      </div>
      <div className="themebutton">
      <button id="themechange" class="light">Light</button>
      </div>
        {/* <script src="./theme.js" ></script> */}
      </div>
    </div>
    </>
  )
}

export default Content
