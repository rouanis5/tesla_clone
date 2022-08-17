/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { useInView } from 'framer-motion'

function Section({ img, title, description, leftBtnText, rightBtnText }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.76 })

  return (
    <div
      className="min-h-screen overflow-y-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${img})` }}
      ref={ref}
    >
      <div
        className="fixed top-0 left-1/2 mt-32 mb-16 -translate-x-1/2 transition-opacity delay-500 duration-700"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <h2 className="text-5xl capitalize text-black ">{title}</h2>
        <p className="text-lg capitalize">{description}</p>
      </div>
      <div
        className="container fixed bottom-0 left-1/2 mx-auto mt-16 mb-32 max-w-lg -translate-x-1/2 gap-5 space-y-5 px-5 transition-opacity delay-500  duration-700 sm:flex sm:space-y-0"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
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
