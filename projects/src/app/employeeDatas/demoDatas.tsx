import React from 'react'
interface DemoDatasProps {
    emails:string;
}
const DemoDatas =({emails}:DemoDatasProps)  => {
  return (
    <div>arulWorks for {emails}</div>
  )
}

export default DemoDatas;