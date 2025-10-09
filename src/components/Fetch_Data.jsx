import React, { useEffect, useState } from 'react'

const Fetch_Data = () => {
    const [data, setData] = useState("");

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => setData(json))
    console.log(data);
    
    }, [])

  return (
    <div>
    {data? (
    <div>
    <h2>API Data</h2>
    <p>UserId: {data.userId}</p>
    <p>Id: {data.id}</p>
    <p>Title: {data.title}</p>
    <p>Body: {data.body}</p>
    </div>
    ) : (
    <p>Loading...</p>
    )
    }
    </div>
  )
}

export default Fetch_Data