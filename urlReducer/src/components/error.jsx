import React from 'react'

const Error = ({message}) => {
  return (
    <div>
      <span className='text-red-600'>{message}</span>
    </div>
  )
}

export default Error
