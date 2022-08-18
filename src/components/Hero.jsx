import React from 'react'
import { useSelector } from 'react-redux'
import Section from './Section'

function Hero() {
  const sections = useSelector((state) => state.section)
  return (
    <div>
      {sections.map(
        (el, index) =>
          el.data && (
            <Section
              key={el.id}
              id={el.id}
              title={el.title}
              img={el.data.img}
              description={el.data.description}
              leftBtnText={el.data.leftBtn}
              rightBtnText={el.data.rightBtn}
              readMore={index === 0}
            />
          )
      )}
    </div>
  )
}

export default Hero
