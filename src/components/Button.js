import React from 'react'
import cn from 'classnames'

const Button = (props) => {
    // Check
  return (
    <button
      className={cn('button', props.className, { 'button--outline': props.outline,           
     })}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
