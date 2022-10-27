import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
        <div className="w-16 h-16 border-8 border-b-white border-red-500 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading