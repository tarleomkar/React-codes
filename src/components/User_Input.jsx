import React, { useState } from 'react'

const User_Input = () => {
    const [input, SetInput] = useState('');

  return (
    <div>
        <input type="text" onChange={(e) => SetInput(e.target.value)}/>
        <p>User Input: {input}</p>
    </div>
  )
}

export default User_Input