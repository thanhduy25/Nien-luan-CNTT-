import React from 'react'
import { Button } from 'antd';

const ButtonComponent = ({size,textButton, ...rests}) => {
  return (
    <div>
        <Button 
        size ={size}
        {...rests}
        >
        <span>{textButton}</span></Button>
    </div>
  )
}

export default ButtonComponent