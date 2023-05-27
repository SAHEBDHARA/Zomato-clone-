import React from 'react'

const Tab = ({ActiveTab, setActiveTab}) => {
  return (
    <button onClick={()=> setActiveTab('Nightlife')}> on Click </button>
  )
}

export default Tab