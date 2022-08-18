/* eslint-disable react/prop-types */
import React, { useRef } from 'react'
import tw from 'tailwind-styled-components'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

function Section({
  img,
  title,
  description,
  leftBtnText,
  rightBtnText,
  readMore,
  id,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.9 })

  return (
    <div
      className="min-h-screen overflow-y-hidden bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${img})` }}
      ref={ref}
      id={id}
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="fixed top-32 bottom-32 left-0 right-0 flex flex-col justify-between space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <h2 className="text-5xl capitalize text-black ">{title}</h2>
              <p className="text-lg capitalize">{description}</p>
            </div>
            <div className="container mx-auto max-w-lg px-5">
              <div className="gap-5 space-y-5 sm:flex sm:space-y-0">
                <Button>{leftBtnText}</Button>
                {rightBtnText && <Button $isLight>{rightBtnText}</Button>}
              </div>
              {readMore && (
                <a
                  className="fixed left-1/2 bottom-10 inline-block -translate-x-1/2"
                  href="/#"
                >
                  <FaChevronDown className="inline-block animate-bounce" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
