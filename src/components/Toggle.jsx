import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, isToggled] = useState(false);

    function checkIsToggled() {
    isToggled(!toggle)
    }

  return (
    <>
    <label>
    <input type="checkbox" onChange={checkIsToggled}/>
    </label>
    <p>{toggle ? "On" : "Off"}</p>
    </>
  )
}

export default Toggle