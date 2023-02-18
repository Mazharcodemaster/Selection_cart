
import Style from '../../styles/Home.module.css'
import { Heading,Button } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../Store/cartSlice'



const Products=()=>{
 const dispatch=useDispatch()
  const [data,setData]=useState([])

useEffect(()=>{
     const fetchData=async()=>{
     const fetch=await axios.get('https://fakestoreapi.com/products')
     const res=await fetch.data
        // console.log(res)
          return setData(res);

    }
  fetchData()
},[])
 const AddCart=(item)=>{
 dispatch(addCart(item))
 }
  return (
 
    <>
    
    <div className={Style.Products}> 
      <Heading className={Style.ProHeading} as='h1' size='3xi' color='red.700'>My products</Heading>
      {
          data.map((item,id)=>{
            return(
              
              <div  key={id} className={Style.cart}>
                <img className={Style.image}  src={item.image} alt="" />
                <h1 className={Style.id} > {item.id}</h1>
                <h1 className={Style.price}>{item.price}Rs</h1>
                <h2 className={Style.title}>{item.title}</h2>
                <Button onClick={()=>AddCart(item)} className={Style.btn} colorScheme='blue'>Button</Button>
              </div>
            )
          })
        } 
   </div>
   
    </>
  )
}


export default Products
