import React from 'react'

const Nav = () => {
  return (
    <div>
         <div className="nav">
        <ul>
         <Link to="/"><li>Home</li></Link>
          <li>About</li>
          <li>login</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
