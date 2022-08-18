import { configureStore } from '@reduxjs/toolkit'
import sectionReducer from '../features/section/sectionReducer'

const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
})

export default store
