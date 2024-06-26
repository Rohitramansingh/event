import { configureStore, createSlice } from "@reduxjs/toolkit";
import arr from '../Data.json'
import { Alert } from "@mui/material";
import axios from "axios";


 let initialState=[]
let cartitem=[]




console.log(initialState,"intial")

const itemSlice=createSlice({
    name: 'cart',
    initialState: {
      item: initialState,
      search:"",
      categogaryList:["sport"],
      Modal:false,
      cartList:[],
      length : 0,
    
      searchlist:[],
      isLogin:false,
      loginModal:false,  
      userdata:""

    },
    reducers:{

   search(state,action)
   {
    const {data}=action.payload
    
    state.search=data;  

     
    


   },

   setInitialData(state,action)
   {
    state.item=action.payload.data;

   },
    

  

   
   ActiveBtn(state,action){
      const {data} =action.payload;
      const find=state.categogaryList.findIndex((val)=>val===data)
      if(find===-1)
        {
            state.categogaryList.push(data);

        }else{
            const temp=state.categogaryList.filter((val)=>val!==data)
            state.categogaryList=temp;

        }
   },

    AddCart(state, action) {
       const{data}=action.payload;
       state.cartList=data;
       state.length=state.cartList.length;

  },

  Increment(state, action) {
    const { id } = action.payload;
    const item = state.cartList.find(item => item.id === id);
    if (item) {
      item.quantity += 1;
      state.length += 1;
    }
  },

  Decrement(state, action) {
    const { id } = action.payload;
    const item = state.cartList.find(item => item.id === id);

    if (item) {


      item.quantity -= 1;


          if(item.quantity<=0)
            {
              // counterSlice.caseReducers.DeleteItem(state,{payload:{id:id}})
              const itemIndex=state.cartList.findIndex(val=>val.id===id);
              state.length -= state.cartList[itemIndex].quantity;
               state.cartList.splice(itemIndex, 1);


            }

    }
  },
  User(state,action)
  {
    const {data}=action.payload;
    state.userdata=data;
  },

  priceFilter(state,action){
    const {data}=action.payload;
    const min=parseInt(data.min);
    const max=parseInt(data.max);
    console.log(data,"minmax")
    state.item=initialState;
      if(data.min==="" && data.max==="")
        {
            state.item=initialState;
        }else{

            const filteredItems = state.item.filter((val) => {
                const price = parseInt(val.price);
                return price >= min && price <= max;
              });
            console.log(filteredItems ,"pricefilter")

            state.item=filteredItems;

        }


  },

  DeleteItem(state, action) {
    
  },

   openModal(state)
   {
    state.Modal=true;
   },

   closeModal(state)
   {

    state.Modal=false;
   },

  login(state,action){
    alert(action.payload)
    state.cartList=action.payload;
    console.log(state.cartList,"apc")
    state.isLogin=true;
  },

  logout(state)
  {
    state.isLogin=false;

  },

   singUp(state,action)
   {
     const {data}=action.payload;
     alert(data.email)
     state.login.push(data);
     console.log(data,"singup")

   },

   opentLoginModal(state)
   {
    state.loginModal=true;
  },
   closeLoginModal(state)
   {
    state.loginModal=false;

   }
}
}
)

const store=configureStore({
    reducer:itemSlice.reducer
})

export const Action =itemSlice.actions;
export default store;