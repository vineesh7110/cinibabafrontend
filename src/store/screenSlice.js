import { createSlice, current } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
name:'screen',
initialState: {
    tiers:[],
    selectedSeats:[],
    totalPrice: 0,
    selectedShow: null
},
reducers:{
  addTiers:(state, action)=>{
   state.tiers = action.payload
    },
    selectShow:(state,action)=>{
      state.selectedShow = action.payload
    },
    selectSeat:(state, action)=>{
        console.log(action.payload)
        state.selectedSeats.push(action.payload)
        state.tiers.map((tier)=>{
          tier.rows.map((row)=>{
            if(row.name === action.payload.rowName){
              const price = tier.price
              state.totalPrice = state.totalPrice+price
            }
          })
        })
    },
    deselectSeat:(state,action)=>{
      const deselectedSeat = action.payload
      state.selectedSeats = state.selectedSeats.filter(selectedSeat => {
        if(selectedSeat.rowName === deselectedSeat.rowName && selectedSeat.seatNumber === deselectedSeat.seatNumber){

        }
        else{
          return selectedSeat
        }
      })
     
        state.tiers.map((tier)=>{
          tier.rows.map((row)=>{
            if(row.name === action.payload.rowName){
              const price = tier.price
              state.totalPrice = state.totalPrice-tier.price
            }
          })
        })
    } 
  }
})
export const { addTiers,selectSeat,selectShow,deselectSeat } = screenSlice.actions
export default screenSlice.reducer