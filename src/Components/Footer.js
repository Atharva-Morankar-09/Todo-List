
import React from 'react'

export const Footer = () => {
  let FooterStyle ={
    // position: 'fixed',
    // // padding: '10px 10px 10px 10px',
    // bottom: '0px',
    // width: '100%',
    // /* Height of the footer*/ 
    // height: '40px',
    position: "relative",
    // // padding: '10px 10px 10px 10px',
    top: "40vh",
    width: "100%",
    // /* Height of the footer*/ 
    // height: '40px',
  }
  return (
    <div className=''>
<footer className="bg-dark text-light" style={FooterStyle}>
      <p className="text-center">
        Copyright &copy; Todos.com  
      </p>  
    </footer>
    </div>
    
  )
}
