import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Button = ({ onClick }) => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between pt-10">
      <div>
        <button
          onClick={() => navigate('/history')}
          className=" w-40 h-12 rounded-lg text-blue-600 border border-blue-600"
        >
          Hủy
        </button>
      </div>
      <div>
        <button
          onClick={onClick}
          className=" w-40 h-12 rounded-lg text-white bg-blue-500"
        >
          Lưu thông tin
        </button>
      </div>
    </div>
  )
}

export default Button
