import React from 'react'
import './Launches.css'
import Search from './Search/Search'
import Row from './Row/Row'

const Launches = () => {
  return (
    <div className="h-screen relative flex " style={{ background: "#141414" }}>
      <h3
        className="absolute top-8 right-8 text-slate-50 uppercase"
        style={{ letterSpacing: "6px" }}
      >
        Mission & Launches
      </h3>
      <div className='launches-body mt-20 w-full'>
        <Search onSearch={(data)=>{console.log(data)}}/>
        <div className='px-20 my-4'>
          <Row isHeader={true} data={{'name': null, 'Type': null, 'Status': null}} />
          <Row isHeader={false} data={{'name': 'Falcone9', 'Type': 'Merlin A', 'Status': false}} />
          <Row isHeader={false} data={{'name': 'Falcone9', 'Type': 'Merlin A', 'Status': false}} />
        </div>
      </div>
    </div>
  )
}

export default Launches