import React from 'react'
import cover from "../../Utility/Asset/falcon-heavy-cover.jpg"
const Recent = () => {
  return (
    <div
      className="h-screen relative flex items-start"
      style={{ background: `url(${cover})`, backgroundSize: "cover", backgroundPosition: 'center'}}
    >
      <h3
        className="absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Recents
      </h3>
      <div className="h-full w-screen" style={{background: '#1313133b'}}>
        
      </div>
    </div>
  )
}

export default Recent