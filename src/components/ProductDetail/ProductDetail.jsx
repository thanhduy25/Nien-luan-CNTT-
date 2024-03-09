import { Row, Col, Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/image/lapdetail.webp'
import { Button } from 'antd/es/radio'

const ProductDetail = () => {
  return (
    <Row>
        <Col span = {10}>
            <Image src={imageProduct} alt='image product' preview="false"/>
        </Col>
        <Col span = {14}>
            <div>
                <h1>Giới thiệu sản phẩm</h1>
            </div>
        <div style={{display:'flex'}}>
            <Button style={{width:'200px', height:'80px', margin:'10px'}} >Option 1</Button>
            <Button style={{width:'200px', height:'80px', margin:'10px'}} >Option 2</Button>
            <Button style={{width:'200px', height:'80px', margin:'10px'}} >Option 3</Button>
        </div>
        
        </Col>
    </Row>
  )
}

export default ProductDetail