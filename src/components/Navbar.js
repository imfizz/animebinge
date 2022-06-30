import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // menu style
  const menu = {
    color: "#fff",
    fontSize: "40px",
    cursor: "pointer",
    transform: "translateY(2px)"
  }

  return (
    <nav>
        <h1>AnimeBinge</h1>
        <ul>
            <li>Home</li>
            <li>Discover</li>
            <li>About Us</li>
            <li>
                <button className="signup">Sign Up</button>
            </li>
            <li>
                <button className="login">Log In</button>
            </li>
        </ul>

        {width < 830 && <MenuIcon style={menu} /> }
    </nav>
  )
}

export default Navbar