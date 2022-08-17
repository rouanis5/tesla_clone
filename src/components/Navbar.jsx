/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdExitToApp } from 'react-icons/md'
import tw from 'tailwind-styled-components'

const logo = new URL('../images/logo.svg', import.meta.url).href

const links = [
  { breakpoint: 'xl', text: 'Model S', link: '/#' },
  { breakpoint: 'xl', text: 'Model 3', link: '/#' },
  { breakpoint: 'xl', text: 'Model X', link: '/#' },
  { breakpoint: 'xl', text: 'Model Y', link: '/#' },
  { breakpoint: 'xl', text: 'Solar roof', link: '/#' },
  { breakpoint: 'xl', text: 'Solar panels', link: '/#' },
  { breakpoint: 'sm', text: 'shop', link: '/#' },
  { breakpoint: 'sm', text: 'account', link: '/#' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-5 pt-5">
        <motion.div
          initial={{ scale: 0, x: -100, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
        >
          <a href="/logo">
            <img src={logo} alt="tesla log" />
          </a>
        </motion.div>
        <div className="hidden xl:block">
          {links.map(
            ({ text, link, breakpoint }) =>
              breakpoint === 'xl' && (
                <Link key={text} href={link}>
                  {text}
                </Link>
              )
          )}
        </div>
        <div>
          <div className="hidden sm:inline-block">
            {links.map(
              ({ text, link, breakpoint }) =>
                breakpoint === 'sm' && (
                  <Link key={text} href={link}>
                    {text}
                  </Link>
                )
            )}
          </div>
          <Menu
            onClick={() => {
              setOpen(true)
            }}
          >
            menu
          </Menu>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              onClick={() => {
                setOpen(false)
              }}
              className="fixed inset-0 bg-gray-600/30 backdrop-blur-sm"
            />
            <motion.div
              initial={{ transform: 'translateX(100%)', opacity: 0 }}
              animate={{ transform: 'translateX(0%)', opacity: 1 }}
              exit={{ transform: 'translateX(100%)', opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className="fixed top-0 right-0 bottom-0 flex w-72 
                flex-col gap-3 overflow-y-auto bg-gray-200 px-8 py-5 shadow-lg"
            >
              <Exit
                type="button"
                className=""
                onClick={() => {
                  setOpen(false)
                }}
              >
                <MdExitToApp />
              </Exit>
              {links.map(({ text, link }) => (
                <Link
                  key={text}
                  href={link}
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  {text}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Button = tw.a`
relative inline-block rounded-xl px-4 py-2 capitalize
before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-white/30 before:shadow-lg before:backdrop-blur-sm before:transition-opacity hover:before:opacity-100
focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1
focus:before:opacity-100
`
const Link = tw(Button)`before:opacity-0`
const Menu = tw(Button)`before:sm:opacity-0 cursor-pointer`
const Exit = tw(Link)`
sticky top-0 ml-auto rounded-full before:rounded-full p-4 text-2xl cursor-pointer`

export default Navbar
