import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Button } from '@chakra-ui/react'
import Style from '../../styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import { delCart } from '../Store/cartSlice'
const Cart = () => {
  const dispatch=useDispatch()
    const Products=useSelector(state=>state.carts)
    const remove=(product)=>{
      dispatch(delCart(product))
    }
  return (
    <div>
      <Heading className={Style.Heading}>My Selected Cart </Heading>
      {
        Products.map((SelectedProduct,id)=>{
            return(

                <div className={Style.SelectedCart}>
                <div  key={id} className={Style.cart2}>
                <img className={Style.Selectedimage}  src={SelectedProduct.image} alt="" />
                <h1 className={Style.id2} > ID: <br />  {SelectedProduct.id}</h1>
                <h1 className={Style.price2}>Price:<br></br> {SelectedProduct.price}Rs</h1>
                <h2 className={Style.title2}>Title:<br></br> {SelectedProduct.title.slice(0,20)}</h2>
                <Button onClick={()=>remove(SelectedProduct.id)} className={Style.btn2} colorScheme='blue'>Remove</Button>
              </div>
              </div>
                ) 

        })
      }

    </div>
  )
}

export default Cart
