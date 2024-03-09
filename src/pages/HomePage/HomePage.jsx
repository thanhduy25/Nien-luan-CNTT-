import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/image/lapslide.webp'
import slider2 from '../../assets/image/lapslide1.webp'
import CartComponent from '../../components/CartComponent/CartComponent'



const HomePage = () => {
  const ar =['Acer','Msi','Asus', 'Lenovo','Hp','MacBook']
  return (
    <div style={{padding:'0 120px'}}>
      <WrapperTypeProduct>
        {ar.map((item) => {
          return(
            <TypeProduct name={item} key={item}/>
          )
        })}
      </WrapperTypeProduct>
      <SliderComponent arrImage={[slider1, slider2]}/>
      <div style={{marginTop:'20px' ,display:'flex', alignItems:'center', gap:'20px'}}>
      <CartComponent  />
      <CartComponent  />
      <CartComponent  />
      <CartComponent  />
      <CartComponent  />
      </div>
      
    </div>
  )
}

export default HomePage