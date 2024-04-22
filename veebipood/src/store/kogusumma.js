import { createSlice, configureStore } from '@reduxjs/toolkit'

const cartSumSlice = createSlice({
  name: 'cartSum',
  initialState: {
    value: 0 // localStorage.getItem ---> kõik tooted ja arvuta kogusumma
  },
  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    deduct: (state, action) => {
      state.value -= action.payload;
    },
    empty: state => {
      state.value = 0;
    }
  }
})

export const { add, deduct, empty } = cartSumSlice.actions

export default configureStore({
  reducer: {
    cartSum: cartSumSlice.reducer
  }
})

// export const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}


// Ülikool
// töökoht garanteeritud
// sotsiaalne kapital 

// Udemy/Udacity

// Praktikal