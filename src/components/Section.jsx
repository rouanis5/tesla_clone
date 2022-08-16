/* eslint-disable react/prop-types */
import React from 'react'
import tw from 'tailwind-styled-components'

function Section({ img, title, description, leftBtnText, rightBtnText }) {
  return (
    <div
      className="scale- flex min-h-screen flex-col justify-between overflow-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="pt-32">
        <h2 className="text-5xl capitalize text-black ">{title}</h2>
        <p className="text-lg capitalize">{description}</p>
      </div>
      <div className="container mx-auto max-w-lg gap-5 space-y-5 px-5 pb-32 sm:flex sm:space-y-0">
        <Button>{leftBtnText}</Button>
        {rightBtnText && <Button $isLight>{rightBtnText}</Button>}
      </div>
    </div>
  )
}

const Button = tw.button`
mx-auto block w-full rounded-full py-2 px-5 text-sm uppercase shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 sm:inline sm:w-1/2 sm:py-3
${(p) =>
  p.$isLight
    ? 'bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-100'
    : 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-800'}
`

export default Section
