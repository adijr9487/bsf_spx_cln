import React from 'react'
import './Notify.css'
const Notify = ({children, color}) => {
  return (
    <div className={`${color} notify-box absolute fixed text-white p-4 z-30 border-0 rounded-md mt-2 mx-12`}>{children}</div>
  )
}        

export default Notify