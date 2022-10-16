import { createSlice } from '@reduxjs/toolkit'
import { menuItemsData } from '../Components/data'
const initialState = {
  products : menuItemsData,
  added_products : [
    
  ],

}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.added_products.push({...action.payload,qty:1})  
     
    },
    deleteToCart: (state,action) => {
         state.added_products = state.added_products.filter(product => product.id!=action.payload.id)
       
    },
    emptyCart: (state)=>{
      state.added_products = []
    },
    increaseQty:(state,action)=>{
      state.added_products.map(product=>{
        if(product.id == action.payload.id){
          return product.qty++
        }
      })
    },
    decreaseQty:(state,action)=>{
      state.added_products.map(product=>{
        if(product.id == action.payload.id){
          
          return product.qty--
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteToCart ,increaseQty,decreaseQty,emptyCart} = productsSlice.actions

export default productsSlice.reducer