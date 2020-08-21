import React from "react"
import "../css/WelcomeBox.css"

const WelcomeBox = ({ children, style }) => {
  return (
    <div className="welcome-box col" style={style}>
      {children}
    </div>
  )
}

export default WelcomeBox
