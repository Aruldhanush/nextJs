import React from 'react'
interface LeavesProps {
   leaves:string;
}
const Leaves = ({leaves}:LeavesProps) => {
  return (
    <div>Arul Leaves{leaves}</div>
  )
}

export default Leaves