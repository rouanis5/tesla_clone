/* eslint-disable react/prop-types */
import React from 'react'

function Section({ img, title, description, leftBtnText, rightBtnText }) {
  return (
    <div
      className="scale- flex min-h-screen flex-col justify-around overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <h2 className="text-5xl capitalize text-black ">{title}</h2>
        <p className="text-lg capitalize">{description}</p>
      </div>
      <div className="container mx-auto max-w-lg gap-5 space-y-5 px-5 sm:flex sm:space-y-0">
        <Button text={leftBtnText} />
        {rightBtnText && <Button text={rightBtnText} isLight />}
      </div>
    </div>
  )
}

const lightBtn = 'bg-white text-gray-700 hover:bg-gray-100'
const darkBtn = 'bg-gray-700 text-white hover:bg-gray-800'
function Button({ text, isLight }) {
  return (
    <button
      type="button"
      className={`mx-auto block w-full rounded-full py-2 px-5 text-sm uppercase shadow-lg transition-colors sm:inline sm:w-1/2 sm:py-3 ${
        isLight ? lightBtn : darkBtn
      }`}
    >
      {text}
    </button>
  )
}

export default Section
