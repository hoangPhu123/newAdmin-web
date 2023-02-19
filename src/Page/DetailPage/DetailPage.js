import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {

  let parasm = useParams()
  return (
    <div>
      <h2 className='text-center text-red-600 text-3xl w-screen'>id: {parasm.id}</h2>
    </div>
  )
}
