import React from "react"

const Topbar = ({ saveFlow }: any) => {
    return (
      <div className="savingChange">
        <button onClick={saveFlow}>Save Changes</button>
      </div>
    )
  }
  
  export default Topbar