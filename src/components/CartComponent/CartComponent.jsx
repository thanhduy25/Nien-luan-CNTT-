import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const CartComponent = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_-_2023-06-08t005130.908.png" />}
    >
    <Meta title="Laptop 1"/> 
   </Card>
  )
}

export default CartComponent