import React from 'react'
import './styles/tailwind.css'
import Section from './components/Section'

const model3Img = new URL('./images/model-3.jpg', import.meta.url).href
const modelYImg = new URL('./images/model-y.jpg', import.meta.url).href
const modelSImg = new URL('./images/model-s.jpg', import.meta.url).href
const modelXImg = new URL('./images/model-x.jpg', import.meta.url).href
const solarPanelImg = new URL('./images/solar-panel.jpg', import.meta.url).href
const solarRoofImg = new URL('./images/solar-roof.jpg', import.meta.url).href
const accessoriesImg = new URL('./images/accessories.jpg', import.meta.url).href

function App() {
  return (
    <div>
      <Section
        img={model3Img}
        title="model 3"
        description="order online for touchless delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        img={modelYImg}
        title="model Y"
        description="order online for touchless delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        img={modelSImg}
        title="model S"
        description="order online for touchless delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        img={modelXImg}
        title="model X"
        description="order online for touchless delivery"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        img={solarPanelImg}
        title="solar panels"
        description="Lowest Cost Solar Panels in America"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        img={solarRoofImg}
        title="solar roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        img={accessoriesImg}
        title="accessories"
        leftBtnText="shop now"
      />
    </div>
  )
}

export default App
