import React from 'react'
import './styles/tailwind.css'
import Section from './components/Section'

const sections = [
  {
    img: new URL('./images/model-3.jpg', import.meta.url).href,
    title: 'model 3',
    description: 'order online for touchless delivery',
    leftBtn: 'custom order',
    rightBtn: 'existing inventory',
  },
  {
    img: new URL('./images/model-y.jpg', import.meta.url).href,
    title: 'model Y',
    description: 'order online for touchless delivery',
    leftBtn: 'custom order',
    rightBtn: 'existing inventory',
  },
  {
    img: new URL('./images/model-s.jpg', import.meta.url).href,
    title: 'model S',
    description: 'order online for touchless delivery',
    leftBtn: 'custom order',
    rightBtn: 'existing inventory',
  },
  {
    img: new URL('./images/model-x.jpg', import.meta.url).href,
    title: 'model X',
    description: 'order online for touchless delivery',
    leftBtn: 'custom order',
    rightBtn: 'existing inventory',
  },
  {
    img: new URL('./images/solar-panel.jpg', import.meta.url).href,
    title: 'solar panels',
    description: 'Lowest Cost Solar Panels in America',
    leftBtn: 'order now',
    rightBtn: 'learn more',
  },
  {
    img: new URL('./images/solar-roof.jpg', import.meta.url).href,
    title: 'solar roof',
    description: 'Produce Clean Energy From Your Roof',
    leftBtn: 'order now',
    rightBtn: 'learn more',
  },
  {
    img: new URL('./images/accessories.jpg', import.meta.url).href,
    title: 'accessories',
    leftBtn: 'shop now',
  },
]
function App() {
  return (
    <div>
      {sections.map((el) => (
        <Section
          key={el.title}
          img={el.img}
          title={el.title}
          description={el.description}
          leftBtnText={el.leftBtn}
          rightBtnText={el.rightBtn}
        />
      ))}
    </div>
  )
}

export default App
