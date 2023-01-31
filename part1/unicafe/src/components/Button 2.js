import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <>
        <button  className="btn" onClick={onClick[0].good}>
        {onClick[0].text}
        </button>
        <button  className="btn" onClick={onClick[1].neutral}>
        {onClick[1].text}
        </button>
        <button  className="btn" onClick={onClick[2].bad}>
        {onClick[2].text}
        </button>
    </>
  )
}

export default Button