import React from 'react'
import CartContainer from '../../componentAddToCart/CartContainer'
// import Navbar from '../../componentAddToCart/Navbar'
import Navigation from '../Home/navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, getCartItems } from '../../features/cart/cartSlice'
import { useEffect } from 'react'
import Modal from '../../componentAddToCart/Modal'

const AddToCart = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch  = useDispatch();

  useEffect(() =>{
    dispatch(getCartItems());
  }, []);

  useEffect(()=>{
    dispatch(calculateTotal());
  }, [cartItems]);

  if(isLoading){
    return(
      <div className='loading'>
        <h2>Loading......</h2>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal/>}
      <Navigation />
      <CartContainer />
    </main>
  )
}

export default AddToCart;