import React from 'react'
import Style from '../../styles/Home.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const GetData=useSelector((state)=>state.carts)
  return (
    <>
     <div className={Style.Navbar}>
             <span className={Style.ItemStore}>Item Store</span>
               
                <Link href='/Components/cart' className={Style.Link}>Cart</Link>
                <Link href='/' className={Style.Link}>Home</Link>
                
                     <span className={Style.Link}>CartItem:{GetData.length}</span>
                     </div>      
    </>
      )
}

export default Navbar
