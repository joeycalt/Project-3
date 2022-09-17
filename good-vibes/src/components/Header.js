import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <h1 className='header'>
        <img className='top-img' src='https://i.im.ge/2022/09/17/12hdeq.Screen-Shot-2022-09-17-at-1-51-47-PM.png'></img>
        GoodVibes Betting
    <img className='top-img' src='https://i.im.ge/2022/09/17/12hdeq.Screen-Shot-2022-09-17-at-1-51-47-PM.png'></img>
    </h1>
    <nav className="nav navbar">
   
      <Link to="/">
      <img className='logo'  src='https://i.im.ge/2022/09/17/12hdeq.Screen-Shot-2022-09-17-at-1-51-47-PM.png'></img>
      </Link>
      <Link to='/baseball'>Baseball
      </Link>
      <Link to='/football'>Football
      </Link>
      <Link to='/hockey'>Hockey
      </Link>
    </nav>
</>
  )
}

export default Header