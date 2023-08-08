import React from 'react'
import './Timeline.css'

const Timeline = () => {
  return (
    <div className="h-screen relative" style={{ background: "#141414" }}>
      <h3
        className="absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Timeline
      </h3>
      <div className="time-list overflow-scroll">
        
      </div>
    </div>
  )
}

export default Timeline