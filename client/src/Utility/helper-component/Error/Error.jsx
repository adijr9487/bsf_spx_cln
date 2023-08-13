import React from 'react'

const Error = ({children, color}) => {
  return (
    <div className={`${color} error-box absolute fixed text-white p-4 z-30 border-0 rounded-md mt-2 mx-12`}>{children}</div>
  )
}        

export default Error