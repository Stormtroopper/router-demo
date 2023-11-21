import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-650 text-white p-5 text-2xl'>
            Github:{data.public_repos}
            <img src={data.avatar_url} alt="Github pic" width={340} />
        </div>
    )
}
export const githubloading = async () => {
    const response = await fetch('https://api.github.com/users/stormtroopper')
    return response.json()
}
export default Github