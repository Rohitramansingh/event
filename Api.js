import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../Store/store";
import axios from "axios";
import { legacy_createStore } from "@reduxjs/toolkit";


export const PostToCart = async ({ user, data }) => {

  try {
    const { data: userData } = await axios.get(`http://localhost:8000/users/${user.id}`);
    const existingItemIndex = userData.cartdata.findIndex(item => item.id === data.id);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity by one
      userData.cartdata[existingItemIndex].quantity = parseInt(userData.cartdata[existingItemIndex].quantity)+1;
    } else {
      // If the item doesn't exist, push the new data
      userData.cartdata.push({...data});
    }

    const response = await axios.put(`http://localhost:8000/users/${user.id}`, userData);

    if (response.status !== 200) {
      throw new Error("Error updating data");
    }

  } catch (error) {
    console.error('Error:', error.message);
    alert("Error: " + error.message);
  }
}

export const detailCart = async ({ user, data }) => {

  try {
    const { data: userData } = await axios.get(`http://localhost:8000/users/${user.id}`);
    const existingItemIndex = userData.cartdata.findIndex(item => item.id === data.id);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity by one
      userData.cartdata[existingItemIndex].quantity = parseInt(data.quantity)+userData.cartdata[existingItemIndex].quantity ;
    } else {
      // If the item doesn't exist, push the new data
      userData.cartdata.push({...data});
    }

    const response = await axios.put(`http://localhost:8000/users/${user.id}`, userData);

    if (response.status !== 200) {
      throw new Error("Error updating data");
    }

  } catch (error) {
    console.error('Error:', error.message);
    alert("Error: " + error.message);
  }
}




export const deleteCart=async(id)=>{
  try{

    const res= await axios.delete(`http://localhost:8000/users/${id}`);
  if(res.ok)
    return true;

  
    return false;
  }catch(error)
  {
    console.log(error)
    return false;
  }
  
  
}


export const getProduct=async(id)=>{
  try{
    const res= await axios.get(`http://localhost:8000/product/${id}`);
    return res.data;

  }catch(error)
  {
    console.log(error);
  }
}

export const getUser=async(data)=>{
  try{
  const res=await axios("http://localhost:8000/users");
  const {email,password}=data;
  const find= res.data.find((val)=>val.data.email===email && val.data.password===password)
  console.log(find,"ff");
  return find ;

  }catch(error)
  {
    console.log(error);
    return null;
  }
}

export const getCartData=async(id)=>{
  try{
    const res= await axios.get(`http://localhost:8000/users/${id}`);
    console.log(res.data.cartdata,"nnn");
  
  return res.data.cartdata ;

  }catch(error)
  {
    console.log(error);
  
  }
}

export const singup=async(data)=>{
  try{
    const obj={...data,cartdata:[]}
  const res=await axios.post("http://localhost:8000/users",obj);
  if(!res.ok)
    throw new Error("unable to registered user")
  return ;

  }catch(error)
  {
    console.log(error);
    return null;
  }
}