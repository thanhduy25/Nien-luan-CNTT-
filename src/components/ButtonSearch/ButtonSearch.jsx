import React from 'react'
import { Button , Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const ButtonSearch = (props) => {
    const {size, placeholder, textButton}= props;
  return (
    <div style={{display:'flex'}}>
        <Input placeholder={placeholder}></Input>
        <Button size ={size} icon={<SearchOutlined />}>{textButton}</Button>
    </div>
  )
}
export default ButtonSearch