import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ZaffBruh")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div 
    className='bg-gray-800 text-center text-white p-4 m-4 text-xl'
    >
    Github name: {data.name} <br />
    Github followers: {data.followers} <br />
    Github following: {data.following} <br />
    <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ZaffBruh")
    return response.json()
}