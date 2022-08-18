import { createSlice } from '@reduxjs/toolkit'

const init = [
  {
    id: 's_1',
    title: 'model 3',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/model-3.jpg', import.meta.url).href,
      description: 'order online for touchless delivery',
      leftBtn: 'custom order',
      rightBtn: 'existing inventory',
    },
  },
  {
    id: 's_2',
    title: 'model Y',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/model-y.jpg', import.meta.url).href,
      description: 'order online for touchless delivery',
      leftBtn: 'custom order',
      rightBtn: 'existing inventory',
    },
  },
  {
    id: 's_3',
    title: 'model S',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/model-s.jpg', import.meta.url).href,
      description: 'order online for touchless delivery',
      leftBtn: 'custom order',
      rightBtn: 'existing inventory',
    },
  },
  {
    id: 's_4',
    title: 'model X',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/model-x.jpg', import.meta.url).href,
      description: 'order online for touchless delivery',
      leftBtn: 'custom order',
      rightBtn: 'existing inventory',
    },
  },
  {
    id: 's_5',
    title: 'solar panels',
    breakpoint: { xl: true },

    data: {
      img: new URL('../../images/solar-panel.jpg', import.meta.url).href,
      description: 'Lowest Cost Solar Panels in America',
      leftBtn: 'order now',
      rightBtn: 'learn more',
    },
  },
  {
    id: 's_6',
    title: 'solar roof',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/solar-roof.jpg', import.meta.url).href,
      description: 'Produce Clean Energy From Your Roof',
      leftBtn: 'order now',
      rightBtn: 'learn more',
    },
  },
  {
    id: 's_7',
    title: 'accessories',
    breakpoint: { xl: true },
    data: {
      img: new URL('../../images/accessories.jpg', import.meta.url).href,
      leftBtn: 'shop now',
    },
  },
  {
    id: 's_8',
    title: 'shop',
    breakpoint: { sm: true },
  },
  {
    id: 's_9',
    title: 'account',
    breakpoint: { sm: true },
  },
]

const cakeSlice = createSlice({
  name: 'section',
  initialState: init,

  reducers: {},
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
