import React from 'react'

const Logo = () => {
  return (
    <div>
      {/* Logo */}
<div className="flex items-center gap-3 cursor-pointer">

  {/* Logo Icon */}
  <div className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center shadow-md">
    <span className="text-white text-xl font-bold">
      T
    </span>
  </div>

  {/* Logo Text */}
  <div className="flex flex-col leading-none">
    <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
      Trick<span className="text-pink-600">Task</span>
    </h1>

    <p className="text-[10px] text-gray-400 tracking-[3px] uppercase">
      productivity app
    </p>
  </div>

</div>
    </div>
  )
}

export default Logo
