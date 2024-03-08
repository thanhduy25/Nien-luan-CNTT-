import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonSearch = (props) => {
    const {size, placeholder, textButton}= props
  return (
    <div style={{display:'flex'}}>
        <InputComponent placeholder={placeholder}/>
        <ButtonComponent 
        size={size}
        textButton={textButton}
        icon={<SearchOutlined />}
        />
    </div>
  )
}
export default ButtonSearch