import React from 'react'

interface Props{
  params: {photos_id: number, id: number}
}

const UserDetailsPhotos = ({params: {photos_id, id}}: Props) => {
  return (
    <div>
      <p>UserDetailsPhotos {photos_id}</p> 
      <p>User ID {id}</p>
    </div>
  )
}

export default UserDetailsPhotos
